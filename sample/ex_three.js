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
// カメラを作成(fov, aspect, near, far)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// カメラ位置を設定
camera.position.z = 1.6;

// レンダラを作成
const renderer = new THREE.WebGLRenderer();
// レンダリングサイズを設定
renderer.setSize( window.innerWidth, window.innerHeight );
// レンダラ要素をHTMLドキュメントに追加
document.body.appendChild( renderer.domElement );

// ジオメトリを作成
const geometry = new THREE.BoxGeometry(1,1,1);
// マテリアルを作成
const material = new THREE.MeshStandardMaterial({color: 0x555555, roughness:0.5});
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