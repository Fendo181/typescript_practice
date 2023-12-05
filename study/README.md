## TypeScriptの基本文法

#### 型宣言の基本

TypeScriptでは変数の型を明示的に宣言することができます。
例えば以下は明示的に数値型を宣言しています。

```typescript
'use strict';
{
  let x: number = 5;
  console.log(x);
}
```

これをコンパイルすると以下のようになります。

```sh
tsc main.ts
```

```typescript
'use strict';
{
    let x = 5;
    console.log(x);
}
```

このように型を明示的に宣言することで、コンパイル時に型チェックを行うことができます。


### 型推論

TypeScriptでは型を明示的に宣言しなくても、コンパイラが型を推論してくれます。

```typescript
'use strict';

{
  // 変数を宣言したと同時に値を代入した場合、値にtrue を代入している場合は
  // TypeScript側で自動で真偽値で型付けすればいいのだなと推測してくれます。
  // let isLoggedIn: boolean = true;
  let isLoggedIn = true; // これを型推論
}
```

この場合、isLoggedInはboolean型と推論されます。
このように型を明示的に宣言しなくても、コンパイラが型を推論してくれますが
明示的に型を宣言するか、型推論にするかはプロジェクトの方針によります。

### ユニオン型

TypeScriptではユニオン型を使うことができます。
ユニオン型とは、複数の型を指定することができる型のことです。

```typescript
'use strict';

{
  let keyword: string | number | boolean;
  keyword = 'milk';
  keyword = 1234;
  keyword = false;
}
```

この場合、keywordはstring型、number型、boolean型のどれかを代入することができます。

### リテラル型

TypeScriptではリテラル型を使うことができます。
これは、文字列や数値の値そのものを型として指定することができます。

```
'use strict';

{
  // リテラル型
  // これらの変数は、これらの値以外のすべてをはじくようになります
  let taxRete: 0.1;
  let myEmail: 'taro@example.com';
  let isPaid: true;
  myEmail = 'jiro@ecample.com'
}
```

上記のコードを例にみると、taxReteは0.1以外の値を代入することができません。
myEmailも `taro@example.com` 以外の値を代入することができません。

このようにリテラル型はその値そのものを型として指定することができます。
こういったコードを見ると `const` で宣言するのと何が違うのかと思うかもしれませんが
`const` は変数の再代入を禁止するだけで、型を指定することはできません。

なので、リテラル型はよく、ユニオン型と組み合わせて使われます。

```typescript

  // リテラル側はユニオン型とよく使われる
  let result: 'Pass' | 'Fail';
  result =  'Good';
  result =  50
```


### 参考


- [TypeScript入門 (全16回) - プログラミングならドットインストール](https://dotinstall.com/lessons/basic_typescript_v2)
- [TypeScript入門『サバイバルTypeScript』〜実務で使うなら最低限ここだけはおさえておきたいこと〜](https://typescriptbook.jp/)
