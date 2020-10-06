import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import AllGamesDisplay from "./AllGamesDisplay.js";
import Match from "../match/Match.js";

const SPACE_ID = process.env.REACT_APP_SPACE_ID;

const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

//to fetch the data from contentful
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

class ExGamesList extends Component {
  state = {
    ExGames: [],
    searchString: "",
  };

  constructor() {
    super();
    this.getExgames();
  }

  getExgames = () => {
    client
      .getEntries({
        content_type: "exgames",
        query: this.state.searchString,
      })
      .then((response) => {
        this.setState({ ExGames: response.items });
      })
      .catch((error) => {
        console.log("Error occured while fetching data");
        console.log(error);
      });
  };

  onSearchInputChange = (event) => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getExgames();
  };

  //console.log(ExGames);
  //<Grid item xs={12} sm={6} lg={4} xl={3}>
  //            <Match />
  //        </Grid>

  render() {
    return (
      <div>
        {this.state.ExGames ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for ExGames"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={2} style={{ padding: 24 }}>
              {this.state.ExGames.map((currentExGame, idw) => (
                <Grid key={idw} item xs={12} sm={6} lg={4} xl={3}>
                  <AllGamesDisplay exgame={currentExGame} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No courses found"
        )}
      </div>
    );
  }
}
export default ExGamesList;
