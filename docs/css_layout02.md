### 画像などを中央にレイアウトする 
2021.5.6

---

画像などを中央に置きたいときは、フレックスボックスでレイアウトすると簡単にできます。
サンプルでは、ビデオを中央に配置しました。

- [ブラウザで表示](../sample/monhan/index_monhan.html)

### 親要素にフレックスボックスを適用する
`display: flex`でレイアウトをフレックスにして、`justify-content: center`,
`align-items: center`で横と縦の配置をセンターにします。
```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### 画像にフレーム画像を重ね合わせる
画像にフレームなどを重ねあわせたいときは、重ねたい画像を入れた要素に、
`position: absolute;`と指定すればうまくいくみたいです。  
`z-index`は、数字が大きいほど、要素が手前に表示されます。
（今回`z-index`がなくても一応フレームが手前にできました。オリジナルと少し違いますが・・）

css
```css
.flame {
  position: absolute;
  z-index: 1;
}

.vid {
  position: absolute;
  z-index: auto;
}
```
html
```html
<div class="vid">
  <video src="audio/tu1.mp4" muted="" autoplay="" playsinline="" loop=""></video>
</div>
<div class="flame">
  <img src="images/trailer_flame.png" alt="">
</div>
```

以下の記事、サイトを参考にさせてもらいました。
- [ics.media > 上下中央揃えのCSSまとめ](https://ics.media/entry/17522/)
- [MDN > 重ね合わせコンテキスト](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
- [CAPCON > モンスターハンターライズ](https://www.capcom.co.jp/monsterhunter/rise/)

---

[Topに戻る](../)

