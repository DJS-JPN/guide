---
forceTheme: blue
---

# コマンドにおいての引数の利用について

コマンドを使用する際に、ユーザーからデータを取得し、それに応じて応答を変更したい時があると思います。 ここでは、メッセージから文字列を取得して、ユーザーに返すコマンドを作成します。

## 文字列引数

`string`引数は、コマンド名とプレフィックスの後の単なるテキストです。 例: `?say Hi there!` この場合、引数は`Hi there`の部分になります。 作成は非常に簡単です。

まず最初に、`first`フォルダに移動し、新しく`say.js`というファイルを作成します。 それができたら、meowコマンドのコマンドクラスと同様に、コマンドクラスとすべてをセットアップします。

```js
const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            aliases: ['parrot', 'copy'],
            group: 'first',
            memberName: 'say',
            description: 'Replies with the text you provide.',
        });
    }

    run(message) {
        // 今は空白で可
    }
};
```

`args`フィールドは、オブジェクトの配列であり、各オブジェクトにはその引数のデータが含まれています。

```js
super(client, {
    name: 'say',
    aliases: ['parrot', 'copy'],
    group: 'first',
    memberName: 'say',
    description: 'Replies with the text you provide.',
    args: [
        {
            key: 'text',
            prompt: 'What text would you like the bot to say?',
            type: 'string',
        },
    ],
});
```

See? Simple.

- `key` は引数の名前です。 `run` メゾットで定義すると、これが使用されます。
- ` prompt `は、引数が指定されていない場合に表示されるテキストです。 誰かが`?say` だけを利用すると、テキストを求めるプロンプトが表示されます。
- `type` は引数が含まれるタイプです。 これには、 `string`, `integer`, `user`, `member` などといった、様々なものがあります。

Adding more args is as simple as adding another object to the array, like so:

```js
args: [
    {
        key: 'text',
        prompt: 'What text would you like the bot to say?',
        type: 'string',
    },
    {
        key: 'otherThing',
        prompt: 'What is this other useless thing?',
        type: 'string',
    },
]
```

You can also set arguments to default to a specific value:

```js
{
    key: 'otherThing',
    prompt: 'What is this other useless thing?',
    type: 'string',
    default: 'dog',
},
```

As you can see, they're very powerful things.

Head on over to your `run` method and set the `text` arg to a variable.

```js
run(message, { text }) {
    // empty for now
}
```

Next, make the `run` method return the text back to the user.

```js
run(message, { text }) {
    return message.reply(text);
}
```

And there you have it, a say command using args!

## Resulting code

<resulting-code />
