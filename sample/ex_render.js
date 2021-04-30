// シーンを作成
const scene = new THREE.Scene();
// ライトを作成
{
  const color = 0xFFFFFF;
  const intensity = 2;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(1, 3, 3);
  scene.add(light);
}
// カメラを作成(fov, aspect, near, far)
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// カメラ位置を設定
camera.position.x = -3;
camera.position.y = 4;
camera.position.z = 3;


// カメラの向き
camera.lookAt(scene.position);

// レンダラを作成
const renderer = new THREE.WebGLRenderer();
// レンダリングサイズを設定
renderer.setSize( window.innerWidth, window.innerHeight );
// レンダラ要素をHTMLドキュメントに追加
document.body.appendChild( renderer.domElement );

// PlaneGeometry
const pl_geometry = new THREE.PlaneGeometry( 20, 10);
const pl_material = new THREE.MeshBasicMaterial( {color: 0xcccccc} );
const plane = new THREE.Mesh( pl_geometry, pl_material );

plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 3;
plane.position.y = -1;
plane.position.z = 0;

scene.add( plane );

// SphereGeometry
const sp_geometry = new THREE.SphereGeometry( 3, 32, 32 );
const sp_material = new THREE.MeshStandardMaterial({color: 0x555555, roughness:0.5});
const sphere = new THREE.Mesh( sp_geometry, sp_material );
scene.add( sphere );

 
/* CubeGeometry
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshStandardMaterial({color: 0x555555, roughness:0.5});
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
*/

/* TorusGeometry
const tr_geometry = new THREE.TorusGeometry( 1, 0.3, 16, 100 );
const tr_material = new THREE.MeshStandardMaterial({color: 0x555555, roughness:0.5});
const torus = new THREE.Mesh( tr_geometry, tr_material );
scene.add( torus );
*/

// アクシスヘルパー（座標軸）
const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

/*
// グリッドヘルパー
const size = 10;
const divisions = 10;
const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );
*/

// パフォーマンス表示
var stats = new Stats();
stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

// dat.GUI（パラメータ調整）
var controls = new function() {
  this.rotationSpeed = 0.02;
}
var gui = new dat.GUI();
gui.add(controls, 'rotationSpeed', 0, 0.1); // 回転速度の設定範囲



// アニメーションの処理
const animate = function () {
  requestAnimationFrame( animate );

  sphere.rotation.x += controls.rotationSpeed;
  sphere.rotation.y += controls.rotationSpeed;
  sphere.rotation.z += controls.rotationSpeed;


  stats.begin();
  renderer.render( scene, camera );

  stats.end();
}

// アニメーションを実行
animate();