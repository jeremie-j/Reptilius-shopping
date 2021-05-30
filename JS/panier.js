function buildCart(){
    var cart = JSON.parse(localStorage.getItem("panier_reptilius"))
    console.log(cart)
    var items = "";
    var totalPrice = 0;
    for(let i = 0; i < cart.length; i++){
        items += `
        <tr>
            <th><p>${cart[i]["Name"]}</p></th>
            <th><p>${cart[i]["unitPrice"]}</p></th>
            <th><p>${cart[i]["Quantity"]}</p></th>
            <th><p>${cart[i]["totalPrice"]}</p></th>
            <th><p class="delButton" onclick="del(${i})">&#x02014;</p></th>
        </tr>`
        totalPrice += cart[i]["totalPrice"];
    }
    if(cart.length>1){
        var nbItems = cart.length + " Élements"
    }else{
        var nbItems = cart.length + " Élement"
    }
    var table = document.createRange().createContextualFragment(`
    <table>
        <thead>
            <tr>
                <th><p>${nbItems}</p></th>
                <th><p>Prix/u</p></th>
                <th><p>Qte</p></th>
                <th><p>Prix</p></th>
                <th><p>Supprimer</p></th>
            </tr>
        </thead>
        <tbody>
            ${items}
            <tr>
                <th colspan="3"><p>PRIX TOTAL</p></th>
                <th><p>${totalPrice} €</p></th>
            </tr>
        </tbody>
    </table>`)
    document.querySelector(".panier").appendChild(table)
}

function dispOrder(){
    var email = document.querySelector("form.order input[name='email']").value
    var adress = document.querySelector("form.order input[name='adress']").value
    var town = document.querySelector("form.order input[name='town']").value
    var postalCode = document.querySelector("form.order input[name='postalCode']").value
    var creditCard = document.querySelector("form.order input[name='creditCard']").value
    var cryptogram = document.querySelector("form.order input[name='cryptogram']").value
    var expirationDate = document.querySelector("form.order input[name='expirationDate']").value

    var items = JSON.parse(localStorage.getItem("panier_reptilius"))
    var totalPrice = 0;

    for(let i = 0; i < items.length; i++){
        totalPrice += items[i]["totalPrice"];
    }

    var order = {
        "email":email,
        "adress":adress,
        "town":town,
        "postalCode":postalCode,
        "creditCard":creditCard,
        "cryptogram":cryptogram,
        "expirationDate":expirationDate,
        "items":items,
        "totalPrice":totalPrice
        }
    var textarea = document.querySelector(".result textarea")
    textarea.innerHTML = JSON.stringify(order,undefined,4);
    console.log(order)
    // localStorage.setItem("panier_reptilius",JSON.stringify([]))
    document.querySelector(".result").style.display="block"
    return false
}

function del(i){
    var cart = JSON.parse(localStorage.getItem("panier_reptilius"))
    cart.splice(i,1)
    localStorage.setItem("panier_reptilius",JSON.stringify(cart))
    document.querySelector("table").remove()
    buildCart()
}
buildCart()