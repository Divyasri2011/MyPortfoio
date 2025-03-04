var nav_id = document.querySelector(".links");
var nav_id_sideBar = document.querySelector(".links_sideBar");

function showSidebar(){
    nav_id.style.display = "none";
    nav_id_sideBar.style.display = "flex";
}
function hideSidebar(){
    nav_id_sideBar.style.display = "none";
}