'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let clickCount = 0;

function generateImage() {
    let target = document.getElementById("target").value;
    let func = document.getElementById("function").value;
    let strength = document.getElementById("strength").value;
    let direction = document.getElementById("direction").value;

console.log(target, func, strength, direction);

    document.getElementById("output")
    .innerHTML = `<img src=img/${target}_${func}_${strength}_${direction}.png>`;
    ;
}

function handleTitleClick() {
    clickCount++
    if (clickCount === 5) {
        document.body.style.backgroundImage = 'url("img/dig-title.png")';
        document.getElementById("title").innerHTML = "DIGありがとうモード";
    }
    if (clickCount === 6) {
        document.getElementById("output").innerHTML = `<img src="img/kansya.png">`;
    }
  }
