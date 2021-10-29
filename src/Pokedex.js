import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import ActionCard from "./ActionCard.js";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemonDetails: [],
      offset: 0,
      loadNumber: 24,
    };
    this.loadMorePokemons = this.loadMorePokemons.bind(this);
  }

  getNextOffset() {
    return this.state.offset + this.state.loadNumber;
  }

  loadMorePokemons(event) {
    const newOffset = this.getNextOffset();
    this.setState({ offset: newOffset }, () => {
      console.log("Offset: " + this.state.offset);
      this.morePokemonsFromApi();
    });
  }

  componentDidMount() {
    this.morePokemonsFromApi();
  }

  morePokemonsFromApi() {
    let url = "https://pokeapi.co/api/v2/pokemon?offset=" + this.state.offset + "&limit=" + this.state.loadNumber;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          this.setState({ pokemons: data.results });
          this.state.pokemons.map((pokemon) => {
            fetch(pokemon.url)
              .then((response) => response.json())
              .then((data) => {
                if (data) {
                  var temp = this.state.pokemonDetails;
                  temp.push(data);
                  this.setState({ pokemonDetails: temp });
                }
              })
              .catch(console.log);
          });
        }
      })
      .catch(console.log);
  }

  render() {
    const { pokemonDetails } = this.state;

    const renderedPokemonList = pokemonDetails.map((pokemon) => {
      return (
        <Grid item xs={3}>
          <Item>
            <ActionCard pokemon={pokemon} />
          </Item>
        </Grid>
      );
    });

    return (
      <div>
        <h2>Pokedex</h2>
        <React.Fragment>
          <CssBaseline />
            <Container sx={{ width: 1, margin: 5}}>
              <Box sx={{ width: 1200 }}>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                >
                  {renderedPokemonList}
                </Grid>
              </Box>
            </Container>
        </React.Fragment>

        <Button variant="contained" onClick={this.loadMorePokemons}>
          Load More
        </Button>
      </div>
    );
  }
}

export default App;
