
let cart = JSON.parse(localStorage.getItem("cart")) || [];


function updateCartCount() {
  document.getElementById("cartCount").textContent = cart.length;
}


function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}


updateCartCount();

document.querySelectorAll(".card").forEach((card) => {
  const btn = card.querySelector(".card_btn");
  const wrapper = card.querySelector(".wrapperBtn");
  const minus = card.querySelector(".minusBtn");
  const plus = card.querySelector(".plusBtn");
  const countEl = card.querySelector(".count");

  const name = card.querySelector(".card_text").textContent;
  const price = card.querySelector(".card_sum").textContent;
  const img = card.querySelector("img").src;

  let count = 1;

  
  btn.onclick = () => {
    btn.style.display = "none";
    wrapper.style.display = "block";

    let item = cart.find((i) => i.name === name);

    if (item) {
      item.quantity++;
      count = item.quantity;
    } else {
      cart.push({
        name,
        price,
        img,
        quantity: count,
      });
    }

    countEl.textContent = count;

    updateCartCount();
    saveCart();
  };

 
  plus.onclick = () => {
    count++;
    countEl.textContent = count;

    let item = cart.find((i) => i.name === name);
    if (item) item.quantity = count;

    saveCart(); 
  };


  minus.onclick = () => {
    if (count > 1) {
      count--;
      countEl.textContent = count;

      let item = cart.find((i) => i.name === name);
      if (item) item.quantity = count;
    } else {
      btn.style.display = "block";
      wrapper.style.display = "none";

      cart = cart.filter((i) => i.name !== name);

      count = 1;
      countEl.textContent = count;
    }

    updateCartCount();
    saveCart(); 
  };
});
