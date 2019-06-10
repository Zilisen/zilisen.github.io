// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

// //alert('MDZZ');
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

// document.querySelector('html').onclick = function() {
//     alert('come on, baby!');
// }

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/john.jpg'){
        myImage.setAttribute('src', 'images/aya.jpg');
    }else{
        myImage.setAttribute('src', 'images/john.jpg');
    }
}

function setHeading(name){
    let myHeading = document.querySelector('h1');
    myHeading.textContent = '凛冬将至, ' + name + '!';
}

function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName) {
    setUserName();
}else{
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;