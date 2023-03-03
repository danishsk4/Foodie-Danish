// counter
let counterFunc = (id, startNum, endNum, increament, counterUnit, interval) => {
  let countEl = document.getElementById(id);
  let num = startNum;
  let a = setInterval(() => {
    num += increament;
    countEl.innerText = `${num}${counterUnit}+`;
    num >= endNum ? clearInterval(a) : 0;
  }, interval);
};
// counterFunc = (id, startNum, endNum,increament, counterUnit, interval)

counterFunc("customers", 0, 100, 3, "K", 70);
counterFunc("restorents", 0, 500, 7, "", 30);
counterFunc("chefs", 0, 1750, 15, "", 20);
counterFunc("countries", 0, 29, 1, "", 90);

// mobile menu display of navbaar
let hamburger = document.getElementById("hamburger");
let mobileMenu = document.getElementById("mobileMenu");
let closebtn = document.getElementById("close");

hamburger.addEventListener("click", () => {
  if (mobileMenu.style.display == "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});
closebtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

// off mobile menu after going to bookmarks
let manuEl = document.querySelectorAll(".menu-off");
// let mobileMenu = document.getElementById("mobileMenu");

manuEl.forEach((element) => {
  element.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});

// review slider
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");

let slide1 = document.getElementById("slide-1");
let slide2 = document.getElementById("slide-2");
let slide3 = document.getElementById("slide-3");

function one() {
  btn3.style.width = "1rem";
  btn2.style.width = "1rem";

  btn3.style.borderRadius = "50%";
  btn3.style.opacity = "50%";

  btn2.style.borderRadius = "50%";
  btn2.style.opacity = "50%";

  slide1.style.marginLeft = "0%";
  btn1.style.opacity = "100%";

  slide2.style.marginLeft = "-300%";
  slide3.style.marginLeft = "-300%";

  btn1.style.width = "1.8rem";
  btn1.style.borderRadius = ".8rem";
  btn1.style.opacity = "100%";
}
function two() {
  btn1.style.width = "1rem";
  btn3.style.width = "1rem";

  btn1.style.borderRadius = "50%";
  btn1.style.opacity = "50%";
  btn3.style.borderRadius = "50%";
  btn3.style.opacity = "50%";

  slide1.style.marginLeft = "-300%";
  slide2.style.marginLeft = "0%";
  btn2.style.opacity = "100%";

  slide3.style.marginLeft = "-300%";

  btn2.style.width = "1.8rem";
  btn2.style.borderRadius = ".8rem";
  btn2.style.opacity = "100%";
}

function three() {
  btn1.style.width = "1rem";
  btn2.style.width = "1rem";

  btn1.style.borderRadius = "50%";
  btn1.style.opacity = "50%";
  btn2.style.borderRadius = "50%";
  btn2.style.opacity = "50%";

  slide1.style.marginLeft = "-300%";
  slide2.style.marginLeft = "-300%";
  slide3.style.marginLeft = "0%";

  btn3.style.width = "1.8rem";
  btn3.style.borderRadius = ".8rem";
  btn3.style.opacity = "100%";
}

let sliderChalao = () => {
  let startInterval = setInterval(() => {
    let II = setTimeout(two, 1);
    let III = setTimeout(three, 5000);
    let I = setTimeout(one, 10000);

    btn1.addEventListener("click", () => {
      one();
      clearTimeout(II);
      clearTimeout(III);
      clearInterval(startInterval);
      setTimeout(sliderChalao, 10);
    });

    btn2.addEventListener("click", () => {
      two();
      clearTimeout(I);
      clearTimeout(III);
      clearInterval(startInterval);
      setTimeout(sliderChalao, 10);
    });

    btn3.addEventListener("click", () => {
      three();
      clearTimeout(I);
      clearTimeout(II);
      clearInterval(startInterval);
      setTimeout(sliderChalao, 10);
    });
  }, 15000);
};

sliderChalao();
