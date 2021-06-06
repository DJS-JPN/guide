---
pageTheme: blue
---

# コマンドにおいての引数の利用について

Sometimes when using commands, you may want to get data from the user and change the response accordingly. ここでは、メッセージから文字列を取得して、ユーザーに返すコマンドを作成します。

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
        // ...
    }
};
```

`args`フィールドは、オブジェクトの配列であり、各オブジェクトにはその引数のデータが含まれています。

```js {5-11}
module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            // ...
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string',
                },
            ],
        });
    }
};
```

参照： シンプル

- `key` は引数の名前です。 `run` メゾットで定義すると、これが使用されます。
- `prompt` is the text that displays if the user doesn't provide arguments. If someone uses `?say` by itself, that prompt will ask for the text.
- `type` is the type of the argument. It can be many things, including `string`, `integer`, `user`, `member`, etc.

さらに引数を追加するのは、次のように別のオブジェクトを配列に追加するのと同じくらい簡単です。

```js {11-15}
module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            // ...
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
            ],
        });
    }
};
```

引数をデフォルトの特定の値に設定することもできます。

```js {11}
module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            // ...
            args: [
                // ...
                {
                    key: 'otherThing',
                    prompt: 'What is this other useless thing?',
                    type: 'string',
                    'default': 'dog',
                },
            ],
        });
    }
};
```

ご覧のとおり、これらは非常に強力なものです。

Head on over to your `run` method and set the `text` arg to a variable and return the text to the user.

```js {6-8}
module.exports = class SayCommand extends Command {
    constructor(client) {
        // ...
    }

    run(message, { text }) {
        return message.reply(text);
    }
};
```

And there you have it, a say command using args!

## 結果出来上がったコード

<resulting-code />
