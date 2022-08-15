const AmazonState = {
  nOfProducts: 1000,
  userLoggedIn: false,
  products: [
    { name: "pen", price: 50 },
    { name: "wallet", price: 50 }
  ]
};

const AmazonManager = (action) => {
  if (action === "addProduct") {
    AmazonState.nOfProducts += 1;
  }
  if (action === "removeProduct") {
    if (AmazonState.nOfProducts > -1) {
      AmazonState.nOfProducts -= 1;
    }
  }
  if (action === "userLoggedIn") {
    AmazonState.userLoggedIn = true;
  }
};

const addComponent = () => {
  return "<button onClick={() => AmazonManger('addProduct')}>";
  ("<button onClick={() => AmazonManger('removeProduct')}>");
};
