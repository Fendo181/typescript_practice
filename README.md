## typescript_practice

TypeScriptについて学ぶリポジトリになります

### Setup

まずはnpmが使える環境にする

```sh
brew install nodebrew

# PATHを通す
export PATH=$HOME/.nodebrew/current/bin:$PATH

# LTS番をインストールする
# (2023/10/22時点でのLTS)
nodebrew install v18.18.2


node -v #18.18.2
npm -v #9.8.1
```

次にTypeScriptをインストールする

```sh
npm install -g typescript
```

### スクリプトの実行方法

以下にTypeScriptのコードがあるとする。

```typescript
function sum(a: number, b: number): number {
  return a + b
}

console.log(sum(10, 20));
```

これを`tsc`コマンドでコンパイルする

```
tsc sum.ts
```

そうすると同じ階層に`sum.js`が生成される。

```sh
# ls -la
-rw-r--r--  1 endu  staff   54 10 22 17:54 sum.js
-rw-r--r--  1 endu  staff   75 10 22 17:54 sum.ts
```

この `sum.js`が正常に実行されるJavaScriptファイルになる。

```
node sum.js #30
```
