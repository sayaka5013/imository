## JavaScriptで動かしてみる
---

### クリックしてテキストを変える

JavaScriptを使ってテキストをクリックしたら内容が変わるようにしてみます。
[ここ](../sample/ex_change_text.html)からやってみてください。

テキストの内容が変わって、色も変わったと思います。
HTMLの「鹿目まどか」（p要素）を、JavaScriptで赤い「暁美ほむら」に変わるようにしてます。


プログラムの**変数**や**メソッド**は、やたら長い名前で余計わかりにくいですが、
はじめは、なんとなく流れがわかればいいと思います。

HTML (ex_change_text.html)
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Change Contents</title>
  <style>
    p { font-size: 5em; }
  </style>
</head>
<body>
  <p id="madoka">鹿目まどか</p>
  <script src="ex_change_text.js"></script>
</body>
</html>
```

JavaScript (ex_change_text.js)
```javascript
// p要素(まどか)の参照を取得してname01に代入
const name01 = document.getElementById('madoka');

// まどかをクリックしたときの処理をonclickに代入
name01.onclick = function () {

  // name01のプロパティを変える
  this.innerHTML = "暁美ほむら";
  this.style = "Color: red";
}
```


- JavaScriptのプログラムは、流れを説明すると次の流れです。
1. HTMLのp要素(id="madoka")取得して、参照できるようにする
2. クリックしたときの処理（関数: function）を設定する
3. 関数の中でp要素のテキストとスタイル（色）を変える


- JavaScriptでは、要素(`<p>`とか`<div>`)を**オブジェクト**（元々の英語は物とゆう意味）として扱います。**オブジェクト**には、**プロパティ**（値、属性）と**メソッド**（処理、関数）があって、だいたいこれらを使ってプログラムしていきます。  
（上のプログラムの中では、例えば`name01.onclick`の`name01`がオブジェクトで`onclick`がプロパティです。）

- プログラムの中で、`name01`は**変数**で、数値やテキスト、オブジェクト（の参照）を入れておくことができます。

- また、`=`は、数学のイコールと違って、**右の値を代入する**意味です。
また、`function () { }`は、**関数**といって**{  }の中の処理をひとまとめにしたもの**です。ひとまとめにして関数にしておくと、関数を呼び出して何度も使えるので、同じ内容を何度も書かなくてよくなります。


以上、だいたいこんな感じです。。。