import React from "react";

import { connect } from "react-redux";

import Scroll from "../components/Scroll";
import Header from "../components/Header";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";

import { setSearchField, requestRobots } from "../actions";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchfield, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return isPending ? (
      <h1>Loading ... </h1>
    ) : (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchfield: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => ({
  onSearchChange: e => dispatch(setSearchField(e.target.value)),
  onRequestRobots: () => dispatch(requestRobots())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
