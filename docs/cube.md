## キューブをぐるぐる回す
---


**HTML5**では、`canvas`を使って2Dに加えて３Dグラフィックも描画させることができ、3D用の**ライブラリー**（専用のプログラムをひとまとまりにしたもの）を使うと結構高度なことができます。

今回3Dライブラリの**Three.js**を使って、ブラウザ上でキューブ（立方体）が回転するアニメをやってみます。（ほぼサンプルのままだったりしますが・・。）写真の下のサンプルから表示できると思います。

<img src="../images/cube.png" alt="cube" style="zoom:30%;" />  
[サンプルを表示](../sample/ex_three.html)

プログラムの流れは、大きくは次のようになります。

#### プログラムの流れ  
1. **シーン**、**カメラ**、**ライト**を作成  
2. **ジオメトリ**、**マテリアル**、**メッシュ**を作成  
3. **アニメーション**（フレーム毎にキューブの回転、**レンダリング**）  

最初に、3Dグラフィックのレンダリング（画像を作成する）ための、**シーン**、**カメラ**、**ライト**といったオブジェクト（データ）を作成します。  

次に3Dのデータとなる**ジオメトリ**、**マテリアル**、**メッシュ**を作成します。
**ジオメトリ**は、基本となる3D形状で、**マテリアル**は色や表面の質感、**メッシュ**はジオメトリとマテリアルをもとに作られるます。  

最後に**アニメーション**処理のなかで、画面が更新されるごとにキューブを少しずつか回転させ、**レンダリング**（画像作成）を行っています。（3Dグラフィックを扱うときは、**カメラ**とか**ライト**、**シーン**といった言葉が出てくるので、映画を作っているような感じがします。）  

サンプルのプログラムを下の方に載せますので、設定を色々変えてやってみるといいと思います。Three.jsについて詳しく知りたいときは、以下のサイトを参考にしてください。

- [Three.js](https://threejs.org/)・・・Three.jsの本家。リファレンスやサンプルが色々あります。
- [Three.jsの基礎](https://threejsfundamentals.org/threejs/lessons/ja/)・・・フラミンゴがいっぱい飛んでます。詳しいチュートリアルがあります。
- [ICS.media](https://ics.media/tutorial-three/)・・・Three.jsとWeb技術の記事などわかりやすい記事が多くあります。

ex_three.html
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Three.js sample</title>
  <style>
    body { margin: 0; }
  </style>
</head>
<body>
  <script type="module" src="ex_three.js"></script> 
</body>
</html>
```
ex_three.js
```javascript
import * as THREE from 'https://cdn.skypack.dev/three';

// シーンを作成
const scene = new THREE.Scene();
// ライトを作成
{
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(1, -3, 3);
  scene.add(light);
}
// カメラを作成(fov, アスペクト比, near, far)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// カメラ位置を設定
camera.position.z = 1.6;

// レンダラを作成
const renderer = new THREE.WebGLRenderer();
// レンダリングサイズを設定
renderer.setSize( window.innerWidth, window.innerHeight );
// レンダラ要素をHTMLドキュメントに追加
document.body.appendChild( renderer.domElement );

// キューブのジオメトリを作成
const geometry = new THREE.BoxGeometry(1, 1, 1);
// マテリアルを作成
const material = new THREE.MeshPhongMaterial({color: 0x555555});
// メッシュを作成（ジオメトリ、マテリアル）
const cube = new THREE.Mesh( geometry, material );
// メッシュをシーンに追加
scene.add( cube );

// アニメーションの処理
const animate = function () {
  requestAnimationFrame( animate );

  // キューブをフレーム更新毎に回転させる
  cube.rotation.x += 0.008;
  cube.rotation.y += 0.008;
  cube.rotation.z += 0.008;

  // レンダリング（シーン、カメラ）
  renderer.render( scene, camera );
}

// アニメーションを実行
animate();
```
おまけ：Three.jsサイトにある作品
- [Littlest Tokyo](https://threejs.org/examples/#webgl_animation_keyframes)・・・東京の下町がミニチュア風に細かく作りこまれてます。
- [MMD](https://threejs.org/examples/#webgl_loader_mmd_audio)・・・MikuMikuDance(MMD)。（MMD用ローダーでMMDデータを読み込むことができます）  



2021.4.28作成
2021.4.30更新

---

[Topに戻る](../index.html)