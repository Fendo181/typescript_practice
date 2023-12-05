'use strict';
{
    // 変数を宣言したと同時に値を代入した場合、値にtrue を代入している場合は
    // TypeScript側で自動で真偽値で型付けすればいいのだなと推測してくれます。
    // let isLoggedIn: boolean = true;
    var isLoggedIn = true; // これを型推論
    var x = undefined;
    var y = null;
}
