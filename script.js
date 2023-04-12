//your JS code here. If required.
let btn = document.getElementById("enterBtn");
btn.addEventListener("click" , ()=> {
   let heading = document.createElement("h1");
   heading.innerText = "Entered Metaverse";
   document.body.appendChild(heading);
   let paratag = document.getElementById("status");
   paratag.remove();
})
