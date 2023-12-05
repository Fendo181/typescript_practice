'use strict';

{
  // リテラル型
  // これらの変数は、これらの値以外のすべてをはじくようになります
  let taxRete: 0.1;
  let myEmail: 'taro@example.com';
  let isPaid: true;
  myEmail = 'jiro@ecample.com'

  // リテラル側はユニオン型とよく使われる
  let result: 'Pass' | 'Fail';
  result =  'Good';
  result =  50
}
