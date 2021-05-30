async function add(){
    infos = await find(sessionStorage.getItem('product'))
    console.log(infos)
    let Name = infos["Name"].toUpperCase()
    let unitPrice = infos["Price"]
    let Quantity = document.querySelector("#product .qte>input").value
    let totalPrice = unitPrice * Quantity
    console.log([Name,unitPrice,Quantity,totalPrice])
    var cart = JSON.parse(localStorage.getItem("panier_reptilius"))
    cart.push({"Name":Name,
               "unitPrice":unitPrice,
               "Quantity":Quantity,
               "totalPrice":totalPrice})
    localStorage.setItem("panier_reptilius",JSON.stringify(cart))
}

function initCart(){
    if(localStorage.getItem("panier_reptilius") == null){
        localStorage.setItem("panier_reptilius",JSON.stringify([]))
    }
}

initCart()