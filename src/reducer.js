export const initialState = {
  basket: [],
  user: null,
};

//Selector
export function getBasketTotal(basket) {
  return basket?.reduce((amount, item) => item.price + amount, 0);
}
export function getBasketItems(basket) {
  return basket?.reduce((name, item) => (item.name = name), 0);
}
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
