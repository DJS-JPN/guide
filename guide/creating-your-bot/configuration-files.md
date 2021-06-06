---
title: 設定ファイル
---

<!--
# Configuration files
-->

# 設定ファイル

<!--
::: tip
This page is a follow-up and bases its code on [the previous page](/creating-your-bot/).
:::
-->

::: tip
このページは[前のページ](/creating-your-bot/)のコードをもとにして、説明しています。
:::

<!--
As you get deeper into development, you may need to interact with sensitive data or data that gets used in multiple locations, such as:
-->

開発を進めるに連れて、以下の設定や機密データを複数の場所で使用する必要が出てくるかもしれません。

<!--
* Database passwords
* API keys
* Command prefix(es)
* A list of bot owner IDs
-->

* データベースのパスワード
* APIキー
* コマンドプレフィックス
* BotのオーナーIDのリスト

Having that kind of data hard-coded in each of your files can be bothersome and less than ideal. This is where configuration files come in–they're great for storing static data you can easily update in a single place.

<!--
## Implementing your config file
-->

## 設定ファイルの実装

<!--
Go to your code editor and make a new file. Add in the code below and save it as `config.json`, in the same directory as your main bot file.
-->

コードエディタを開いて新しいファイルを作ってください。そして、以下のコードを追加して `config.json` としてメインのbotファイルと同じディレクトリに保存してください。

<!--
```json
{
	"prefix": "!",
	"token": "your-token-goes-here"
}
```
-->

```json
{
	"prefix": "!",
	"token": "トークンをここに貼り付ける"
}
```

<!--
Go back to your main bot file, locate the `const client = new Discord.Client()` line, and add this above it:
-->

メインbotファイルを開いて `const client = new Discord.Client()` の行を見つけたらその上に以下のコードを追加してください。


```js
const config = require('./config.json');
```

<!--
Next, copy your token from the `client.login('your-token-goes-here')` line and paste into the `config.json` file. Make sure to keep it between the double quotes.
-->

次に、 `client.login('トークンはここにある')` からトークンをコピーして、 `config.json` に追加してください。必ずダブルクォーテーションで囲んでください。

<!--
Now you can simply do `client.login(config.token)` to login! If you want to use a different prefix than `!`, you can change that as well.
-->

これでログインするために `client.login(config.token)` を使えます！もしあなたが `!` ではないプレフィックスを使いたいなら、それも変更することができます。

<!--
## Storing additional data
-->

## 追加データを保存

As previously mentioned, you'll probably want to store more than just your token and prefix at one point or another. If you're going to store more data, add another key/value pair to the list!

<!--
```json
{
	"prefix": "!",
	"token": "your-token-goes-here",
	"meaning_of_life": 42,
	"passwords_array": ["please", "dont", "hack", "me"],
	"secret_passcodes": {
		"bank": 1234,
		"home": 4321
	}
}
```
-->

```json
{
	"prefix": "!",
	"token": "トークンはここ",
	"meaning_of_life": 42,
	"passwords_array": ["please", "dont", "hack", "me"],
	"secret_passcodes": {
		"bank": 1234,
		"home": 4321
	}
}
```

<!--
## Resulting code
-->

## 結果のコード

<resulting-code />
