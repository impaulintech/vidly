import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  showMovies = () => {
    let listMovies = getMovies().map((x, index) => {
      return (
        <tr key={x._id}>
          <td>{x.title}</td>
          <td>{x.genre.name}</td>
          <td>{x.numberInStock}</td>
          <td>{x.dailyRentalRate}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteMovie(x._id);
                this.setState({ counts: this.state.movies.length });
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    let status =
      getMovies().length === 0
        ? "There is no movies in database."
        : `Showing ${getMovies().length} in the database.`;

    return { listMovies, status };
  };

  delMovie = (id) => {
    deleteMovie(id);
    this.setState({ counts: this.state.movies.length });
  };

  render() {
    return (
      <React.Fragment>
        <main className="container" style={{ marginTop: 50 }}>
          <h3 className="status">{this.showMovies().status}</h3>
          <br />
          <table className="table table-striped">
            <thead>
              {getMovies().length === 0 ? (
                ""
              ) : (
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stosck</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                </tr>
              )}
            </thead>
            <tbody>{this.showMovies().listMovies}</tbody>
          </table>
        </main>
      </React.Fragment>
    );
  }
}

export default Movies;
