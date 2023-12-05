'use strict';

{
  // type キーワードを使って型に名前をつける場合、最初の 1 文字目は大文字にするのが一般的
  type ResultStatus = 'Pass' | 'Fail';

  // let englishResult: 'Pass' | 'Fail';
  let englishResult: ResultStatus;
  let mathResult: 'Pass' | 'Fail';
}
