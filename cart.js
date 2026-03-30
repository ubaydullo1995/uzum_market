let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  let container = document.getElementById("cartItems");
  let totalEl = document.getElementById("totalPrice");

  container.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {

   
    let price = Number(item.price.replace(/\s/g, ""));

    total += price * item.quantity;

    container.innerHTML += `
      <div style="border:1px solid #ccc; padding:10px; margin:10px; display:flex; align-items:center; gap:15px;">
        
        <img src="${item.img}" width="80"/>
        
        <div>
          <h3>${item.name}</h3>
          <p>${item.price}</p>
          <span>${item.quantity} ta</span>
        </div>

        <button class="deleteBtn" <i class="fa-solid fa-trash"></i> Delete
        </button>

      </div>
    `;
  });

  totalEl.textContent = "Jami: " + total + " so'm";


  document.querySelectorAll(".deleteBtn").forEach((btn, index) => {
    btn.onclick = () => {
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    };
  });
}

renderCart();