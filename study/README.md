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

###　型エイリアス

TypeScriptでは型エイリアスを使うことができます。
型エイリアスとは、型に別名をつけることができる機能です。

```typescript
'use strict';

{
  // type キーワードを使って型に名前をつける場合、最初の 1 文字目は大文字にするのが一般的
  type ResultStatus = 'Pass' | 'Fail';
  // let englishResult: 'Pass' | 'Fail';
  let englishResult: ResultStatus;
  let mathResult: 'Pass' | 'Fail';
}
```

このコードでは、ResultStatusという型エイリアスを使っています。
同じ型を複数の変数で使う場合に、型エイリアスを使うことで楽に変更ができます。

### 配列型

TypeScriptでは配列型を使うことができます。
配列型とは、配列の要素の型を指定することができる型のことです。

```typescript
'use strict';

{
  // 配列の数値型
  const scores: number[] = [70,90,80];
  scores[1] = 100
  scores.push(60)
  scores[2] = 'Hello'
  scores.push('Ok!')

  // JavaScript では違う種類の値を一つの配列に含めることができる
  // 配列に、文字列または数値だけの配列を入れる場合は以下のように指定をします。
  const values: (string | number)[] = ['Taro', 70, 'Jiro'];
  values[2] = 80
  values.push('Saburo')
  values.push(true)
```

scoresは数値型の配列です。この場合は `: number[]` というように型を指定します。
また、配列の要素の型を複数指定したい場合は、`|` で区切って指定します。
valuesは文字列型と数値型の配列です。この場合は `: (string | number)[]` というように指定します。

### Readonly

TypeScriptでは配列やオブジェクトを読み取り専用にすることができます。
型配列やオブジェクトの要素の変更を禁止することができます。
型宣言の前に `readonly` をつけることで読み取り専用にすることができます。

```typescript
'use strict';

{
  // readonly をつけると読み取り専用になる
  const fruits: readonly string[] = ['Apple', 'Banana', 'Grape'];
  fruits[0] = 'Cherry';
  fruits.push('Peach'); // これはエラーになる
}
```

### タプル型

TypeScriptではタプル型を使うことができます。
タプル型とは、配列の要素の型と数を指定することができる型のことです。
したがって、予め配列の組み合わせを指定して、それ以外はエラーになるようにすることができます。



### 参考


- [TypeScript入門 (全16回) - プログラミングならドットインストール](https://dotinstall.com/lessons/basic_typescript_v2)
- [TypeScript入門『サバイバルTypeScript』〜実務で使うなら最低限ここだけはおさえておきたいこと〜](https://typescriptbook.jp/)
