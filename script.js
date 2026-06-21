/* =====================================
   LIVMORE LUXURY WEBSITE SCRIPT
===================================== */



// ===============================
// HEADER SCROLL EFFECT
// ===============================


window.addEventListener("scroll", function(){


const header = document.querySelector(".header");


if(window.scrollY > 80){

header.style.background = "#050505";

header.style.boxShadow =
"0 5px 25px rgba(0,0,0,0.3)";

}

else{

header.style.background =
"rgba(5,5,5,0.95)";

header.style.boxShadow =
"none";

}


});








// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll('a[href^="#"]').forEach(link => {


link.addEventListener("click", function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}



});


});









// ===============================
// IMAGE / SECTION ANIMATION
// ===============================


const animationItems =
document.querySelectorAll(
".service-box, .project-card, .interior-item, .why-box, .stat-box"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},

{

threshold:0.15

}

);





animationItems.forEach(item=>{


item.classList.add("hidden");


observer.observe(item);


});









// ===============================
// FORM SUBMIT MESSAGE
// ===============================


const form =
document.querySelector(".contact-form form");



if(form){


form.addEventListener(
"submit",
function(){


setTimeout(()=>{


alert(
"Thank you for contacting LIVMORE LUXURY. Our team will contact you soon."
);


},500);



});


}








// ===============================
// CURRENT YEAR FOOTER
// ===============================


const year =
document.querySelector(".copyright");



if(year){


year.innerHTML =
"© " +
new Date().getFullYear() +
" LIVMORE LUXURY. All Rights Reserved.";

}
