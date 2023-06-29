'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function generateImage() {
    let target = document.getElementById("target").value;
    let func = document.getElementById("function").value;
    let strength = document.getElementById("strength").value;
    let direction = document.getElementById("direction").value;

console.log(target, func, strength, direction);

    var output = document.getElementById("output");
    output.innerHTML = `<img src=img/${target}_${func}_${strength}_${direction}.png>`;
}
