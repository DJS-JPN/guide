# ボットをサーバーに追加する

If you've been following the guide's previous pages, you should have a bot application set up. しかし、まだサーバーにボットはいません。 これはどうすればいいのでしょうか？

Before you're able to see your bot in your own (or other) servers, you'll need to add it by creating and using a unique invite link using your bot application's client ID.

## ボットの招待リンク

この招待リンクは次のような形になります。

```
https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot+applications.commands
```

このURLの構造は非常にシンプルになっています。

* 最初の部分は、Discordサーバーへに対して追加するOAuth2アプリケーション（ボットアプリケーションなど）を承認するためのDiscordの標準形式です。
* 次の`client_id=...`から始まる部分は認可_したい_アプリケーションを指定します。 You'll need to replace this part with your client's ID to create a valid invite link.
* Lastly, the third part, which says `scope=bot+applications.commands`, specifies that you want to add this application as a Discord bot, with the ability to create Slash Commands.

::: tip
`permissions`パラメータでは、追加したサーバーでボットが持つ権限を指定できます。 [この](https://discordapi.com/permissions.html)サイトを使うことで簡単に招待リンクを作れます。
:::

::: warning
もし"Bot requires a code grant"といったエラーが出た場合、ボットのアプリケーション設定を開き、"Require OAuth2 Code Grant"オプションをオフにしてください。 あなたがこれの必要性をよく分かっていない場合はオンにする必要はありません。
:::

## Creating and using your invite link

As mentioned above, you'll need to replace the `client_id` parameter with your client's ID to generate your invite link. アプリのIDを確認するには、もう一度"Applications"セクション内の[My Apps](https://discord.com/developers/applications/me)ページに戻り、ボットアプリケーションを選択します。

Insert your app's ID into the link template, and then access it in your browser. そうすると次のようにボットのユーザー名とアバターが表示されるはずです。

![Bot Authorization page](./images/bot-auth-page.png)

追加したいサーバーを選択し、"Authorize"をクリックします。 Do note that you'll need the "Manage Server" permission on a server to add your bot there. 追加が完了すると次の確認メッセージが表示されます。

![認証したボット](./images/bot-authorized.png)

おめでとうございます ！ これでDiscordサーバーにボットが正常に追加されました。 サーバーのメンバーリストに次のように表示されます。

![Bot in server's member list](./images/bot-in-memberlist.png)
