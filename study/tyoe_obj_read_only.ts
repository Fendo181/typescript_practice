'use strict';

{
  interface User {
    readonly userName: string;
    score: number;
    email : ?string; // ?をつけると、あってもなくても良い指定になる
  }

  const user: User = {
    userName: 'Taro',
    score: 80,
  };

  console.log(user.userName)
  user.userName = 'Jiro'; //  read-only propertyなのでエラーになる
}
