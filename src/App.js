import React, { Component } from "react";
import { connect } from "react-redux";
import {
  userData,
  toggleDone,
  deleteItem,
  getData,
  filterItems,
  displayAll,
  searchItems
} from "./actions/dataActions";
import AddForm from "./components/Forms/AddForm";
import SearchForm from "./components/Forms/SearchForm";
import Filter from "./components/Filter/Filter";
import List from "./components/List/List";
import uniqid from "uniqid";
import "./App.css";

class App extends Component {
  handleSubmit = input => {
    let lastId = uniqid();
    if (input.text !== "") {
      this.props.userData(lastId, input.text);
      input.text = "";
    }
  };
  componentDidMount = () => {
    const generateId = this.props.animals.map(elem => {
      return (elem.id = uniqid());
    });
    this.props.getData(generateId);
  };
  handleSearch = event => {
    this.props.searchItems(event.target.value);
  };

  render() {
    console.log(this.props);
    return (
      <div className="wrap">
        <AddForm onSubmit={this.handleSubmit} />
        <SearchForm handleSearch={this.handleSearch} />
        <Filter
          filterFeeded={() => this.props.filterItems(true)}
          filterHungry={() => this.props.filterItems(false)}
          filterAll={() => this.props.displayAll()}
        />
        <List
          list={this.props.animals}
          deleteItem={itemId => this.props.deleteItem(itemId)}
          toggleDone={itemId => this.props.toggleDone(itemId)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  animals: state.dataReducer
});

export default connect(
  mapStateToProps,
  {
    getData,
    userData,
    toggleDone,
    deleteItem,
    filterItems,
    displayAll,
    searchItems
  }
)(App);
