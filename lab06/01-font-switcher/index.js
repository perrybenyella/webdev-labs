let currentFontSize = 1.4;
let titleFontSize = 2.0;

const makeBigger = () => {
   /*alert('make bigger!');*/
   currentFontSize += 0.2;
   titleFontSize += 0.2;
   // . means classNmae
   document.querySelector(".content").style.fontSize = currentFontSize + "rem";
   document.querySelector("hi").style.fontSize = titleFontSize + "rem";
};

const makeSmaller = () => {
   /*alert('make smaller!');*/
   currentFontSize -= 0.2;
   titleFontSize -= 0.2;
   // . means classNmae
   document.querySelector(".content").style.fontSize = currentFontSize + "rem";
   document.querySelector("hi").style.fontSize = titleFontSize + "rem";

};

// # means "id"
// eventlistener keeps track if event is clickable
document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

