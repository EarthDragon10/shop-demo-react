import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import books from "../mocks/books";
import Book from "./Book";
import Filters from "./Filters";
import {AppContext} from "../App"

export default function Books() {


  return (
    <AppContext.Provider>
      <Container fixed sx={{ mt: 4 }}>
        <Filters />
        <Grid container spacing={2}>
          {books?.map((book) => (
            <Book key={book.id} {...book} />
          ))}
        </Grid>
      </Container>
    </AppContext.Provider>
    
  );
}
