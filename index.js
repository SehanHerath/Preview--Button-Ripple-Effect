const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover",(event)=>{
   const x=(event.pageX -btnEl.offsetLeft);
   const y=(event.pageX -btnEl.offsetTop);
   btnEl.style.setProperty("--xpos", x + "px");
   btnEl.style.setProperty("--ypos", y + "px");
});