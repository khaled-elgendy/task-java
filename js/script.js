


console.log("product-list")


    productList = document.getElementById("product-list"); 
productNameSpan = document.getElementById("product-name");
productPriceSpan = document.getElementById("product-price");
buyButton = document.getElementById("buy-button");
productImage = document.createElement("img"); 

productList.addEventListener("click", function (event) {
  const selectedProduct = event.target;
  const productName = selectedProduct.dataset.name;
  const productPrice = selectedProduct.dataset.price;
  const productImageSrc = selectedProduct.querySelector('img').src ;
  productImage.style.width = "200px";
  productImage.style.height = "200px";

  productNameSpan.textContent+= productName;
  productPriceSpan.textContent = productPrice;
  productImage.src = productImageSrc;

  const productDetails = document.getElementById("product-details");
  productDetails.appendChild(productImage);

  buyButton.style.display ="block";
});
