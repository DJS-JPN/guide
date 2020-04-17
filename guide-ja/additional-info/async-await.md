# async/await を理解する。

ECMAScript 2017にあまり馴染みがない方は、async/awaitについて知らないかもしれません。 Promiseの扱い方としては、巻き上げて処理するのに便利ですね。 さらに、見た目がすっきりになり、全体的な可読性が向上し、やや高速です。

## Promiseはどのように機能しますか？

async/await に入る前に、Promise とは何か、どのように動作するのかを知っておく必要があります。 Promiseとは何か、その対処法を知っていれば、この部分は読み飛ばしても大丈夫です。

PromiseはJavaScriptで非同期タスクを処理するための方法で、コールバックに代わる新しい方法です。 Promiseは、プログレスバーと多くの類似点があり、Promiseはまだ終わっていない進行中の処理を表しています。 その良い例がサーバーへのリクエストです。（例: discord.jsがDiscord APIにリクエストを送る）

Promiseには、保留（pending）、解決（resolved）、拒否（rejected）の3つの状態があります。

**pending**の状態は、Promiseがまだ進行中で、解決も拒否もされていない状態を意味します。 **resolved**の状態は、Promiseの処理が終わり、エラーなく実行されたことを意味します。 **rejected**の状態は、プロミスがエラーに遭遇し、正しく実行できなかったことを意味します。

一つ知っておくべき重要なことは、Promiseは一度に一つの状態しか持てないということであり、保留と解決、拒否と解決、保留と拒否はあり得ないということです。 「コードではどう見えるのか」という質問があるかもしれません。 ここでは小さな例を紹介します。:

::: tip
この例ではES6のコードを使用しています。 これが何なのか分からない人は、[ここ](/additional-info/es6-syntax.md)を読んでみるといいでしょう。
:::

```js
function deleteMessages(amount) {
    return new Promise(resolve => {
        if (amount > 10) throw new Error('You can\'t delete more than 10 Messages at a time.');
        setTimeout(() => resolve('Deleted 10 messages.'), 2000);
    });
}

deleteMessages(5).then(value => {
    // `deleteMessages` is complete and has not encountered any errors
    // the resolved value will be the string "Deleted 10 messages"
}).catch(error => {
    // `deleteMessages` encountered an error
    // the error will be an Error Object
});
```

In this scenario, the `deleteMessages` function returns a Promise. The `.then()` method will trigger if the Promise was resolved, and the `.catch()` method if the Promise was rejected. But with our function, we resolve the Promise after 2 seconds with the String "Deleted 10 messages.", so the `.catch()` method will never be executed. You can also pass the `.catch()` function as the second parameter of `.then()`.

## How to implement async/await

### Theory

The following information is important to know before working with async/await. You can only use the `await` keyword inside a function that is declared as `async` (you put the `async` keyword before the `function` keyword or before the parameters when using a callback function).

A simple example would be:

```js
async function declaredAsAsync() {
    // code
}
```

or

```js 
const declaredAsAsync = async () => {
    // code
};
```

You can use that as well if you use the arrow function as an event listener.

```js
client.on('event', async (first, last) => {
    // code
});
```

An important thing to know is that a function declared as `async` will always return a Promise. In addition to this, if you return something, the Promise will resolve with that value, and if you throw an error, it will reject the Promise with that error.

### Execution with discord.js code

After knowing how Promises work and what they are for, as well as about the theory, let's look at an example in which we'll handle multiple Promises. Let's say you want to react with letters (regional indicators) in a certain order. For this example, you will take the basic template for a discord.js bot with some ES6 adjustments.

```js
const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '?';

client.once('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === `${prefix}react`) {
        // code inside here
    }
});

client.login('tokeninhere');
```

So now we need to put the code in. If you don't know how Node.js asynchronous execution works, you would probably try something like this:

```js
client.on('message', message => {
    if (message.content === `${prefix}react`) {
        message.react('🇦');
        message.react('🇧');
        message.react('🇨');
    }
});
```

But since all of these react methods are started at the same time, it would just be a race to which server request finished first, so there would be no guarantee that it would react in the order you wanted it to. In order to make sure it reacts in order (a, b, c), we need to use the `.then()` callback from the Promises that these methods return. As a result the code we want would mostly look like this:

```js
client.on('message', message => {
    if (message.content === `${prefix}react`) {
        message.react('🇦')
            .then(() => message.react('🇧'))
            .then(() => message.react('🇨'))
            .catch(error => {
                // handle failure of any Promise rejection inside here
            });
    }
});
```

In this piece of code, we [chain resolve](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Chaining) Promises with each other, and if one of the Promises gets rejected, the function we passed to `.catch()` get called. So let's look at how the same code would look with async/await.

```js
client.on('message', async message => {
    if (message.content === `${prefix}react`) {
        await message.react('🇦');
        await message.react('🇧');
        await message.react('🇨');
    }
});
```

That would mostly be the same code with async/await, but how do we catch Promise rejections now since we won't use `.catch()` anymore? That is also a useful feature with async/await; the error will be thrown if you await it so you can just wrap the awaited Promises inside a try/catch and you're good to go.

```js
client.on('message', async message => {
    if (message.content === `${prefix}react`) {
        try {
            await message.react('🇦');
            await message.react('🇧');
            await message.react('🇨');
        } catch (error) {
            // handle failure of any Promise rejection inside here
        }
    }
});
```

This looks clean and is also nice and easy to read.

So you may be asking, "How would I get the value the Promise resolved with?".

Well let's look at an example where you want to delete a sent message.

<branch version="11.x">

```js
client.on('message', message => {
    if (message.content === `${prefix}delete`) {
        message.channel.send('this message will be deleted')
            .then(sentMessage => sentMessage.delete(10000))
            .catch(error => {
                // handle error
            });
    }
});
```

</branch>
<branch version="12.x">

```js
client.on('message', message => {
    if (message.content === `${prefix}delete`) {
        message.channel.send('this message will be deleted')
            .then(sentMessage => sentMessage.delete({ timeout: 10000 }))
            .catch(error => {
                // handle error
            });
    }
});
```

</branch> The return value of a `.send()` is a Promise what resolves with the sent Message object, but how would the same code with async/await look like?

<branch version="11.x">

```js
client.on('message', async message => {
    if (message.content === `${prefix}delete`) {
        try {
            const sentMessage = await message.channel.send('This message will be deleted in 10 seconds.');
            await sentMessage.delete(10000);
        } catch (error) {
            // handle error
        }
    }
});
```

</branch>
<branch version="12.x">

```js
client.on('message', async message => {
    if (message.content === `${prefix}delete`) {
        try {
            const sentMessage = await message.channel.send('This message will be deleted in 10 seconds.');
            await sentMessage.delete({ timeout: 10000 });
        } catch (error) {
            // handle error
        }
    }
});
```

</branch>

With async/await you can just assign the awaited function to a variable that will represent the returned value. Now you know how you use async/await.
