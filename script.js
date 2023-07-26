var mainsection = document.getElementById("Clothing-acc-section");

// heading section
var FirstSection = document.createElement("div");
FirstSection.className="container";
var HeaderDiv= document.createElement("div");
HeaderDiv.className="header-div"
var headerTag = document.createElement("h2");
headerTag.innerHTML = "Clothing for Man and Women";
headerTag.className = "header-Tag";
HeaderDiv.appendChild(headerTag)
FirstSection.appendChild(HeaderDiv);




// clothing section
var clothingSection = document.createElement("div");
clothingSection.className = "cloths-id";

for (var i = 0; i < productList.length; i++) {
  if (productList[i].isAccessory === false) {
    var clothCard = document.createElement("div");
    clothCard.className = "cloth-card";
    var cardLink = document.createElement("a");
    cardLink.href = "#";
    clothCard.appendChild(cardLink);
    var imgDiv = document.createElement("div");
    imgDiv.className = "img-div";

    
  

    var modelImage = document.createElement("img");
    modelImage.className = "model-image";
    modelImage.src = productList[i].preview;
    // var detaildiv = document.createElement("div");
    // detaildiv.className = "details-div";

    

    var cardHeading = document.createElement("p");
    cardHeading.className = "card-heading";
    cardHeading.innerHTML = productList[i].name;
     imgDiv.appendChild(modelImage);
    imgDiv.appendChild(cardHeading);
    cardLink.appendChild(imgDiv);
    // cardLink.appendChild(detaildiv);
    clothingSection.appendChild(clothCard);
    var brand = document.createElement('p');
    brand.className="brand-text";
    brand.innerHTML=productList[i].brand;

    var price = document.createElement('p');
    price.className="price-text";
    price.innerHTML=`RS ${productList[i].price}`;
    imgDiv.appendChild(brand)

    imgDiv.appendChild(price)
  }
}

FirstSection.appendChild(clothingSection);
mainsection.appendChild(FirstSection);


var SecondSection = document.createElement("div");
SecondSection.className="container";
var HeaderDiv= document.createElement("div");
HeaderDiv.className="header-div"


var headerTag = document.createElement("h2");
headerTag.innerHTML = "Accessories for Men and Women";
headerTag.className = "header-Tag";
HeaderDiv.appendChild(headerTag)
SecondSection.appendChild(HeaderDiv);

// // Accessories section
var AccessoriesSection = document.createElement("div");
AccessoriesSection.className = "access-id";

for (var i = 0; i < productList.length; i++) {
  if (productList[i].isAccessory === true) {
    var clothCard = document.createElement("div");
    clothCard.className = "cloth-card";
    var cardLink = document.createElement("a");
    cardLink.href = "#";
    clothCard.appendChild(cardLink);

    var imgDiv = document.createElement("div");
    imgDiv.className = "img-div";


    var modelImage = document.createElement("img");
    modelImage.className = "model-image";
    modelImage.src = productList[i].preview;
    // var detaildiv = document.createElement("div");
    // detaildiv.className = "details-div";

    var cardHeading = document.createElement("p");
    cardHeading.className = "card-heading";
    cardHeading.innerHTML = productList[i].name;

    imgDiv.appendChild(modelImage);
    imgDiv.appendChild(cardHeading);

    cardLink.appendChild(imgDiv);
    AccessoriesSection.appendChild(clothCard);

    var brand = document.createElement('p');
    brand.className="brand-text";
    brand.innerHTML=productList[i].brand;

    var price = document.createElement('p');
    price.className="price-text";
    price.innerHTML=`RS ${productList[i].price}`;
    imgDiv.appendChild(brand);
    imgDiv.appendChild(price);



    
  }
}
SecondSection.appendChild(AccessoriesSection);
mainsection.appendChild(SecondSection);

