var tablinks=document.getElementsByClassName('tab-links')
var tabcontents=document.getElementsByClassName('tab-contents')

const openTab=(tabname)=>{
for(let tablink of tablinks){
    tablink.classList.remove("active-link")
}
for(let tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
}
event.currentTarget.classList.add("active-link")
document.getElementById(tabname).classList.add("active-tab")
}

// -----------------Menu------------------
var sidemenu= document.getElementById("sideMenu")

const openMenu=()=>{
    sidemenu.style.right="0"
}

const closeMenu=()=>{
    sidemenu.style.right="-200px"
}