let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/main.jpg") {
        myImage.setAttribute("src", "images/kokona.jpg");
    } else {
        myImage.setAttribute("src", "images/main.jpg");
    }
};

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")
function setUserName() {
    let myName = prompt("请输入你的名字");
    if (!myName) setUserName();
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Shirasu Azusa is Cute, " + myName + "!";
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Shirasu Azusa is Cute, " + storedName + "!";
}

myButton.onclick = function () {
    setUserName();
};
