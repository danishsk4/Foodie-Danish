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
  mobileMenu.style.display = "block";
});
closebtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});
