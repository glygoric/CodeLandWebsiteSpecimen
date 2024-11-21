document.getElementById("menu-activator").onclick=()=>{
    document.getElementById("menu").style.left="0";
    document.getElementById("menu").style.width="330px";
}
document.getElementById("menu-deactivator").onclick=()=>{
    document.getElementById("menu").style.left="-100px";
    document.getElementById("menu").style.width="0px";
}
window.onscroll=()=>{
    document.getElementById("nav-id").style.backgroundColor = window.scrollY > 0 ? "rgba(102,16,242,0.6)" : "#6610f2";
    document.getElementById("menu").style.left="-100px";
    document.getElementById("menu").style.width="0px";
}