import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, withStyles, Grid } from "@material-ui/core";
import PokemonCard from "../components/PokemonCard";

const styles = (theme) => ({
  pokedexContainer: {
    height: "100vh",
    backgroundColor: "rgb(68, 68, 68)",
    paddingTop: 80,
    textAlign: "center"
  },
});

export class Favourites extends Component {
  render() {
    const { classes, favourites } = this.props;
    return (
      <Box>
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {favourites.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                key={pokemon.id}
                image={pokemon.sprites.front_default}
              />
            );
          })}
        </Grid>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  favourites: state.favourites,
});

const mapDispatchToProps = (dispatch) => ({});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Favourites)
);
