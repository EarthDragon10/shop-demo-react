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
    books: books,
    categories: ["All", "Design", "Mobile", "Ux", "DevOps", "Essentials"],
  },

 };

 // const selectFilter = (filter) => {
  //   setSelectedFilter(filter);
  //   setBooks(
  //     filter === "All"
  //       ? booksMock
  //       : booksMock.filter((book) => book.category === filter)
  //   );
  // };

function reducer(state, action) {

  switch(action.type) {

    case "TOGGLE":
      return { 
        ...state, 
        basket: { ...state.basket, opened: !state.basket.opened}
      };
    
    case "FILTER":
      return {
        ...state,
        filters: {
          filteredBooks: this.books.categories === "All"
            ? books 
            : books.filter((book) => book.category === this.state.books.categories)
        }
      }
    default:
      return state;

  }

} 

export const AppContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  
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
