export const addItem = (item = [], count = 0, next = (f) => f) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    cart.push({
      ...item,
      count: 1,
    });

    // remove duplicates
    // build an Array from new Set and turn it back into array using Array.from
    // so that later we can re-map it
    // new set will only allow unique values in it
    // so pass the ids of each object/product
    // If the loop tries to add the same value again, it'll get ignored
    // ...with the array of ids we got on when first map() was used
    // run map() on it again and return the actual product from the cart

    cart = Array.from(new Set(cart.map((p) => p._id))).map((id) => {
      return cart.find((p) => p._id === id);
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
  }
};

export const itemTotal = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      return JSON.parse(localStorage.getItem("cart")).length;
    }
  }
  return 0;
};
export const cartTotal = () => {
  let total = 0;

  if (localStorage.getItem("cart")) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (const item of cart) {
      total = total + Number(item.price) * Number(item.count);
    }
  }

  return total;
};
export const getCartStatus = () => {
  if (localStorage.getItem("cartStatus")) return true;

  return false;
};
export const setCartStatusActive = () => {
  localStorage.setItem("cartStatus", "true");
};
export const setCartStatusInActive = () => {
  localStorage.removeItem("cartStatus");
};
export const getCartItems = () => {
  const cartItems = localStorage.getItem("cart");
  if (!cartItems) return [];
  return JSON.parse(cartItems);
};

export const updateItem = (productId, count) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    cart.map((product, i) => {
      if (product._id === productId) {
        cart[i].count = count;
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const removeItem = (productId) => {
  let cart = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    cart.map((product, i) => {
      if (product._id === productId) {
        cart.splice(i, 1);
      }
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return cart;
};

export const emptyCart = (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("cart");
    next();
  }
};

export const addItemToCart = (product, count) => {
  let cartItems = localStorage.getItem("cart");
  if (!cartItems) cartItems = [];
  else cartItems = JSON.parse(cartItems);
  let presentInCart = cartItems.find((item, index) => {
    if (item._id === product._id) {
      cartItems[index] = {
        _id: product._id,
        name: product.name,
        price: product.price,
        count: count,
      };
      return true;
    }
  });
  if (!presentInCart)
    cartItems.push({
      _id: product._id,
      name: product.name,
      price: product.price,
      count: count,
    });

  localStorage.setItem("cart", JSON.stringify(cartItems));
  setCartStatusActive();
};

export const removeItemFromCart = (product) => {
  let cartItems = localStorage.getItem("cart");
  if (!cartItems) cartItems = [];
  cartItems = JSON.parse(cartItems);
  cartItems = cartItems.filter((item) => {
    if (item._id !== product._id) {
      return true;
    }
  });

  localStorage.setItem("cart", JSON.stringify(cartItems));
};
