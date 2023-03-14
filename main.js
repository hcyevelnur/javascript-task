
// document.getElementById('btn').addEventListener('click', () => {
//     console.log(document.getElementById('tapdigin').value)
// })

// document.getElementById('btn').addEventListener('click', () => {
//     console.log(document.getElementById('tapdigin-2').value)
// })


// document.getElementById('btn').addEventListener('click', () => {
    
// })

let products = [];
      let totalPrice = 0;
      const productList = document.getElementById("product-list");
      const addProductBtn = document.getElementById("add-product");
      const totalEl = document.getElementById("total-price");

      function renderProduct(product) {
        const productEl = document.createElement("div");
        productEl.classList.add("product-card");
        productEl.innerHTML = `
          <section class="bg-light">
    <div class="container pb-5">
        <div class="row">
            <div class="col-lg-5 mt-5">
                <div class="card mb-3">
                    <img class="card-img img-fluid" src="./images/img-5.png" alt="Card image cap" id="product-detail">
                </div>
                <div class="row">
                    <div class="col-1 align-self-center">
                        <a href="#multi-item-example" role="button" data-bs-slide="prev">
                            <i class="text-dark fas fa-chevron-left"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                    </div>
                    <div id="multi-item-example" class="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel">
                        <div class="carousel-inner product-links-wap" role="listbox">

                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-4">
                                        <a href="#">
                                            <img class="card-img img-fluid" src="./images/img-5.png" alt="Product Image 1">
                                        </a>
                                    </div>
                                    <div class="col-4">
                                        <a href="#">
                                            <img class="card-img img-fluid" src="./images/img-5.png" alt="Product Image 2">
                                        </a>
                                    </div>
                                    <div class="col-4">
                                        <a href="#">
                                            <img class="card-img img-fluid" src="./images/img-5.png" alt="Product Image 3">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1 align-self-center">
                        <a href="#multi-item-example" role="button" data-bs-slide="next">
                            <i class="text-dark fas fa-chevron-right"></i>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="card">
                    <div class="card-body">
                        <h1 class="h2">${product.name}</h1>
                        <p class="h3 py-2"><span class="total-price">${product.price}</span> AZN</p>
                        <p class="py-2">
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-warning"></i>
                            <i class="fa fa-star text-secondary"></i>
                            <span class="list-inline-item text-dark">Reytinq 4.8 | 36 Şərh</span>
                        </p>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <h6>Brend:</h6>
                            </li>
                            <li class="list-inline-item">
                                <p class="text-muted"><strong>Dağ</strong></p>
                            </li>
                        </ul>

                        <h6>Təsvir:</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.</p>
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <h6>Mövcud Rəng :</h6>
                            </li>
                            <li class="list-inline-item">
                                <p class="text-muted"><strong>Mavi / Blue</strong></p>
                            </li>
                        </ul>

                        <form action="" method="GET">
                            <input type="hidden" name="product-title" value="Activewear">
                            <div class="row">
                                <div class="col-auto">
                                    <ul class="list-inline pb-3">
                                        <li class="list-inline-item text-right">
                                            Ədəd
                                            <input type="hidden" name="product-quanity" id="product-quanity" value="1">
                                        </li>
                                        <li class="list-inline-item"><span class="btn btn-success decrement" id="btn-minus">-</span></li>
                                        <li class="list-inline-item"><span class="badge bg-secondary quantity-value" id="var-value">${product.quantity}</span></li>
                                        <li class="list-inline-item"><span class="btn btn-success increment" id="btn-plus">+</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row pb-3">
                                <div class="col d-grid">
                                    <button type="submit" class="btn btn-success btn-lg" name="submit" value="buy">Satın Al</button>
                                </div>
                                <div class="col d-grid">
                                    <button type="submit" class="btn btn-success btn-lg" name="submit" value="addtocard">Səbətə</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<button class="remove-product">Sil</button>
`;
const incrementBtn = productEl.querySelector(".increment");
const decrementBtn = productEl.querySelector(".decrement");
const removeBtn = productEl.querySelector(".remove-product");

incrementBtn.addEventListener("click", () => {
      product.quantity++;
      productEl.querySelector(".quantity-value").innerText =
        product.quantity;
      totalPrice += product.price;
      totalEl.innerText = totalPrice.toFixed(2);
    });

    decrementBtn.addEventListener("click", () => {
      if (product.quantity > 0) {
        product.quantity--;
        productEl.querySelector(".quantity-value").innerText =
          product.quantity;
        totalPrice -= product.price;
        totalEl.innerText = totalPrice.toFixed(2);
      }
    });

    removeBtn.addEventListener("click", () => {
      const index = products.findIndex((p) => p === product);
      if (index !== -1) {
        products.splice(index, 1);
        productEl.remove();
        totalPrice -= product.price * product.quantity;
        totalEl.innerText = totalPrice.toFixed(2);
      }
    });

    productList.appendChild(productEl);
  }

  addProductBtn.addEventListener("click", () => {
    const name = document.getElementById("product-name").value;
    const price = parseFloat(document.getElementById("product-price").value);

    if (!name || isNaN(price) || price <= 0) {
      alert("Zəhmət olmasa xanaları doldur!");
      return;
    }

    const product = {
      name,
      price,
      quantity: 0,
    };

    products.push(product);
    renderProduct(product);
  });



