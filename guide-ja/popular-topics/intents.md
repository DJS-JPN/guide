# ゲートウェイインテント

:::warning
現在、インテントの送信はオプションですが2020年10月7日以降、必須となります。
:::

ゲートウェイインテントはdiscord.js バージョン12から導入され、これによって、どのイベントをボットが受け取るか選択できるようになります。 インテントとはdiscord.js クライアントが受け取るそれぞれのイベントをグループに分けたもののことです。 例えば、`DIRECT_MESSAGE_TYPING` インテントを省略するとdiscord.js クライアントはダイレクトメッセージでのタイピングイベントを受け取ることができなくなります。 また、ボットのキャッシュを不要なデータによる圧迫から守ることができます。しかしまだ、イベントを受け取らないことによるライブラリ内部での副作用についてリストにすることができていません。

<branch version="11.x">

バージョン11ではインテントを利用することはできません。ボットでゲートウェイインテントを利用する場合はバージョン12を利用してください。

</branch>

<branch version="12.x">

## インテントの有効化

ボットクライアントのインスタンスを作成する際、クライアントオプションでボットの受け取るインテントを選択できます。

ライブラリのサポートするインテントの一覧は[the discord.js documentation](https://discord.js.org/#/docs/main/stable/class/Intents?scrollTo=s-FLAGS)にあります。 イベントがどのインテントに含まれるかは[discord API documentation](https://discordapp.com/developers/docs/topics/gateway#list-of-intents)に書いてあります。

:::tip
`GUILD_PRESENCES` はギルドメンバーのデータを始めに受け取るために必要です。 もし指定されない場合は`GUILD_MEMBERS`を指定してもメンバーのキャッシュは空となり、更新されません。 あるインテントを無効にする（イベントの受信をやめる）前にボットが正常に動作しなくなることのないよう、ボットがどのように動いているのか考えなければなりません。 discord.js バージョン12では完全にはインテントをサポートしていません。一見無関係なデータが失われることがあります。
:::

```js
const { Client } = require('discord.js');
const client = new Client({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES'] } });
```

## インテントのビットフィールドのラッパー

discord.js は[`Intents`](https://discord.js.org/#/docs/main/stable/class/Intents)というユーティリティーを提供しており、ビットフィールドを容易に操作することができます。

また、staticフィールドとして、インテントをすべて含んだもの（`Intents.ALL` ）、特権を必要とするインテントをすべて含んだもの（`Intents.PRIVILEGED` ）、特権を必要としないインテントをすべて含んだもの（`Intents.NON_PRIVILEGED` ）が定義されています。 これをそのまま用いたり、Intentsコントラスタに渡して変更して用いたりすることができます。

```js
const { Client, Intents } = require('discord.js');
const client = new Client({ ws: { intents: Intents.ALL } });
```

<!--
The other static bits can be accessed likewise via <code>Intents.PRIVILEGED</code> and <code>Intents.NON_PRIVILEGED</code>.
-->

`.add()` 、`.remove()` メソッドを用いてフラグを建てたり消したりし、ビットフィールドを変更することができます。 discord.jsは指定された引数にスプレッド演算子を使用するため、配列やビットフィールドだけでなくそのままのインテントの名前も引数に渡すことができます。 テンプレートとしてインテントのセットを使う場合はそれらをコントラスタに渡すこともできます。 いくつかのアプローチを以下に示します。

```js
const { Client, Intents } = require('discord.js');
const myIntents = new Intents();
myIntents.add('GUILD_PRESENCES', 'GUILD_MEMBERS');

const client = new Client({ ws: { intents: myIntents } });

// ビットフィールドを操作する追加の例

const otherIntents = new Intents(Intents.NON_PRIVILEGED);
otherIntents.remove(['GUILDS', 'GUILD_MESSAGES']);

const otherIntents2 = new Intents(32509);
otherIntents2.remove(1, 512);
```

構築されたフラグを表示したい場合は`.toArray()`、`.serialize()` 、`.missing()` メソッドを利用できます。 それぞれ、ビットフィールドで表されるフラグの配列、ビットフィールドをもとに、すべてのフラグ値をキーとしインテントが有効かどうかを真偽値として持つオブジェクト、 ビットフィールドが持っていないフラグを返します。（確認のために特定のインテントのビットフィールドを渡すことで動作します）

## 特権インテント

Discordは、イベントを通じて送信されるデータの機密性から、いくつかのインテントを「特権」と定義しています。 この記事を書いている時点では、特権インテントは `GUILD_PRESENCES` と `GUILD_MEMBERS` の2つです。

今のところ、これらのインテントは、[Discord Developer Portal](https://discordapp.com/developers/applications)で切り替えを行うだけで有効にできます。 これは現在非推奨期間であり、2020年10月7日以降に特権インテントを使用するにはホワイトリストに登録されたボットが必要です。 ホワイトリストについては[this discord support article](https://support.discordapp.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Whitelisting)をご覧ください。

エラー`[DISALLOWED_INTENTS]: Privileged intent provided is not enabled or whitelisted`（与えられた特権インテントは有効になっていないか、ホワイトリストに登録されていません）が表示された場合は、使用しているすべての特権インテントの設定を確認してください。 特権インテントについては[discord API documentation](https://discordapp.com/developers/docs/topics/gateway#privileged-intents)をご覧ください。

## ビットフィールドの詳細

Discordの権限は53ビット整数で保存され、ビット単位で計算されます。 その裏で何が起きているのかについて詳しく知りたい場合は、[Wikipedia](https://en.wikipedia.org/wiki/Bit_field)と[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)の記事をチェックしてください。

discord.jsでは、パーミッションビットフィールドは、ビットフィールドまたはフラグへの参照として表されます。 Every position in a permissions bit field represents one of these flags and its state (either referenced `1` or not referenced `0`).

</branch>
