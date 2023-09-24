var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
    if (!sidebarOpen){
        sidebar.classList.add("sidebarResponsive");
        sidebarOpen = true;
    }
}

function closeSidebar(){
    if(sidebarOpen) {
        sidebar.classList.remove("sidebarResponsive");
        sidebarOpen = false;
    }
}