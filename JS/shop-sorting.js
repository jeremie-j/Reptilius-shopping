var search = document.querySelector("input#text-search");
var sortType = document.querySelector("select#type-search");
var notFound = document.querySelector(".article>h3");
notFound.style.display ="none"

var productList = [];
var updated_productList;

search.oninput = updateCard;
sortType.addEventListener('change', updateCard);
    
function updateCard(){
    updated_productList = [];
    var name = search.value;
    var type = sortType.value;

    // Par nom
    for(let i = 0; i < productList.length; i++){
        if (productList[i].querySelector('.product-infos>h4').innerText.toLowerCase().match(name.toLowerCase()) != null || productList[i].querySelector('.product-infos>.name').innerText.toLowerCase().match(name.toLowerCase()) != null){
        updated_productList.push(productList[i])
    }}

    // Par type
    if(type != 'all'){
    for(let i = updated_productList.length-1; i >= 0; i--){
        if (updated_productList[i].querySelector(".category").innerHTML != type){
            updated_productList.splice(i,1)
        }
    }}

    //Affichage des produits
    for(let i = 0; i < productList.length; i++){
        var found = false;
        var j = 0;
        while(j<updated_productList.length && found == false){
            if(productList[i] == updated_productList[j]){
                productList[i].style.display ="block"
                found = true
            }else{
                productList[i].style.display ="none"
            }
            j++;
        }
        if(updated_productList.length==0){
            productList[i].style.display ="none"
            notFound.style.display ="block"
        }else{
            notFound.style.display ="none"
        }
    }
}
