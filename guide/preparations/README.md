---
title: Node.jsとdiscord.jsのインストール
---

<!--
# Installing Node.js and discord.js
-->

# Node.jsとdiscord.jsのインストール

<!--
## Installing Node.js
-->

## Node.jsのインストール

<!--
To use discord.js, you'll need to install Node.js. You can do so by going to [the Node.js website](https://nodejs.org/).
-->

discord.jsを使用するには、Node.jsをインストールする必要があります。[Node.jsのWebサイト](https://nodejs.org/)からインストールできます。

<!--
### Installing on Windows
-->

### Windowsでのインストール

<!--
If you're developing on Windows, it's as simple as installing any other program. Go to [the Node.js website](https://nodejs.org/), download the latest version, open up the downloaded file, and follow the steps from the installer.
-->

Windowsで開発しているのなら、それは他のソフトをインストールするのと同じぐらい簡単です。[Node.jsのWebサイト](https://nodejs.org/)を開き、最新版をダウンロードして、そのダウンロードしたファイルを開いて、インストーラの手順に従ってください。

<!--
### Installing on macOS
-->

### macOSでのインストール

<!--
If you're developing on macOS, you have a few options. You can go to [the Node.js website](https://nodejs.org/), download the latest version, double click the package installer, and follow the instructions. Or you can use a package manager like [Homebrew](https://brew.sh/) with the command `brew install node`.
-->

macOSで開発しているのなら、いくつかの選択肢があります。[Node.jsのWebサイト](https://nodejs.org/)へ行き、最新版をダウンロードして、パッケージマネージャをダブルクリックし、支持に従うことができます。あるいは、 `brew install node`コマンドで[Homebrew](https://brew.sh/)などのパッケージマネージャーを使うこともできます。

<!--
### Installing on Linux
-->

### Linuxでのインストール

<<<<<<< HEAD
If you're developing on Linux, you may consult [this page](https://nodejs.org/en/download/package-manager/) to determine how you should install Node.<br />On that note, there's a possibility that you may already have Node \(e.g., if you're using a VPS\). You can check by running the `node -v` command. If it outputs something like <branch version="11.x" inline>`v8.0.0`</branch><branch version="12.x" inline>`v12.0`</branch> or higher, then you're good to go! Otherwise, take a look at the page linked above for instructions on installing Node on your OS.
=======
<!--
If you're developing on Linux, you may consult [this page](https://nodejs.org/en/download/package-manager/) to determine how you should install Node.<br />On that note, there's a possibility that you may already have Node \(e.g. if you're using a VPS\). You can check by running the `node -v` command. If it outputs something like `v8.0.0` or higher, then you're good to go! Otherwise, take a look at the page linked above for instructions on installing Node on your OS.
-->

Linuxで開発しているのなら、どのようにNodeをインストールすべきかを決めるために[このページ](https://nodejs.org/en/download/package-manager/)を確認することができます。<br />注意として既にNodeがインストールされている可能性があります（あなたがVPSを使っている場合など）。`node -v`コマンドを実行して確認できます。もしそれが`v8.0.0`以上のバージョンを出力するなら、それで問題ないです！そうではない場合は、上にリンクされているページを見て、あなたのOSにNodeをインストールしてください。
>>>>>>> 5bc63fc (翻訳の改善 (#65))

<!--
::: warning
If you _do_ have Node installed, but have an older version \(i.e. anything below <branch version="11.x" inline>8.0.0</branch><branch version="12.x" inline>12.0</branch>\), you should upgrade to the latest version. <branch version="11.x" inline>discord.js v11</branch><branch version="12.x" inline> discord.js v12</branch> requires Node <branch version="11.x" inline>8.0.0</branch><branch version="12.x" inline>12.0</branch> or higher.
:::
-->

::: warning
すでにNodeがインストールされていても、古いバージョン（8.0.0以下）の場合は、最新のバージョンにアップグレードしてください。
:::

---

<!--
## Preparing the essentials
-->

## 必需品の準備

<!--
To install and use discord.js, you'll need to install it via npm \(Node's package manager\). npm comes with every Node installation, so you don't have to worry about installing that. However, before you install anything, you should set up a new project folder.
-->

discord.jsを使用するには、npmからインストールする必要があります（Nodeのパッケージマネージャ）。npmはすべてのNodeインストール方法に付属しているので、インストールすることを心配する必要はありません。ただし、何かをインストールする前には、新しいプロジェクトフォルダを作成する必要があります。

<!--
### Setting up a project folder
-->

### プロジェクトフォルダの作成

<<<<<<< HEAD
Like any other project, you should have a dedicated folder to keep it organized and manageable.
=======
<!--
Like any other project, you should have a dedicated folder for this, in order to keep it organized and manageable.
-->

他のプロジェクトと同様に、整理して管理しやすくするために、このための専用フォルダを用意する必要があります。

<!--
Navigate to a place on your machine that's easy to find and reopen in the future, for convenience purposes. Create a new folder like you normally would (for Linux, you can use `mkdir project-name` inside your terminal). If you already have a name you want to use for your bot, you can use that as the folder name. Otherwise, you may name it something like `discord-bot` for the time being \(or anything else you have in mind\).
-->

利便性のために、パソコン上の簡単に開くことができる場所に移動します。通常どおりに新しいフォルダを作成します（Linuxの場合は、ターミナル内で `mkdir プロジェクト名` を使用できます）。ボットに使用したい名前がすでにある場合は、フォルダ名としてそれを使用することができます。そうでなければ、当面の間は `discord-bot` などの名前を付けても構いません。
>>>>>>> 5bc63fc (翻訳の改善 (#65))

Navigate to a place on your machine that's easy to find and reopen in the future for convenience purposes. Create a new folder like you normally would (depending on your OS, you can use `mkdir project-name` inside your terminal). If you already have a name you want to use for your bot, you can use that as the folder name. Otherwise, you may name it something like `discord-bot` for the time being \(or anything else you have in mind\).

Once you're done making the folder, open it up (depending on your OS, you can use `cd project-name` inside your terminal).

<!--
### Opening the command prompt
-->

### コマンドプロンプトを開く

<!--
If you're on Linux, you can quickly open up the terminal with `Ctrl + Alt + T`.
-->

Linuxを使用している場合は、 `Ctrl + Alt + T`で素早く端末を開くことができます。

If you're on Windows and aren't familiar with opening up the command prompt, do the following:

<!--
1. Open your bot project folder.
2. Hold down the `Shift` key and right-click inside the folder.
3. Choose the "Open command window here" option.
-->

1. ボットのプロジェクトフォルダを開く
2. Shiftキーを押しながらフォルダの中を右クリックする
3. 「コマンド ウィンドウをここで開く」オプションを選択する

<!--
It should then open up a window with a black background. It's a bit unattractive, but we'll talk about using better, more powerful tools in a different part of the guide.
-->

すると黒い背景のウィンドウが開きます。少々魅力的ではありませんが、ガイドの別の部分で、より強力なツールの使用について説明します。

<!--
### Using the command prompt
-->

With the command prompt open, run the `node -v` command to make sure you've successfully installed Node.js. If you see something like <branch version="11.x" inline>`v8.0.0`</branch><branch version="12.x" inline>`v12.0`</branch>, great! If not, go back and try installing again.

The next command you'll be running is `npm init`. This command creates a `package.json` file for you, which will keep track of the dependencies your bot uses and other info. If you're a bit confused by that, you can ignore it for the time being.

The `npm init` command will ask you a sequence of questions–you should fill them out as you see fit. If you're not sure of something or want to skip it as a whole, leave it blank and press enter.

`npm init`コマンドは一連の質問をします。よくわからない場合や、飛ばしたい場合は、空白のままEnterキーを押しても構いません。

<!--
::: tip
Want to get started quickly? Use `npm init -y` to have it fill out everything for you!
:::
-->

::: tip
すばやく始めたいときは、`npm init -y`を使用して、すべてを自動で記入してもらうことができます！
:::

<!--
Once you're done with that, you're ready to install discord.js!
-->

これでdiscord.jsをインストールする準備が整いました。

---

<!--
## Installing discord.js
-->

## discord.jsのインストール

<!--
Now that you've installed Node.js and know how to open up your console and run commands, you can finally install discord.js!
-->

Node.jsをインストールし、コンソールを開いてコマンドを実行する方法を理解したので、最後にdiscord.jsをインストールします。

To install discord.js, run the `npm install discord.js`. This can take a bit of time but should finish fairly quickly.

::: warning
Once the installation is complete, you'll see something like this:
![npm warnings](./images/npm-warnings.png)<br/>
**This is perfectly normal and means that it worked.** You don't need to install any of the items listed to use discord.js; they are 100% optional.
:::

<!--
And that's it! With all the necessities installed, you're almost ready to start coding your bot.
-->

以上です！必要なものがすべて揃ったら、ボットの開発を始める準備はほぼ整いました。

---

While you are coding, you may find that you run into numerous syntax errors or code in an inconsistent style. You should install a linter to ease these troubles. While code editors generally can point out syntax errors, with a linter, you can coerce your coding to be in a specific style as you define in the configuration. While this is not required, it's advisable. [Click here for the linter guide!](/preparations/setting-up-a-linter.md)
