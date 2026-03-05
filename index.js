//変数

let currentStatus = "学習中";

//定数
const name = "Hello World dayo"

//配列
let suuji =['いち','に','さん','よん'];

//ループ文
//let index = 0
//while(index < suuji.length){
//    console.log(suuji[index]);
//   //繰り返したい命令
//    index++;
//    //indexが＋１増えていく}



// if else
//if(suuji.length > 5){
//    console.log('ボンバイエ');
//}

//else{
//    console.log('ボンバ...');
//}

//関数
const test = (arg) => {

    //ここに実行したい命令を書く

    if(inoki.length > arg){
    console.log('ボンバイエ');
}

else{
    console.log('ボンバ...');
}

};

//test(3);
//test(6);


//オブジェクト
const kawaii = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
}

//console.log(window.innerHeight);

//window.alert('yahhou')

//console.log(document);

document.getElementsByTagName('button')[0].addEventListener('click',( )=>{
//命令
window.alert('yahhou')
});



//let inoki = ['いち', 'に', 'さん', 'よん'];

//for (let i = 0; i < inoki.length; i++) {
//  console.log(inoki[i] + "！");
//}
// 出力: いち！ に！ さん！ よん！




//for (const step of inoki) {
  // --- ここからループの中 ---
  // この中にある命令は、配列（inoki）の数だけ「繰り返し」実行される
  //console.log(step + "！");  
     //step （変数）2. + "！" （文字列の結合）
  // --- ここまでループの中 ---
//}

// --- ここはループの外 ---
// 上のループが「完全に終わった後」に、一回だけ実行される
//console.log("ダァーッ！");

//console.log(step); ➔ 記号なしで「いち」「に」とだけ出る。

//console.log("元気があれば " + step); ➔ 「元気があれば いち」「元気があれば に」と出る。

//console.log(step + step); ➔ 「いちいち」「にに」と 2 回繰り返される。


//箱の名前（変数名）は何でもいいのですが、配列が fruits（複数形）なら、取り出す箱は fruit（単数形）にするのが、
// エンジニア界隈での「読みやすいコード」の定番です。

//name や age ➔ これを 「キー（key）」 と呼びます。

//"太郎" や 25 ➔ これを 「値（value）」 と呼びます。



//ユーザー名が登録されていない可能性」や「設定値が入力されない可能性」を常に考えて、
// この name = "ゲスト" のようなデフォルト値を設定しておく習慣があると、「バグの少ない、堅牢な（壊れにくい）コードを書く人だな」と信頼されます。


