window.onload = function(){
    let navList = document.querySelector(".nav > ul");

    navList.addEventListener("mouseover",()=>{
        navList.querySelectorAll(".submenu").forEach(sub=>{
            sub.style.height="155px";
        });
        document.getElementById("header").classList.add("on")
    });
    navList.addEventListener("mouseout", () => {
        navList.querySelectorAll(".submenu").forEach(sub => {
            sub.style.height = "0px";
        });
        document.getElementById("header").classList.remove("on");
    });
}