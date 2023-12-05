'use strict';

{
  // JavaScriptは const で宣言していても上記のコードのように値を変更できてしまう
  // もし、値を変更させたくない場合は readonly を使うと良い
  const scores: readonly number[] = [70,90,80];
  scores[1] = 100
  scores.push(60)
  scores[2] = 'Hello'
  scores.push('Ok!')
}
