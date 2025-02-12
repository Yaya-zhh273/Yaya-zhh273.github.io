//25.2.12
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("img").addEventListener("click", () => {
//     alert("别戳我，我怕疼！");//增加事件触发器，匿名函数&箭头函数
//   });


const myImage = document.querySelector("img");//储存引用

myImage.onclick = () => {                           //定义点击行为
    const mySrc = myImage.getAttribute("src");      //获取src属性值
    if (mySrc === "images/b.png"){
        myImage.setAttribute("src", "images/c.jpg");//强制加载
    } else {
        myImage.setAttribute("src", "images/b.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Pleaseenter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Sometimes not too bad, ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Sometimes not too bad, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
}