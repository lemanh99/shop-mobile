import { productConstants } from "../actions/constants";

const initState = {
  listProduct: [],
  loading: false,
  error: "",
  messages: "",
};

export default (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {

  }
  return state;
};
