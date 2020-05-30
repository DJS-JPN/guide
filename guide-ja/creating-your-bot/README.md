---
title: Botを立ち上げて実行する
---

<!--
# Getting your bot up & running
-->

# Botを立ち上げて実行する


<!--
We're finally getting to the exciting parts! Since your bot is in your server now, the next step is to start coding and get it online!
-->

やっと面白い部分にたどり着きました！今Botはサーバーにいるので、次はコードを書くのを始めてBotをオンラインにしてあげましょう！


<!--
## Creating the bot file
-->

## Botファイルの作成


<!--
Open up your preferred code editor (whether it be [Visual Studio Code](https://code.visualstudio.com/), [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/), or any other editor of your choice) and create a new file. If you're brand new and aren't sure what to use, go with Visual Studio Code.
-->

お好みのコードエディタを開いてください。([Visual Studio Code](https://code.visualstudio.com/)、[Atom](https://atom.io/)、[Sublime Text](https://www.sublimetext.com/)、またはあなたが選ぶ他のエディタ)そして新しいファイルを作ってください。もし何を使えばいいかわからなくなってしまったらVisual Studio Codeを使うとよいでしょう。


<!--
It's suggested that you save the file as `index.js`, but you may name it whatever you wish, as long as it ends with `.js`.
-->

名前の最後が`.js`で終わっていればなんでも構いませんが、`index.js`としてファイルを保存することをおすすめします。


<!--
::: tip
You can quickly create a new file by using the `Ctrl + N` shortcut on your keyboard, and then using `Ctrl + S` to save the file.
:::
-->

::: tip
キーボードの`Ctrl + N`を押すことで素早く新規ファイルを作成、`Ctrl + S`を押すことでファイルを保存できます。
:::


<!--
## Logging in to Discord
-->

## Discordにログイン


<!--
Once you've created a new file, do a quick check to see if you have everything setup properly. Copy & paste the following code into your file and save it. Don't worry if you don't understand it right away—it'll be explained a bit more in depth after this.
-->

新しいファイルを作成したらすべて正しく設定されているか軽く目を通してください。そして、次のコードをコピーしてファイルに貼り付けて保存してください。今すぐに理解できなくても構いません。このことについては後でもう少し詳しく説明します。


<!--
```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login('your-token-goes-here');
```
-->

```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('準備完了！');
});

client.login('トークンをここに貼り付ける');
```


<!--
Head back to your console window, type in `node your-file-name.js`, and press enter. If you see the `Ready!` message after a few seconds, you're good to go! If not, try going back a few steps and make sure you followed everything correctly.
-->

コンソールウィンドウに戻り、`node ファイル名.js`と入力してエンターを押してください。もし実行して数秒後に`準備完了!`とメッセージが表示されたら次に進みましょう!そうでない場合は少し戻って正しくすべてを行ったか確認してください。


<!--
::: tip
Don't feel like typing the file name each time? Open up your `package.json` file, look for something like `"main": "index.js"`, and change `"index.js"` to whatever your file name is. After saving, you can simply run the `node .` shortcut in your console to start the process!
:::
-->

::: tip
毎回のようにファイル名を入力したくないですよね?`package.json`ファイルを開き、`"main": "index.js"`のような記述を探し、`"index.js"`をあなたのファイル名に変更してください。保存したあとはコンソールで`node .`を実行することで簡略化できます。
:::


<!--
### Start-up code explained
-->

### 起動させるコードの説明


<!--
Here's the same code with comments, so it's easier to understand what's going on.
-->

これはコメントが付いた同じコードなので、何が起きているかわかりやすいでしょう。


<!--
```js
// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
});

// login to Discord with your app's token
client.login('your-token-goes-here');
```
-->

```js
// Discord.jsモジュールを読み込む
const Discord = require('discord.js');

// 新しいDiscordクライアントを作成
const client = new Discord.Client();

// クライアントの準備ができた際に実行されます
// このイベントはログインした後に１度だけ実行します
client.once('ready', () => {
    console.log('準備完了！');
});

// トークンを使ってDiscordにログイン
client.login('トークンをここに貼り付ける');
```


<!--
Although it's not a lot, it's good to know what each bit of your code does. But, as it currently is, this won't really do anything. You probably want to add some commands that run whenever someone sends a specific message, right? Let's get started on that, then!
-->

あまり多くないですが、コードのそれぞれが何をするかを知っておくのはいいことです。ただ今はまだ何もしません。特定のメッセージが送信されるたびに実行されるコマンドを実装していきましょう。


<!--
## Listening for messages
-->

## メッセージを待ち受ける


<!--
First, make sure to close the process in your console. You can do so by pressing `Ctrl + C` inside the console. Go back to your code editor and add the following piece of code above the `client.login()` line.
-->

最初に必ず処理を止めましょう。コンソールの中で`Ctrl + C`を押すと止めることができます。そうしたらコードエディタに戻って`client.login()`の行の上に下のコードを追加してください。

```js
client.on('message', message => {
    console.log(message.content);
});
```


<!--
Notice how the code uses `.on` rather than `.once` like in the ready event. This means that it can trigger multiple times. Save the file, go back to your console, and start the process up again. Whenever a message is sent inside a channel your bot has access to, the message's content will be logged to your console. Go ahead and test it out!
-->

readyイベントのように`.once`ではなく`.on`がどのように使われてるか注目しましょう。それはこれが複数回実行できることを意味します。ファイルを保存してコンソールに戻り、もう1度実行してみてください。Botがアクセスできるチャンネルのメッセージの内容がコンソールに出力されます。試してみましょう。


<!--
::: tip
Inside your console, you can press the up arrow on your keyboard to bring up the latest commands you've run. Pressing `Up` and then `Enter` after closing the process is a nice, quick way to start it up again (as opposed to typing out the name each time).
:::
-->

::: tip
コンソール内でキーボードの上矢印キーを押すと最後に実行したコマンドが現れます。処理を止めた後に`Up`を押してから`Enter`を押すのは、もう1度実行するのに素早い方法です。(つまり毎回コマンドを打たずに済みます)
:::


<!--
## Replying to messages
-->

## メッセージを送信


<!--
Logging to the console is great and all, but it doesn't really provide any feedback for the end user. Let's create a basic ping/pong command before you move on to making real commands. Remove the `console.log(message.content)` line from your code and replace it with the following:
-->

コンソールでログを記録するのはよさそうですが、ユーザーへ反応を示すことはありません。実際のコマンドを作成する前に、基本的なping/pongコマンドを作成してみましょう。コードから`console.log(message.content)`を削除して下のコードに置き換えてください。


<!--
```js
if (message.content === '!ping') {
    // send back "Pong." to the channel the message was sent in
    message.channel.send('Pong.');
}
```
-->

```js
if (message.content === '!ping') {
    // メッセージが送信されたチャンネルへ「Pong.」を送り返す。
    message.channel.send('Pong.');
}
```


<!--
Restart your bot and then send `!ping` to a channel your bot has access to. If all goes well, you should see something like this:
-->

Botを再起動したら、Botがアクセスできるチャンネルに`!ping`を打ってください。すべてうまく行けば以下のようになるはずです。

<div is="discord-messages">
    <discord-message author="User" avatar="djs">
        !ping
    </discord-message>
    <discord-message author="Tutorial Bot" avatar="blue" :bot="true">
        Pong.
    </discord-message>
</div>

<!--
You've successfully created your first Discord bot command! Exciting stuff, isn't it? This is only the beginning, so let's move on to making some more commands.
-->

最初のDiscordBotのコマンドが作成できました。すごいことじゃないですか？これは始まりに過ぎません。なのでさらにいくつかのコマンドの作成に移りましょう。


<!--
## Resulting code
-->

## 結果のコード

<resulting-code path="creating-your-bot/up-and-running" />
