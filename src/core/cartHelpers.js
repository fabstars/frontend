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

export const emptyCartItems = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("cartItems");
  }
};

export const addItemToCart = (product, count, price, size = "") => {
  console.log(product);
  let cartItems = localStorage.getItem("cart");
  if (!cartItems) cartItems = [];
  else cartItems = JSON.parse(cartItems);
  let presentInCart = cartItems.find((item, index) => {
    if (item._id === product._id) {
      cartItems[index] = {
        _id: product._id,
        name: product.name,
        category: product.category,
        size: size,
        price: price,
        url: product.url,
        count: count,
      };
      return true;
    }
  });
  if (!presentInCart)
    cartItems.push({
      _id: product._id,
      name: product.name,
      category: product.category && product.category.name,
      size: size,
      price: price,
      url: product.url,
      count: count,
    });

  localStorage.setItem("cart", JSON.stringify(cartItems));
};

export const removeItemFromCart = (product) => {
  let cartItems = localStorage.getItem("cart");
  let cartMarginItems = localStorage.getItem("cartItems");

  if (!cartItems) cartItems = [];
  if (!cartMarginItems) cartMarginItems = [];

  cartItems = JSON.parse(cartItems);
  cartMarginItems = JSON.parse(cartMarginItems);

  cartMarginItems = cartMarginItems.filter((current_item) => {
    if (current_item.product._id !== product._id) {
      return true;
    }
  });

  cartItems = cartItems.filter((item) => {
    if (item._id !== product._id) {
      return true;
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(cartMarginItems));
  localStorage.setItem("cart", JSON.stringify(cartItems));
};
