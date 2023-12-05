'use strict';

{
  // 文字列もしくは数値だったら、どんな順序でいくつでも配列に入れていい
  const values1: (string | number)[] = ['Taro', 70, 'Jiro'];

  // 配列の順番まで指定する
  // 配列の要素を順序とともに指定するデータ型のことをタプル
  // タプルは配列の一種なのでread onlyも使えます
   const values2: readonly [string,number] = ['Taro', 70];
   values2[0] = 'Jiro'
   values2[1] = 90
   values2[2] = 'Saburo'; // これはエラーになる

}
