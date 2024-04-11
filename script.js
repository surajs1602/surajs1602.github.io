var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-contents");
var worklist = document.getElementsByClassName("work-list");
var workblocks = document.getElementsByClassName("work-blocks");

function opentab(tabname){
    for(tabl of tablinks){
        tabl.classList.remove("active-link");
    }
    for (tabc of tabcontent){
        tabc.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openBlock(tabname){
    document.getElementById("grid-block").classList.add("disable");
    document.getElementById(tabname).classList.add("active-block");
}

function closeblock(){
    for(works of workblocks){
        works.classList.remove("active-block");
    }
    document.getElementById("grid-block").classList.remove("disable");

}