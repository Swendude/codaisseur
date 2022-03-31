const initialState = {
  token: null,
  me: null,
  pizzas: [
    { name: "margeritha", ingredients: ["cheese", "tomato"] },
    { name: "salami", ingredients: ["cheese", "tomato", "salami"] },
    { name: "vegetarian", ingredients: ["cheese", "tomato", "pineapple"] },
  ],
};

const selectPizzas = (name) => (reduxState) =>
  reduxState.auth.pizzas.find((pizza) => pizza.name === name);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH/tokenReceived": {
      return { ...state, token: action.payload.token };
    }
    case "AUTH/meReceived": {
      return { ...state, me: action.payload.me };
    }
    case "AUTH/clearToken": {
      return { ...state, token: null };
    }
    case "AUTH/clearSalami": {
      return {
        ...state,
        pizzas: state.pizzas.filter((pizza) => pizza.name !== "salami"),
      };
    }
    case "AUTH/addPizza": {
      return { ...state, pizzas: [...state.pizzas, action.payload] };
    }
    // case "AUTH/addIngredient": {
    //     // Find the pizza that you want to modify and save it
    //     // Filter out that pizza from the list
    //     // Modify the pizza
    //     // Put the pizza back
    //     return {...state, pizzas: }
    // }
    default: {
      return state;
    }
  }
}
