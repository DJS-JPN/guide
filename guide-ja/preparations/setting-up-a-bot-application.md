---
title: Botのセットアップ
---

<!--
# Setting up a bot application
-->

# Botのセットアップ


<!--
## Creating your bot
-->

## Botを作成する


<!--
Now that you've installed Node, discord.js, and hopefully a linter, you're almost ready to start coding! The next step you need to take is setting up an actual Discord bot application via Discord's website.
-->

ここまででNode、Discord.js、そしてlinterもインストールしたと思うのでコードを書き始める準備はほぼ終わりました。次のステップは、DiscordのWebサイトから実際のDiscordボットアプリケーションをセットアップすることです。


<!--
It's incredibly easy to create one. The steps you need to take are as follows:
-->

とても簡単にできるので下の手順に沿ってください。


<!--
1. Open up [the Discord website](https://discordapp.com/) and [login](https://discordapp.com/login).
2. Hover over the "Developers" drop-down menu and click on the [Developer Portal](https://discordapp.com/developers/applications/) link.
3. Click on the "New Application" button.
4. Enter a name and optionally select a team (if you want the bot to belong to one). Then confirm the pop-up window by clicking the "Create" button.
-->

1. [Discord公式サイト](https://discordapp.com/)を開いて[ログイン](https://discordapp.com/login)。
2. ページ上部の"デベロッパー向け"にカーソルを合わせ[開発者ポータル](https://discordapp.com/developers/applications/)をクリック。
3. [New Application](https://discordapp.com/developers/applications)ボタンをクリック。
4. ボット名を入力し、ボットを所属させたい場合はチームを選択。そして"Create"ボタンをクリック。


<!--
You should see a page like this:
-->

このようなページが表示されたと思います。

![アプリケーションの作成に成功](~@/images/create-app.png)


<!--
You can optionally enter a name, description, and avatar for your application here. Once you've saved your changes, you can move on by selecting the "Bot" tab in the left pane.
-->

ここはBotにはそこまで影響はありませんが、自分が見やすくなるように名前、説明、アプリのアバターアイコンを決めておくといいかもしれません。

![ボットのUIを作成する](~@/images/create-bot.png)


<!--
Click the "Add Bot" button on the right and confirm the pop-up window by clicking "Yes, do it!". Congratulations, you're now the proud owner of a shiny new Discord bot! You're not quite done, though.
-->

右の"Add Bot"、"Yes, do it!"の順にクリックしてポップアップウインドウを確認してください。おめでとうございます。これであなたも新品のBotのオーナーになりました。でもまだ終わっていません。


<!--
## Your token
-->

## トークンについて


<!--
::: danger
This section is very important, so pay close attention. It explains what your bot token is, as well as the security aspects of it.
:::
-->

::: danger これからBotトークンとはなにか、セキュリティ面についてお話します。とても重要です、しっかり読んでください。
:::


<!--
After creating a bot user, you'll see a section like this:
-->

Botユーザーを作り終わったら下の画像のようになります。

![ボットアプリケーション](~@/images/created-bot.png)


<!--
In this panel, you can give your bot a snazzy avatar, set its username, and make it public or private. You can access your token in this panel as well, either by revealing it or simply pressing the "Copy" button. When we ask you to paste your token somewhere, this is the value that you need to put in. Don't worry if you do happen to lose it at some point; you can always come back to this page and copy it again.
-->

このパネルではBotに名前をつけたりアイコンを変えたり公開/非公開を切り替えたりできます。そしてトークンを見たり、"Copy"ボタンを押すことによってコピーし、コードを書くときに使ったりできます。もちろんトークンを忘れてもここに来ればまたコピーできます。


<!--
### What is a token, anyway?
-->

### ところでトークンって何？


<!--
A token is essentially your bot's password; it's what your bot uses to login to Discord. With that being said, **it is vital that you do not ever share this token with anybody, purposely or accidentally**. If someone does manage to get a hold of your token, they can use your bot as if it were theirs—this means they can perform malicious acts with it.
-->

トークンはbotのパスワードのようなものです。botがDiscordにログインするときに使います。なので、**それはとても重要なものなので、故意でも偶然でも他人と共有しないでください。**もし誰かが入手に成功したら、君のbotを我が物のように使い、悪用するでしょう。


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

さあ想像してみましょう。多くの時間を掛けて開発し、今では1000以上のサーバーで使われているBotのトークンが誰かに流出してしまいました。そしてその人はこんなことをするでしょう。

* すべてのサーバーでスパム。
* できるだけ多くのユーザーのDMにスパム。
* できるだけ多くのチャンネルを消す。
* できるだけ多くのサーバーのメンバーをBANまたはKick。
* そして君のbotはすべてのサーバーから離れていく。


<!--
All that and much, much more. Sounds pretty terrible, right? So make sure to keep your token as safe as possible!
-->

これが全てではありません。聞いただけでも怖いですよね？なのでトークンを大切に保管しておきましょう！


<!--
::: danger
If you ever somehow leak your token (commit it to a repository, post it in a support channel, etc.) or otherwise see your bot in danger, return to this page and regenerate a new one. Your old token will become invalid and you'll need to update it with the new one in all the places you've used it.
:::
-->

::: danger もしトークンがバレたら（リポジトリにコミットしてしまったり、サポートチャンネルに投稿してしまったりなど）さっきトークンをコピーしたページでトークンを再生成しましょう、そうすると前のトークンは無効になります。そしてトークンを使用したすべての場所を更新してください
:::
