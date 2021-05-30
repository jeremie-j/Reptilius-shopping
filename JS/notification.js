function notification(){
    var cart = JSON.parse(localStorage.getItem('panier_reptilius'))
    if(cart.length > 0){
    document.querySelector("nav>ul>a").classList.add("notif");
    document.querySelector("nav>ul>li:last-child").classList.add("notif");
    document.querySelector("nav>ul>li:last-child p").innerHTML += ` [${cart.length}]`
}
}
notification()

function openMenu(){
    var Menu = document.querySelector("#Menu")
    if(Menu.style.top == "0px"){
        closeMenu()
    }else{
        Menu.style.top = 0;
        var Button = document.querySelectorAll("#home-button line:not(:first-child)")
        Button.forEach(element => element.style.display = "none")
    }
}

function closeMenu(){
    var Menu = document.querySelector("#Menu")
    var Button = document.querySelectorAll("#home-button line:not(:first-child)")
    Button.forEach(element => element.style.display = "block")
    Menu.style.top = '-100%';
}
document.querySelector("#Menu").addEventListener("click", closeMenu);