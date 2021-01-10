---
forceTheme: blue
---

# Command 入門

最初のボットをDiscord.jsで動作させるには、Node.jsのパッケージマネージャであるnpmを使用してDiscord.jsをインストールする必要があります。 これは Commando についても同様で、別途インストールする必要があります。 以下のいずれかの方法で、Commandoをインストールすることができます：

Discord.js v11を使用する場合: `npm install discord.js-commando`  
Discord.js v12を使用する場合: `npm install discordjs/Commando`

::: warning
You need at least Node.js version <branch version="11.x" inline>8.0.0</branch><branch version="12.x" inline>12.0</branch> to use Commando. Master branch will also require you to install [Git](https://git-scm.com/downloads).
:::

## index.js ファイルの作成

必ずしも名前が `index.js` である必要はありませんが、このファイルはあなたのボットのメインファイルであり、新しいコマンドの登録からクライアントへのログインまでをすべて処理します。

最初にしなければならないのは、Commando を require（訳注：必要なモジュールとしてロードする）ことです。 実は、Commandoを使用する場合は、Discord.js を require する必要は**ありません**。 Commando は discord.jsに関するすべての関数を内部で処理し、Commando のクライアントは discord.js のクライアントを拡張しているので、コアの discord.js に触れる必要はほとんどありません!

`path` も必要になります。 でも心配しないでください、`path`をインストールする必要はありません。Node にバンドルされています。

```js
const { CommandoClient } = require('discord.js-command');
const path = require('path');
```

次のステップは、新しいCommandoClientを作成することです。 設定する必要のあるオプションもいくつかあります。

```js
const client = new CommandoClient({
    commandPrefix: '?',
    owner: '278305350804045834',
    invite: 'https://discord.gg/bRCvFy9',
});
```

`commandPrefix` パラメータには、ボットに使用するプレフィックスを追記してください。 現時点であなたが設定できるプレフィックスは1つだけなので、よく考えて設定してください。 However, note that mentioning your bot will **always** be allowed alongside the prefix you set here. In other words, this prefix and mentions are how your users will call your bot. **No, there is no way to disable mentions being a prefix!**

After that is the `owner` parameter, which should contain the ID for the owner of the bot. It can be either a string of one ID, or an array of many.

::: danger
The users you set here have complete control over the bot. They can use eval and other owner-only commands, ignore command throttling, and bypass all user permissions! Be sure to only give this to people you trust!
:::

The final option, `invite`, is the **full** invite URL to your bot's support server. While not a required option, it's a good idea to have a support server on hand to handle questions and concerns your users may have about your bot if it is public. If not, it's safe to leave this option out.

Next you're going to register the command groups, args types, and default commands. Then, you register the commands in a folder. You can name the folder whatever you want, but it's recommended to stick with `commands`, as it makes the most sense.

```js
client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['first', 'Your First Command Group'],
        ['second', 'Your Second Command Group'],
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));
```

Doing this you've also created your first command group! Make another folder called `first` in your `commands` folder so that you can put the commands for that group in there. The group will be displayed in the help command as `Your First Command Group`. You can use any name you want for either of these options, but do note that the key (`first`) **must be lowercase**!

Adding more command groups is as simple as adding another option to the array and making another folder.

```js
.registerGroups([
    ['first', 'Your First Command Group'],
    ['second', 'Your Second Command Group'],
    ['third', 'Your Third Command Group'],
])
```

Should you want to disable a default command, such as if you wanted to make your own help command and replace the default one, you can pass that as an option in `registerDefaultCommands`.

```js
.registerDefaultCommands({
    help: false,
})
```

Next, you're going to need to create a ready event and an error event, as usual.

```js
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
    client.user.setActivity('with Commando');
});

client.on('error', console.error);
```

This will send a message to your console when the bot is ready, and set the bot's playing status to "with Commando". You can set both to whatever you wish.

Last but certainly not least, log the bot in.

```js
client.login('your-token-goes-here');
```

::: danger
You should use environment variables or a `config.json` for your token instead of passing it directly!
:::

And there you have it! You've set up your `index.js` file! In the end your file structure should look like this, along with whatever `.gitignore` or `config.json` you may have:

```
/commands
    /first
index.js
package.json
```

## Resulting code

<resulting-code />
