    const itemNameInput = document.getElementById("itemName");
    const itemPriceInput = document.getElementById("itemPrice");
    const itemQuantityInput = document.getElementById("itemQuantity");
    const addToCartBtn = document.getElementById("addToCartBtn");
    const cartItemsDiv = document.getElementById("cartItems");
    const totalPriceDiv = document.getElementById("totalPrice");

    let cart = [];

    const updateTotal = ()=>{
      const total = cart.reduce((sum, item) => sum+ item.price * item.quantity,0);
      totalPriceDiv.textContent = `Total: ${total.toFixed(2)}`;
    };

    const renderCart = () =>{
      cartItemsDiv.innerHTML = '';
      cart.forEach((item, index) =>{
      const cartItemDiv = document.createElement('div');
      cartItemDiv.className = 'cart-item';

      const details = document.createElement('span');
      details.textContent = `${item.name} - ${item.price} * ${item.quantity}`;
      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.value = item.quantity;
      quantityInput.min = 1;
      quantityInput.style.width = '60px';
      quantityInput.addEventListener('change', (e)=>{
        const newQuantity = parseInt(e.target.value);
        if(newQuantity > 0){
          cart[index].quantity = newQuantity;
          updateTotal();
        }else{
          e.target.value = item.quantity;
        }
      });
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.style.backgroundColor = 'red';
      removeBtn.style.color = 'white';
      removeBtn.style.borderRadius = '4px';
      removeBtn.style.border = 'none';
      removeBtn.style.cursor = 'pointer';
      removeBtn.addEventListener('click', ()=>{
        cart.splice(index, 1);
        updateTotal();
        renderCart();
      });
      cartItemsDiv.appendChild(details);
      cartItemsDiv.appendChild(quantityInput);
      cartItemsDiv.appendChild(cartItemDiv);
      cartItemsDiv.appendChild(removeBtn);
    });

    updateTotal();
  };

  const addToCart = () =>{
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value.trim());
    const itemQuantity = parseInt(itemQuantityInput.value.trim());

    if(!itemName || isNaN(itemPrice) || isNaN(itemQuantity) || itemPrice<= 0 || itemQuantity<=0){
      alert("Please enter a valid item detail and price");
      return;
    }

    const newItem = {name: itemName, price: itemPrice, quantity: itemQuantity};
    cart.push(newItem);

    renderCart();
    itemNameInput.value = '';
    itemPriceInput.value = '';
    itemQuantityInput.value = '';
  };
  addToCartBtn.addEventListener('click', addToCart);