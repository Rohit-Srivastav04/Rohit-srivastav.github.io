// /creating a responsive navbar
const mobileNav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobileNav.addEventListener("click", () => {
    headerElem.classList.toggle("active");

});


// / creating a protfolio project in tabbed component

const mgw = document.querySelector(".mgw");
const p_btn = document.querySelectorAll(".p-btn ");
const p_img = document.querySelectorAll(".img-overlay");
var icon = document.getElementById("ico");
icon.onclick = function() {
    document.body.classList.toggle("darkmood");
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "2",
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnIntraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// scroll type start

const heroSection = document.querySelector(".section-hero");
const footr = document.querySelector(".section-footer");
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-circle-outline" class="scroll-top"></ion-icon>`;

footr.after(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({
        behavior: "smooth"

    });
};


scrollElement.addEventListener("click", scrollTop)

// scroll type end

// animate number

const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 200;

counterNum.forEach((curElem) => {
    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);

        const intialNum = parseInt(curElem.innerText);

        const incrementNum = Math.trunc(targetNumber / speed);

        if (intialNum < targetNumber) {
            curElem.innerText = `${intialNum + incrementNum}+`;

            setTimeout(updateNumber, 10);
        }
    };
    updateNumber();
})


mgw = addEventListener("click", (e) => {
    const p_btn_click = e.target;
    console.log(p_btn_click);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    // p_btn_click.classList.add("p-btn-active");

    const btn_num = p_btn_click.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    p_img.forEach((curElem) => curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
})