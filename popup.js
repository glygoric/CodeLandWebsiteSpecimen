document.getElementById("popup-activator").onclick=()=>{
    document.getElementById("popup").style.display="flex";
    document.getElementById("overlay-div").style.display="block";
}
document.getElementById("popup-delete").onclick=()=>{
    document.getElementById("popup").style.display="none";
    document.getElementById("overlay-div").style.display="none";
}