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



### 参考


- [TypeScript入門 (全16回) - プログラミングならドットインストール](https://dotinstall.com/lessons/basic_typescript_v2)
- [TypeScript入門『サバイバルTypeScript』〜実務で使うなら最低限ここだけはおさえておきたいこと〜](https://typescriptbook.jp/)
