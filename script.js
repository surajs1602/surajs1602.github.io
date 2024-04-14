var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-contents");
var portfolioitems = document.getElementsByClassName("portfolio-item-wrapper");

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

function toggleBlock(block){
    console.log(block);
    block.classList.toggle('expanded');
}