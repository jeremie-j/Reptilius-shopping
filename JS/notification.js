function notification(){
    var cart = JSON.parse(localStorage.getItem('panier_reptilius'))
    if(cart.length > 0){
    document.querySelector("nav>ul>a").classList.add("notif");
    document.querySelector("nav>ul>li:last-child").classList.add("notif");
    document.querySelector("nav>ul>li:last-child p").innerHTML += ` [${cart.length}]`
}
}
notification()