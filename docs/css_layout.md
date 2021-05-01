### CSSページレイアウト方法まとめ 
---
2021.5.1作成

今回、CSSでページをレイアウトする方法をまとめてみました。

レイアウトの方法は主に、**ノーマルフロー**、**フレックス**、**グリッド**の三つです。あと、本来レイアウト用には使わないのですが、HTMLの**テーブル**もあります。各レイアウトのサンプルページを作ったので参考にしてください。（サンプルページの文章は、サンプル用に参照したものです！）  


- **ノーマルフロー（通常）**・・・通常のレイアウトに適用され、画面の左上から下に向かって、要素が敷き詰められていく感じです。 特に何も指定しなければ、この形式で表示されます。 要素が自動的に上に詰められるので、縦方向で中心にレイアウトするとき難しかったりします。  

  [ノーマルフローレイアウトのサンプル](../sample/css_layout/layout_normal.html)  

- **フレックス**・・・要素を横方向（または通常と同じく縦）に詰めていく感じです。親要素に対する幅の割合を柔軟に設定できます。 メニュー項目などの小さなパーツをレイアウトするのに向いています。CSSでフレックスに指定するには、親要素の属性で`display: flex;`とします。  

  [フレックスレイアウトのサンプル](../sample/css_layout/layout_flex.html)  

 フレックスのCSS指定
  ```css
/* 親要素の指定 */
.panel {
  margin: 10px;
  padding: 10px;
  display: flex;  /* flexを指定 */
  background-color: #f5f5f5;
  border: 3px solid #a9a9a9;
  }
  ```

- **グリッド**・・・画面を縦と横に格子状に分割して、その中に要素を入れていく感じです。ページ全体をレイアウトするのに向いています。親要素で`display: grid;`と指定します。  
  [グリッドレイアウトのサンプル](../sample/css_layout/layout_grid.html)  
  [グリッドレイアウト（自動調整）のサンプル](../sample/css_layout/layout_grid_auto.html)
  グリッドのCSS指定
```css
/* 親要素の指定 */
.panel {
  width: 1000px;
  height: 1000px;
  margin: 10px;
  padding: 10px;
  display: grid;   /* レイアウトをグリッドに設定 */
  grid-template-columns: 1fr 1fr 1fr; /* 列の幅の比率（1:1 :1）*/
  grid-template-rows: 1fr 1fr 1fr;    /* 行の幅の比率（1:1 :1）*/
  gap: 20px;   /* 列と行のそれぞれの間隔 */
  background-color: #f5f5f5;
  border: 3px solid #a9a9a9;
}
```
列と行でそれぞれグリッドの比率を設定できます。
```css
/* 親要素の指定（幅・高さは指定なし） */
.panel {
  margin: 10px;
  padding: 10px;
  display: grid;   /* レイアウトをグリッドに設定 */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* 列に入るだけ入れる */
  grid-auto-rows: minmax(150px, auto); 
  gap: 20px; /* 列と行のギャップ */
  background-color: #f5f5f5;
  border: 3px solid #a9a9a9;
}
```
`grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));`とすると、自動で要素が入る数を調整してくれます。

- **テーブル（表）**・・・HTMLのタグで作成する。古くからのサイトなどでレイアウトに使われるていることもありますが、基本はデータをまとめるのに使います。  
  [テーブルのページサンプル](../sample/css_layout/layout_table.html)

以上、各方法を試してみた結果、サンプルにあるようなパネル要素を並べる場合は、グリッドで自動調整の設定にしておけば、表示がくずれることもなく問題なさそうです。

レイアウト、レスポンシブデザインについては、MDNのサイトが詳しいです。  
- [MDN > CSSレイアウト](https://developer.mozilla.org/ja/docs/Learn/CSS/CSS_layout)
- [MDN CSSレイアウトサンプルコード](https://github.com/mdn/learning-area/tree/master/css/css-layout)