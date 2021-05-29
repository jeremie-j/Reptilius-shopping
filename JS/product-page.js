var infos_container = document.querySelector("#product>.content-margins")

function choose(name){
    sessionStorage.setItem('product', name);
    window.location = '../HTML/product.html';
}

function find(name) {
  var request = new XMLHttpRequest();
  request.open("GET", "../ASSET/PRODUCT/products.json");
  request.responseType = "json";
  request.send();
  request.onload = function () {
      var data = request.response["Products"];
    for (let i = 0; i < data.length; i++) {
      if (
        data[i]["Name"] ==
        name
      ) {
        var product = data[i];
        buildPage(product);
      }
    }
  };
}

function buildPage(product){
    if(product["Gender"].length == 1 && product["Gender"]=="Femelle"){
        product["Gender"].push("")
    }else if(product["Gender"].length == 1 && product["Gender"]=="Mâle"){
        product["Gender"].unshift("")
    }
    var infos = document.createRange().createContextualFragment(`
    <h2>${product["Name"]}</h2>
    <div class="infos-container">
    <img src="${product["Image"]}" alt="">
        <div class="infos">
            <p class="description">${product["Description"]}</p>
            <p class="price">${product["Price"]} €</p>
            <p class="gender"><span class="active" onclick="setgender('F')">${product["Gender"][0]}</span> <span onclick="setgender('M')">${product["Gender"][1]}</span></p>
            <p class="qte">Quantité<input type="number" min="1" max="20" value="1"></p>
        </div>
    </div>
    <a>
    <h3 onclick="add()">Ajouter au panier</h3><p>Votre article a bien été ajouté au panier !</p>
    </a>
        `);
    infos_container.appendChild(infos)
}

function setgender(type){
  var gender = type
  if (gender == "F"){
  document.querySelectorAll("p.gender>span")[0].classList.add("active")
  document.querySelectorAll("p.gender>span")[1].classList.remove("active")
}else{
  document.querySelectorAll("p.gender>span")[0].classList.remove("active")
  document.querySelectorAll("p.gender>span")[1].classList.add("active")
}
}

find(sessionStorage.getItem('product'))