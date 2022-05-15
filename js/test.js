const theLinks = document.querySelectorAll(".nav-item");
theLinks.forEach(link => link.addEventListener("click", ()=>{
    document.getElementById("checkie").checked=false;
}))