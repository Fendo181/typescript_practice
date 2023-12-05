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
}
