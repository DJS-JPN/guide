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

discord.js は [`Intents`](https://discord.js.org/#/docs/main/stable/class/Intents)というユーティリティーを提供しており、ビットフィールドを容易に構築することができます。

また、staticフィールドとして、インテントをすべて含んだもの（`Intents.ALL` ）、特権を必要とするインテントをすべて含んだもの（`Intents.PRIVILEGED` ）、特権を必要としないインテントをすべて含んだもの（`Intents.NON_PRIVILEGED` ）が定義されています。 これをそのまま用いたり、Intentsコントラスタに渡して変更して用いたりすることができます。

```js
const { Client, Intents } = require('discord.js');
const client = new Client({ ws: { intents: Intents.ALL } });
```

<!--
The other static bits can be accessed likewise via <code>Intents.PRIVILEGED</code> and <code>Intents.NON_PRIVILEGED</code>.
-->

You can use the `.add()` and `.remove()` methods to add or remove flags to modify the bit field. Since discord.js uses a spread operator for the provided arguments you can provide single flags as well as an array or bit field. To use a set of intents as template you can pass them to the constructor. A few approaches are demonstrated below:

```js
const { Client, Intents } = require('discord.js');
const myIntents = new Intents();
myIntents.add('GUILD_PRESENCES', 'GUILD_MEMBERS');

const client = new Client({ ws: { intents: myIntents } });

// more examples of manipulating the bit field

const otherIntents = new Intents(Intents.NON_PRIVILEGED);
otherIntents.remove(['GUILDS', 'GUILD_MESSAGES']);

const otherIntents2 = new Intents(32509);
otherIntents2.remove(1, 512);
```

If you want to view the built flags you can utilize the `.toArray()`, `.serialize()` and `.missing()`  methods. The first returns an array of flags represented in this bit field, the second an object mapping all possible flag values to a boolean, based on it they are represented in this bit field. The third can be used to view the flags not represented in this bit field (you use it by passing a bit field of specific intents to check against).

## Privileged Intents

Discord defines some intents as "privileged" due to the sensitive nature of the data sent through the affected events. At the time of writing this article privileged intents are `GUILD_PRESENCES` and `GUILD_MEMBERS`

For now you can simply enable these intents in the [Discord Developer Portal](https://discordapp.com/developers/applications) through a toggle. Please note that this is currently in a deprecation period and you will require a whitelisted bot in order to use privileged intents as of October 7, 2020. You can find more information on whitelisting in [this discord support article](https://support.discordapp.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Whitelisting)

Should you receive the error `[DISALLOWED_INTENTS]: Privileged intent provided is not enabled or whitelisted` please review your settings for all privileged intents you use. The official documentation for privileged intents can be found on the [discord API documentation](https://discordapp.com/developers/docs/topics/gateway#privileged-intents).

## More on bit fields

Discord permissions are stored in a 53-bit integer and calculated using bitwise operations. If you want to dive deeper into what's happening behind the curtains, check the [Wikipedia](https://en.wikipedia.org/wiki/Bit_field) and [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) articles on the topic.

In discord.js, permission bit fields are represented as either the decimal value of said bit field or its referenced flags. Every position in a permissions bit field represents one of these flags and its state (either referenced `1` or not referenced `0`).

</branch>
