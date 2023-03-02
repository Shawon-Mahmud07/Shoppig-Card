function ProductDetailsTable(
  countNo,
  productName,
  ProductPrice,
  ProductQuantity,
  ProductTotal
) {
  const tableBody = document.getElementById("table-body");
  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `
              <td>${countNo}</td>
              <td>${productName}</td>
              <td >$${ProductPrice}</td>
              <td class="text-center">${ProductQuantity}</td>
              <td >$<span class="product-price">${ProductTotal}</span></td>
`;
  tableBody.appendChild(tableRow);
}

function TableFooterTotal() {
  const productPrice = document.getElementsByClassName("product-price");
  let addTotal = 0;
  for (const price of productPrice) {
    const addTotalPrice = parseInt(price.innerText);
    addTotal = addTotalPrice + addTotal;
  }
  const footerSection = document.getElementById("total-footer");
  footerSection.innerText = addTotal;
}

function ProductDetails(id) {
  return (innerText = document.getElementById(id).innerText);
}
// Disable add cart button
function DisabledCartButton(id) {
  return document.getElementById(id).setAttribute("Disabled", true);
}

let countNo = 0;
// first Cart
document.getElementById("first-cart").addEventListener("click", function () {
  countNo++;
  const productName = ProductDetails("product-title");
  const productPrice = ProductDetails("product-price");
  const productQuantity = ProductDetails("product-quantity");
  const total = parseInt(productPrice) * parseInt(productQuantity);
  ProductDetailsTable(
    countNo,
    productName,
    productPrice,
    productQuantity,
    total
  );
  TableFooterTotal();
  DisabledCartButton("first-cart");
  document.getElementById("total-product").innerHTML = countNo;
});
// Second Cart
document.getElementById("second-cart").addEventListener("click", function () {
  countNo++;
  const productName = ProductDetails("second-product-title");
  const productPrice = ProductDetails("second-product-price");
  const productQuantity = ProductDetails("second-product-quantity");
  const total = parseInt(productPrice) * parseInt(productQuantity);
  ProductDetailsTable(
    countNo,
    productName,
    productPrice,
    productQuantity,
    total
  );
  TableFooterTotal();
  DisabledCartButton("second-cart");
  document.getElementById("total-product").innerHTML = countNo;
});
// Third Cart
document.getElementById("third-cart").addEventListener("click", function () {
  countNo++;
  const productName = ProductDetails("third-product-title");
  const productPrice = ProductDetails("third-product-price");
  const productQuantity = ProductDetails("third-product-quantity");
  const total = parseInt(productPrice) * parseInt(productQuantity);
  ProductDetailsTable(
    countNo,
    productName,
    productPrice,
    productQuantity,
    total
  );
  TableFooterTotal();
  DisabledCartButton("third-cart");
  document.getElementById("total-product").innerHTML = countNo;
});
// Fourth Cart
document.getElementById("fourth-cart").addEventListener("click", function () {
  countNo++;
  const productName = ProductDetails("fourth-product-title");
  const productPrice = ProductDetails("fourth-product-price");
  const productQuantity = ProductDetails("fourth-product-quantity");
  const total = parseInt(productPrice) * parseInt(productQuantity);
  ProductDetailsTable(
    countNo,
    productName,
    productPrice,
    productQuantity,
    total
  );
  TableFooterTotal();
  DisabledCartButton("fourth-cart");
  document.getElementById("total-product").innerHTML = countNo;
});
