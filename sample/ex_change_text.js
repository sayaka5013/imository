// p要素(まどか)の参照を取得
const name01 = document.getElementById('madoka');

// まどかをクリックしたときの処理
name01.onclick = function () {

  // ほむらに変える
  this.innerHTML = "暁美ほむら";
  this.style = "Color: red";
}