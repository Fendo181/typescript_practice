'use strict';

{
  let message: string;
  message = 'Hello';
  message = 50;
  console.log(message.length); // error TS2322: Type 'number' is not assignable to type 'string'.
  console.log(message.toFixed); // Property 'toFixed' does not exist on type 'string'.
}
