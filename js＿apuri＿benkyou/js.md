ルール3つ

バッククォート ` で囲む（シングルクォート ' じゃないので注意）
${ } の中に変数や式を書く
中身が自動的に文字列に変換される
console.log(`私は${name}です`);
const name = "太郎";
const age = 25;

console.log(名前は${name}で、年齢は${age}歳です);
// → 名前は太郎で、年齢は25歳です
let count = 0;        // ← 0スタート

while (count < 3) {
  console.log(count); // まず出力してから
  count++;            // その後で増やす
}


// 配列 → 番号で管理
const fruits = ["apple", "banana", "orange"];
//              [0]       [1]        [2]

// オブジェクト → 名前で管理
const user = {
  name: "太郎",   // "name" という名前の箱
  age:  25,       // "age"  という名前の箱
  city: "東京"    // "city" という名前の箱
};
// 配列は番号で取り出す
console.log(fruits[0]); // → apple

// オブジェクトは名前で取り出す
console.log(user.name); // → 太郎
console.log(user.age);  // → 25
for...in は「この箱の名前（キー）を全部教えて」というループです。



...numbers → 引数を何個でも配列で受け取る
a          → これまでの合計（毎回更新される）
b          → 今処理している数字
reduce     → 配列を1つの値にまとめたいとき
// 三項演算子の形
条件 ? 真のとき : 偽のとき


オブジェクトの作り方
const user = {
  name: "太郎",  // キー: 値
  age: 25,       // キー: 値
};


// ドット記法（よく使う）
user.name  // → "太郎"
user.age   // → 25

// ブラケット記法（キーが変数のとき使う）
user["name"]  // → "太郎"
user["age"]   // → 25

user.city = "東京"  → ないキー = 追加
user.age  = 26     → あるキー = 上書き
delete user.city   → 削除



const user1 = { name: "太郎", age: 25 };
const user2 = { name: "花子", age: 30 };

user1.name  // → "太郎"
user2.name  // → "花子"
//↑どっちのnameか指定しないといけない！
```


なんでuserをつけるのか
`user` をつけないと「どのオブジェクトのnameか」がわかりません。

---

**人間で例えると**
```
// ❌ これだと誰の名前かわからない
名前を教えて

// ✅ これなら誰の名前かわかる
太郎の名前を教えて
花子の名前を教えて
```

`user.name` の `user.` は「太郎の」「花子の」にあたる部分です。

---

**まとめ**
```
user.name
↑    ↑
誰の  何を取り出すか

userを書かない方法
const user = { name: "太郎", age: 25 };

const { name, age } = user;
//      ↑     ↑
//  取り出したいキーを書く

console.log(name); // → "太郎"
console.log(age);  // → 25



// 追加・削除
fruits.push("grape");    // 末尾に追加
fruits.unshift("melon"); // 先頭に追加
fruits.pop();           // 末尾を削除
fruits.shift();         // 先頭を削除
// 検索
fruits.includes("apple")  // true
fruits.indexOf("banana")  // 1

スプレッド（配列）
const fruits = ["apple", "banana", "orange"];

const more = [...fruits, "kiwi"];
//            ↑
//      fruitsの中身を全部展開して、最後にkiwiを追加

console.log(more);
// → ["apple", "banana", "orange", "kiwi"]




{}
// オブジェクトを作るとき
const user = { name: "太郎", age: 25 };

// 処理のまとまりを作るとき
if (x > 0) {
  console.log("正");
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 関数の処理を書くとき
const fn = () => {
  return "hello";
};

// 分割代入（オブジェクト）
const { name, age } = user;

()
// 関数の引数を渡すとき
console.log("hello");
//          ↑
//       ここに渡す

// 関数を呼び出すとき
user.greet();
max(5, 3);

// 条件を書くとき
if (x > 0) { ... }
while (count < 3) { ... }

// 関数の引数を定義するとき
const fn = (a, b) => a + b;
//          ↑
//      引数はここ

[]
// 配列を作るとき
const fruits = ["apple", "banana"];

// 配列の要素を取り出すとき
fruits[0]; // → "apple"

// 分割代入（配列）
const [first, second] = fruits;
```

---

**まとめ**
```
{}  → オブジェクト・処理のまとまり
()  → 引数・条件
[]  → 配列・インデックス
```

迷ったらこう考えてみてください😊
```
データを入れる    → {} か []
関数に渡す/呼ぶ  → ()
処理をまとめる   → {}

見た動画
https://youtu.be/acSw8M7jQ2o?si=-F48X6o3jQ0Z2-od

https://youtu.be/7wEuRdsnBs4?si=w4u-Snmu825d7RqN

https://youtu.be/UtNPgtoiZz4?si=vatL1kYdPrzq7tF9

https://youtu.be/Uqm642_O52U?si=DEBPjDemyfIOYjTu

https://youtu.be/ra4Se192sp4?si=DQ9cjY6IKx5PFaAg

