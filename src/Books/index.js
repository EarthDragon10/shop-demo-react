import React, { useState, useContext } from "react";
import { Container, Grid } from "@mui/material";
import booksMock from "../mocks/books";
import Book from "./Book";
import Filters from "./Filters";
import { AppContext } from "../App"

export default function Books() {

  const [state,] = useContext(AppContext);
  // const [books]  = state;
  console.log(state.books);

  // const [books, setBooks] = useState(booksMock);
  // const [selectedFilter, setSelectedFilter] = useState("All");

  // const selectFilter = (filter) => {
  //   setSelectedFilter(filter);
  //   setBooks(
  //     filter === "All"
  //       ? booksMock
  //       : booksMock.filter((book) => book.category === filter)
  //   );
  // };

  return (
    <Container fixed sx={{ mt: 4 }}>
      <Filters />
      <Grid container spacing={2}>
        {state.books.books?.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </Grid>
    </Container>
  );
}
