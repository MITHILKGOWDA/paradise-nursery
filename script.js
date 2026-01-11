let cart = JSON.parse(localStorage.getItem("cart")) || {};

function addToCart(name, price) {
  cart[name] ? cart[name].qty++ : cart[name] = { price, qty: 1 };
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  let count = 0;
  for (let item in cart) count += cart[item].qty;
  let el = document.getElementById("cart-count");
  if (el) el.innerText = count;
}

function renderCart() {
  let container = document.getElementById("cart-items");
  let totalItems = 0, totalCost = 0;
  container.innerHTML = "";

  for (let item in cart) {
    totalItems += cart[item].qty;
    totalCost += cart[item].price * cart[item].qty;

    container.innerHTML += `
      <div class="cart-item">
        <p>${item}</p>
        <button onclick="changeQty('${item}',-1)">-</button>
        <span>${cart[item].qty}</span>
        <button onclick="changeQty('${item}',1)">+</button>
        <button onclick="removeItem('${item}')">Delete</button>
      </div>`;
  }

  document.getElementById("total-items").innerText = totalItems;
  document.getElementById("total-cost").innerText = totalCost;
  updateCartCount();
}

function changeQty(item, delta) {
  cart[item].qty += delta;
  if (cart[item].qty <= 0) delete cart[item];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeItem(item) {
  delete cart[item];
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}
