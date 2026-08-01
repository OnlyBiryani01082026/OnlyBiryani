// Smooth image zoom
const menu = document.querySelector(".menuImage");

if(menu){
menu.addEventListener("click",()=>{

if(menu.classList.contains("zoom")){
menu.classList.remove("zoom");
document.body.style.overflow="auto";
}else{
menu.classList.add("zoom");
document.body.style.overflow="hidden";
}

});
}

// Fade animation
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".card,.menuImage,.hero,.contact").forEach(el=>{
observer.observe(el);
});
