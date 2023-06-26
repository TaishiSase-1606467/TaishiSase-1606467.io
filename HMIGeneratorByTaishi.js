'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function generateImage() {
    let target = document.getElementById("target").value;
    let func = document.getElementById("function").value;
    let strength = document.getElementById("strength").value;
    let direction = document.getElementById("direction").value;

console.log(target, func, strength, direction);

    var output = document.getElementById("output");

    if (target === "自動車" && func === "出会い頭機能" && strength === "警報" && direction === "右"){
            output.innerHTML = "<img src='出会い頭_右_警報.png'>";
    } else if (target === "自動車" && func === "出会い頭機能" && strength === "注意喚起" && direction === "右") {
            output.innerHTML = "<img src='出会い頭_右_注意喚起.png'>";
    }　else if (target === "自動車" && func === "出会い頭機能" && strength === "情報提供" && direction === "右") {
            output.innerHTML = "<img src='出会い頭_右_情報提供.png'>";
    }
  }
