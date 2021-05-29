async function find(name) {
  var request = await fetch("../ASSET/PRODUCT/products.json");
  var data = await request.json();
    for (let i = 0; i < data["Products"].length; i++) {
      if (data["Products"][i]["Name"] == name) {
        var product = data["Products"][i];
        return product
      }
    }
  }

function choose(name) {
    sessionStorage.setItem("product", name);
    if ( window.location.pathname == "/index.html" || window.location.pathname == "/") {
      // Si on est sur la page d'accueuil
      window.location = "./HTML/product.html";
    } else if (window.location.pathname == "/html/boutique-animale" || window.location.pathname == "/HTML/boutique-animale.html") {
      // Si on est sur la boutique
      window.location = "../HTML/product.html";
    }
    console.log("rien");
  }
  
async function buildPage(product) {
  product = await find(product)
  if (product["Gender"].length == 1 && product["Gender"] == "Femelle") {
    var gender = `<span></span><span class="active" onclick="setgender('F')">${product["Gender"][0]}</span>`
  } else if (product["Gender"].length == 1 && product["Gender"] == "Mâle") {
    var gender = `<span></span><span class="active" onclick="setgender('M')">${product["Gender"][0]}</span>`
  }else{
    var gender = `<span class="active" onclick="setgender('F')">${product["Gender"][0]}</span> <span onclick="setgender('M')">${product["Gender"][1]}</span>`
  }
  var infos = document.createRange().createContextualFragment(`
    <h2>${product["Name"]}</h2>
    <div class="infos-container">
    <img src="${product["Image"]}" alt="">
        <div class="infos">
            <p class="description">${product["Description"]}</p>
            <p class="price">${product["Price"]} €</p>
            <p class="gender">${gender}</p>
            <p class="qte">Quantité<input type="number" min="1" max="20" value="1"></p>
        </div>
    </div>
    <a>
    <h3 onclick="add()">Ajouter au panier</h3><p>Votre article a bien été ajouté au panier !</p>
    </a>
        `);
  infos_container.appendChild(infos);
}

function setgender(type) {
  var gender = type;
  if (gender == "F") {
    document.querySelectorAll("p.gender>span")[0].classList.add("active");
    document.querySelectorAll("p.gender>span")[1].classList.remove("active");
  } else {
    document.querySelectorAll("p.gender>span")[0].classList.remove("active");
    document.querySelectorAll("p.gender>span")[1].classList.add("active");
  }
}

if (window.location.pathname == "/HTML/product.html") {
  var infos_container = document.querySelector("#product>.content-margins");
  buildPage(sessionStorage.getItem('product'))
}