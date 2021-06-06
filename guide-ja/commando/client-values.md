---
pageTheme: blue
---

# コマンドでのクライアント値の使用

この作業は簡単です。 クライアントオブジェクトの値が必要な場合は、通常、次のようにします。

<branch version="11.x">

```js
client.guilds.size;
```

</branch>
<branch version="12.x">

```js
client.guilds.cache.size;
```

</branch>

ただし、Commandoでは、`this`を使用してこれらの値を取得する必要があります。

<branch version="11.x">

```js
this.client.guilds.size;
```

</branch>
<branch version="12.x">

```js
this.client.guilds.cache.size;
```

</branch>

It's that simple!
