function buildCart(){
    var cart = JSON.parse(localStorage.getItem("panier_reptilius"))
    var items = "";
    var totalPrice = 0;
    for(let i = 0; i < cart.length; i++){
        items += `
        <tr>
            <th><p>${cart[i]["Name"]}</p></th>
            <th><p>${cart[i]["unitPrice"]}</p></th>
            <th><p>${cart[i]["Quantity"]}</p></th>
            <th><p>${cart[i]["totalPrice"]}</p></th>
        </tr>`
        totalPrice += cart[i]["totalPrice"];
    }
    var table = document.createRange().createContextualFragment(`
    <table>
        <thead>
            <tr>
                <th><p>${cart.length} Élement</p></th>
                <th><p>Prix/u</p></th>
                <th><p>Qte</p></th>
                <th><p>Prix</p></th>
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

    for(let i = 0; i < cart.length; i++){
        totalPrice += cart[i]["totalPrice"];
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

buildCart()