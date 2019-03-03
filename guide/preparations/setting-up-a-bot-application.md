# Botの設定をしよう!


<!-- # Setting up a bot application -->


## あなたのBotを作ろう！


<!-- ## Creating your bot -->


Node, Discord.js うまく行ったならlinterもインストールしたので
コードを書き始める準備は終わりました.
でもその前にDiscordのwebsiteでBotの設定をしよう!


<!--
Now that you've installed Node, discord.js, and hopefully a linter, you're almost ready to start coding! The next step you need to take is setting up an actual Discord bot application via Discord's website.

-->

すごい簡単にできるから下の手順に沿ってね


<!--
It's incredibly easy to create one. The steps you need to take are as follows:

-->

<!--
1. Open up [the Discord website](https://discordapp.com/) and [login](https://discordapp.com/login).
2. Hover over the "Developers" drop-down menu and click on the [Developer Portal](https://discordapp.com/developers/docs/intro) link.
3. On the header click on the [Applications](https://discordapp.com/developers/applications) link.
4. Click on the "Create an application" button.
-->


1. [Discord公式サイト](https://discordapp.com/) を開いて [ログイン](https://discordapp.com/login)して.
2. Hover over the "Developers" drop-down menu and click on the [Developer Portal](https://discordapp.com/developers/docs/intro) link.
3. ヘッダーの[Applications](https://discordapp.com/developers/applications) をクリック!.
4. "Create an application"をクリック.



<!--
You should see a page like this:
-->


こんな感じになりましたか?




![Successfully created application](~@/images/create-app.png)


<!--
You can optionally enter a name, description, and avatar for your application here. Once you've saved your changes, you can move on by selecting the "Bot" tab in the left pane.

-->


ここはBotにはそんな影響はないけど自分が見やすくなるように
名前,説明,アプリのアバターアイコンを決めておくといいかも

![Create a bot UI](~@/images/create-bot.png)


<!--
Click the "Add Bot" button on the right and confirm the pop-up window by clicking "Yes, do it!". Congratulations, you're now the proud owner of a shiny new Discord bot! You're not quite done, though.
-->


右の"Add Bot"をクリックして,"Yes, do it!"をクリックしてポップアップウインドウを確認してくれ. よくやった, これで君も新品のBotのオーナーになった.
でもまだ終わらない.


<!--
## Your token
-->


## あなたのトークンについて


<!--
::: danger
This section is very important, so pay close attention. It explains what your bot token is, as well as the security aspects of it.
:::
-->


::: danger
ここからすごい重要,ちゃんと読んでね
:::


<!--
After creating a bot user, you'll see a section like this:
-->


Botユーザーを作り終わったら下の画像みたいになるよね

![Bot application](~@/images/created-bot.png)


<!--
In this panel, you can give your bot a snazzy avatar, set its username, and make it public or private. You can access your token in this panel as well, either by revealing it or simply pressing the "Copy" button. When we ask you to paste your token somewhere, this is the value that you need to put in. Don't worry if you do happen to lose it at some point; you can always come back to this page and copy it again.
-->


ここではBotに名前をつけたりアイコンを変えたり公開/非公開を切り替えたりいろんなことができる,そしてトークンを見たりコピーしたりしてコードを書くときに使ったりできる.
もちろんトークンを忘れてもここに来ればまたコピーできる.


<!--
### What is a token, anyway?

-->


### ところでトークンって何？


<!--
A token is essentially your bot's password; it's what your bot uses to login to Discord. With that being said, **it is vital that you do not ever share this token with anybody, purposely or accidentally**. If someone does manage to get a hold of your token, they can use your bot as if it were theirs—this means they can perform malicious acts with it.
-->


トークンってのはbotのパスワードみたいなもの; botがDiscordにログインするときに使うね. だからみんなこう言う, **故意だろうが偶然だろうが,それめっちゃ重要だから他人と共有しないで**. もし誰かにそれがバレたらどうなるかだって？たぶん彼らは君のbotをあたかも自分のもののように使い悪用するだろうね.
たまに知らせてくれる人もいるけど...


<!--
### Token leak scenario
-->


### もしトークンがバレたらどうなるか


<!--
Let's imagine that you have a bot on over 1,000 servers, and it took you many, many months of coding and patience to get it on that amount. Your token gets leaked somewhere, and now someone else has it. That person can:

* Spam every server your bot is on;
* Attempt to DM spam as many users as they can;
* Attempt to delete as many channels as they can;
* Attempt to kick or ban as many server members as they possibly can;
* Make your bot leave all of the servers it has joined.
-->


さあ想像してみよう
君は1000台以上のサーバー君のbotが使われている,そして何ヶ月もコーディングして忍耐で乗り切った.
でも誰かにトークンがバレた,そしてそいつはこんなことをするだろう

* 君のbotを使ってすべてのサーバーでスパム;
* できるだけ多くのユーザーのDMでスパム;
* できるだけ多くのチャンネルを消す;
* できるだけ多くのサーバーのメンバーをBANまたはKickするだろうね;
* そして君のbotはすべてのサーバーから離れていく;


<!--
All that and much, much more. Sounds pretty terrible, right? So make sure to keep your token as safe as possible!
-->


これだけじゃないけど,やられたら...
だから大切に保管しておこうね


<!--
::: danger
If you ever somehow leak your token (commit it to a repository, post it in a support channel, etc.) or otherwise see your bot in danger, return to this page and regenerate a new one. Your old token will become invalid and you'll need to update it with the new one in all the places you've used it.
:::
-->


::: danger
もしトークンがバレたら (リポジトリにコミットしちゃったり, サポートちゃんねるに投稿しちゃったり,など.) さっきトークンをコピーしたページでトークンを再生成しよう,そうすると前のトークンは無効になる.
:::
