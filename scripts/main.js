let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myHeading.textContent = "Hello world!";

/*document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼。");
});*/

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/apples.png") {
    myImage.setAttribute("src", "images/cherry.png");
  } else {
    myImage.setAttribute("src", "images/apples.png");
  }
};

myButton.onclick = function () {
  setUserName();
};

function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "你好，" + myName + "。又是美好的一天！";
}
