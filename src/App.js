import { useReducer, createContext } from "react";
import Basket from "./Basket";
import Books from "./Books";
import Navigation from "./Navigation";
import books from "./mocks/books"

const INITIAL_STATE = {
  basket: {
    items: [],
    totalPrice: 0,
    quantity: 0,
    opened: false,
  },
  filters: {
    filteredBooks: [],
    word: "",
    category: "All",
  },
  books: {
    books,
    categories: ["All", "Design", "Mobile", "Ux", "DevOps", "Essentials"],
  },
};

function reducer(state, action) {

  switch(action.type) {

    case "TOGGLE":
      return { ...state, basket: {
        ...state.basket,
        opened: !state.basket.opened
      }};
    
    case "FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          filteredBooks: state.filters.categories === "All"
          ? state.books.books
          : state.books.books.filter((book) => book.category === state.filters.categories),
          
        }
      }
    
    default:
      return state;

  }

}

export const AppContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  // console.log("state", state);
  
  return (
    <div className='App'>
      <AppContext.Provider value={[state, dispatch]}>
        <Navigation />
        <Books />
        <Basket />
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
