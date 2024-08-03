function redirectToMP_Retrieval() {
    window.location.href = "MP_Retrieval.html";
}

function resetCurrentButton(currentButton) {
    currentButton.style.backgroundColor = "rgba(0, 0, 0, 0.912)";
    
}

currentButton = document.getElementById("Milk");
var productDiv = document.getElementById("productsDiv");
productDiv.style.overflowY = "scroll";
productDiv.style.height = "600px";
var currentProductsList = [];
var currentProductsListFood = [];
json_file = "/json_files/products_from_protein_list.json";
var productDivPrice = document.getElementById("productsDivPrice");
document.getElementById("Milk").setClassName = "ingredientButton:active";
productsDivAccessories = document.getElementById("productsDivAccessories");
updateDivAccessories(productsDivAccessories, true);
currentAccessoriesButton = document.getElementById("HardAccessoriesButton");

function hardAccessoriesClick() {
    productsDivAccessories = document.getElementById("productsDivAccessories");
    updateDivAccessories(productsDivAccessories, false);
    currentAccessoriesButton.style.backgroundColor = "rgba(0, 0, 0, 0.912)";
    currentAccessoriesButton = document.getElementById("HardAccessoriesButton");
    currentAccessoriesButton.style.backgroundColor = "rgba(168, 13, 13, 0.914)";
}

function softAccessoriesClick() {
    productsDivAccessories = document.getElementById("productsDivAccessories");
    updateDivAccessories(productsDivAccessories, true);
    currentAccessoriesButton.style.backgroundColor = "rgba(0, 0, 0, 0.912)";
    currentAccessoriesButton = document.getElementById("SoftAccessoriesButton");
    currentAccessoriesButton.style.backgroundColor = "rgba(168, 13, 13, 0.914)";

}

function updateDivAccessories(productsDivAccessories, softAccessories) {
    productsDivAccessories.innerHTML = "";
    var accessoryType = "Hard Accessories";
    if (softAccessories) {
        accessoryType = "Clothing - Soft Accessories";
    }
    for (var i = 0; i < currentProductsList.length; i++) {
        if (currentProductsList[i].description == accessoryType) {
            var product = document.createElement("div");
            var productImage = document.createElement("img");
            var productName = document.createElement("h4");
            var productPrice = document.createElement("h4");
            product.className = "product";
            productImage.src = currentProductsList[i].picture;
            productImage.className = "productImage";
            if (currentProductsList[i].product.length > 35) {
                productName.innerText = currentProductsList[i].product.substring(0, 35) + "...";
            } else {
                productName.innerText = currentProductsList[i].product;
            }
            productPrice.innerText = "Price: " + currentProductsList[i].price;
            productPrice.className = "productPrice";
            product.appendChild(productImage);
            product.appendChild(productName);
            product.appendChild(productPrice);
            productsDivAccessories.appendChild(product);
        }
    }
}


fetch('/json_files/products_from_protein_list.json') // Replace with your file path
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    currentProductsList = data;
    currentProductsListFood = data;
  })
  .catch(error => console.error(error)); // Handle errors

fetch('/json_files/products_from_acc_list.json') // Replace with the path to your second JSON file
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        currentProductsList = [...data, ...currentProductsList];
        filterProductsByPrice();
    })
    .catch(error => console.error(error)); // Handle errors

function findProductsWithIngredient(ingredient) {
    var listOfProductsWithIngredient = [];
    for (var i = 0; i < currentProductsListFood.length; i++) {
        for (var j = 0; j < currentProductsListFood[i].ingredients.length; j++) {
            if (currentProductsListFood[i].ingredients[j].search(ingredient) != -1) {
                listOfProductsWithIngredient.push(currentProductsListFood[i]);
                break;
            }
        }
    }
    return listOfProductsWithIngredient;
}

function returnProductArray(listOfProductsWithIngredient) {
    var productDiv = document.getElementById("productsDiv");
    for (var i = 0; i < listOfProductsWithIngredient.length; i++) {
        var product = document.createElement("div");
        var productImage = document.createElement("img");
        var productName = document.createElement("h4");
        var productPrice = document.createElement("h4");
        product.className = "product";
        productImage.src = listOfProductsWithIngredient[i].picture;
        productImage.className = "productImage";
        productName.innerText = listOfProductsWithIngredient[i].product;
        if (listOfProductsWithIngredient[i].product.length > 35) {
            productName.innerText = listOfProductsWithIngredient[i].product.substring(0, 35) + "...";
        } else {
            productName.innerText = listOfProductsWithIngredient[i].product;
        }
        productPrice.innerText = "Price: " + listOfProductsWithIngredient[i].price; 
        productPrice.className = "productPrice";
        product.appendChild(productImage);
        product.appendChild(productName);
        product.appendChild(productPrice);
        productDiv.appendChild(product);
    }


}

function milkClick() {
    productDiv.innerHTML = "";
    resetCurrentButton(currentButton);
    currentButton = document.getElementById("Milk");
    currentButton.style.backgroundColor = "rgba(168, 13, 13, 0.914)";
    returnProductArray(findProductsWithIngredient("milk"));
}

function lecithinClick() {
    productDiv.innerHTML = "";
    resetCurrentButton(currentButton);
    currentButton = document.getElementById("Lecithin");
    currentButton.style.backgroundColor = "rgba(168, 13, 13, 0.914)";
    returnProductArray(findProductsWithIngredient("lecithin"));
}

function soyClick() {
    productDiv.innerHTML = "";
    resetCurrentButton(currentButton);
    currentButton = document.getElementById("Soy");
    currentButton.style.backgroundColor = "rgba(168, 13, 13, 0.914)";
    returnProductArray(findProductsWithIngredient("soy"));
}

function acidClick() {
    productDiv.innerHTML = "";
    resetCurrentButton(currentButton);
    currentButton = document.getElementById("Acid");
    currentButton.style.backgroundColor = "rgba(168, 13, 13, 0.914)";
    returnProductArray(findProductsWithIngredient("acid"));
}

function sunflowerClick() {
    productDiv.innerHTML = "";
    resetCurrentButton(currentButton);
    currentButton = document.getElementById("Sunflower");
    currentButton.style.backgroundColor = "rgba(168, 13, 13, 0.914)";
    returnProductArray(findProductsWithIngredient("sunflower"));
}

function vitaminClick() {
    productDiv.innerHTML = "";
    resetCurrentButton(currentButton);
    currentButton = document.getElementById("Vitamin");
    currentButton.style.backgroundColor = "rgba(168, 13, 13, 0.914)";
    returnProductArray(findProductsWithIngredient("vitamin"));
}

function oilClick() {
    productDiv.innerHTML = "";
    resetCurrentButton(currentButton);
    currentButton = document.getElementById("Oil");
    currentButton.style.backgroundColor = "rgba(168, 13, 13, 0.914)";
    returnProductArray(findProductsWithIngredient("oil"));
}



function filterProductsByPrice() {
    var minVal = document.getElementById("slider-1").value;
    var maxVal = document.getElementById("slider-2").value;
    productDivPrice.innerHTML = "";
    productDivPrice.style.setClassName = "productDiv";
    productDivPrice.style.overflowY = "scroll";

    for (var i = 0; i < currentProductsList.length; i++) {
        if (currentProductsList[i].price >= minVal && currentProductsList[i].price <= maxVal) {
            var product = document.createElement("div");
            var productImage = document.createElement("img");
            var productName = document.createElement("h4");
            var productPrice = document.createElement("h4");
            product.className = "product";
            productImage.src = currentProductsList[i].picture;
            productImage.className = "productImage";
            if (currentProductsList[i].product.length > 35) {
                productName.innerText = currentProductsList[i].product.substring(0, 35) + "...";
            } else {
                productName.innerText = currentProductsList[i].product;
            }
            productName.className = "productName";
            productPrice.innerText = "Price: " + currentProductsList[i].price;
            productPrice.className = "productPrice";
            product.appendChild(productImage);
            product.appendChild(productName);
            product.appendChild(productPrice);
            productDivPrice.appendChild(product);
        }
    }
}



