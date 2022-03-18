let percentage = document.querySelector(".text");
let imagebg = document.querySelector(".imagebackground");

let increamentNumber = 0;
let timerInterval = setInterval(running, 30);

function running() {
  increamentNumber++;
  percentage.textContent = `${increamentNumber} %`;
  if (increamentNumber == 100) {
    clearInterval(timerInterval);
  }

  percentage.style.opacity = scale(increamentNumber, 0, 100, 1, 0);
  imagebg.style.filter = `blur(${scale(increamentNumber, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// let percentage = document.querySelector(".text");
// let imagebg = document.querySelector(".imagebackground");

// let increamentNumber = 0;
// let timerInterval = setInterval(running, 100);
// let imageblur = setInterval(blurimage, 1000);
// let textopacity = setInterval(opacitypart, 1000);

// function running() {
//   increamentNumber++;
//   percentage.textContent = `${increamentNumber} %`;
//   if (increamentNumber == 100) {
//     clearInterval(timerInterval);
//   }
// }
// function opacitypart(){
//     // percentage
// }

// function blurimage() {
//   for (let i = 1; i >= 0; i = i - 0.1) {
//     let val = i;
//     // console.log(val)
//     imagebg.style.filter = `blur(${val}px)`;
//     if(val ==0){
//         clearInterval(imageblur)
//     }
//   }
// }
