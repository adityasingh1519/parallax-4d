


const parallaxElements = document.querySelectorAll(".parallax");
const main = document.querySelector('main');

let xValue = 0, yValue = 0;
let rotateDegree = 0;

document.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    rotateDegree = (xValue / (window.innerWidth / 2) ) * 20 ;
    console.log(rotateDegree);
    
    parallaxElements.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotation = el.dataset.rotation;

        let isinLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (e.clientX - parseFloat(getComputedStyle(el).left)) * isinLeft * 0.1;

        el.style.transform = `rotateY(${rotateDegree * rotation}deg) translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${-yValue * speedy}px)) perspective(2300px) translateZ(${zValue * speedz}px)`;
    });
});

// let timeline = gsap.timeline();

// parallaxElements.forEach((el) => {
//     timeline.from(el, {
//         top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
//         duration: 1,
//     },
//     "1"
//     );
//     debugger
// }); 



if(window.innerWidth >= 725){
    main.style.maxHeight = `${window.innerWidth * 0.6}px`
}
else {
    main.style.maxHeight = `${window.innerWidth * 0.5}px`
}