//alert("Hello");

// foo.var.piyo. など
// const foo = 1 + 1;
// console.log(foo);

// +
// -
// *
// / wari
// % amari
// ** beki

// console.log(1 % 1);

//再代入　
//通常はconst
// let foo = 1;
// foo = 3;
// console.log(foo);



//console.log("hanon" + "dayo");
//console.log("1" + "1"); 11(文字列)

//booolean
// if(isLogin === true){
// };

// null 定義しないと表示されない
// undefined 



//配列
// const array =[1, 2, 3];
// console.log(array[0]);

// const array = ["neko", "inu", "usagi"];
// console.log(array[2]);


//ループ
// const questions = [
// "はのん",
// "犬好き、ペキニーズ",
// "日本人です"
// ];

// console.log(questions[0]);
// console.log(questions[1]);
// console.log(questions[2]);

// for (let index = 0; index < questions.length; index++){
//     console.log(questions[index]);
// }
//配列questionsののindex番目の値をconsoleで表示




//条件式
// let isLogin = false;
// if(isLogin === false){
//     alert("ログインしてください")
// }
//! 意味を反転
// if(!isLogin){
//     // alert("ログインしてください")
// }

// || または　　foo === 1 || foo === 2 など

// let isLogin = true;
// if(!isLogin){
//      alert("ログインしてください")
//  } else {
//     console.log("ログイン成功中");
//  }

// const userType = "member"; //member,admin,owner
// if (userType === "member"){
//     alert("アクセスできません")
// } else if (userType === admin){
//     alert("今から10分だけアクセスできます")
// } else {
//     console.log("アクセス成功");
// }


//関数
// function 関数名(){

// }
// const 関数名 = () =>{

// }
//呼び出し
// 関数名();

//引数
// function 関数名(引数) {

// }
// 関数名(引数名);



//コールバック
// function foo(callback){
//     console.log("hi,tom.");
//     callback(); //実質bar(); =  console.log("hi,ken");
// }

// function bar(){
//     console.log("hi,ken");
// }

// foo(bar);



//戻り値
// function 関数名(){
//     return 戻り値;
// }
//• console.log は、デバッグ（確認）用の 「確認用モニター」。
//• return は、次の作業へ繋げるための 「出力ポート（コンセント）」。
//「画面で確認したいだけ」なら log を使い、「その結果を使って何かを続けたい」なら return を使う、と使い分ければ完璧です！



//スコープ
// const bar1 = 1;  //グローバル変数

// function foo() {
//     const bar2 = 2;  //ローカル変数
//     // console.log(bar2);
//     return bar2;
// }

// console.log(bar1);
// const result = foo(); // 戻り値を result という箱で受け取る
// console.log(result);



//オブジェクト
// const オブジェクト名 ={
//     プロパティ名:値
// };

// const snsUser = {
//     id: 1,
//     userName: "Taro",
//     gender: "male",
//     //メソッド 必ずfunctionでやる
//     like: function  () {
//         console.log("like");
//     },
//     post: function methodName (arguments) {
//         // body
//     }
// }
// console.log(snsUser.id);
// console.log(snsUser.like);

// const snsUser = {
//     id: 1,
//     userName: "Taro",
//     gender: "male",
//     post: function (contents) {
//         return contents + "を投稿しました by" + this.userName;
//     }
// }

// console.log(snsUser.post("プログラミングなう"));