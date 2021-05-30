var grid = document.querySelector(".article>.content");

async function buildShop(type) {
  var request = await fetch("../ASSET/PRODUCT/products.json");
  var data = await request.json();
    var productList = data["Products"];
    if (type == "reduced") {
      var reducedProductList = [];
      for (let i = 0; i < 3; i++) {
        reducedProductList.push(productList[i]);
      }
      cards(reducedProductList);
    } else if (type == "whole") {
      cards(productList);
    }
}

function cards(products) {
  for (let i = 0; i < products.length; i++) {
    var gender = "";
    for (let j = 0; j < products[i].Gender.length; j++) {
      gender += products[i].Gender[j][0] + " ";
    }
    if (products[i].Gender.length > 1) {
      gender = gender.split("");
      gender[1] = " & ";
      gender = gender.join("");
    }
    var card = document.createRange().createContextualFragment(`
        <div class="card">
          <figure>
              <img src="${products[i]["Image"]}" alt="Boa">
          </figure>
          <div class="product-infos">
              <h4>${products[i]["Name"]}</h4>
              <p class="name">${products[i]["Type"]}<br>${products[i]["Price"]} €</p>
              <p>Sexe : <strong>${gender}</strong><br>
              Age : <strong>${products[i]["Age"]}</strong></p>
              <p class="hidden category">${products[i]["Category"]}</p>
          </div>
        <a onclick="choose('${products[i]["Name"]}')"><h4>VOIR</h4></a>
    </div>
        `);
    grid.appendChild(card);
  }
  if (window.location.pathname.toLowerCase() == "/html/boutique-animale" || window.location.pathname.toLowerCase() == "/HTML/boutique-animale.html" ) {
  getCard()
  }
}

function getCard(){
  productList = document.querySelectorAll(".card")
}

if (on_index) {
  buildShop("reduced");
} else {
  buildShop("whole");
}
