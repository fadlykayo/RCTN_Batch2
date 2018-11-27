import React, { Component } from "react";
import axios from "axios";

import { Header, Footer, Content } from "../../components";

import "./style.css";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      people: "Budi",
      tempat: "Pacific Place",
      tanggal: "",
      actors: []
    };
  }

  componentDidMount() {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        let data = response.data.results;
        let names = data.map(datum => datum.name);
        this.setState({
          actors: names
        });
        return response;
      })
      .then(response => axios.get(response.data.next))
      .then(response => {
        let data = response.data.results;
        let names = data.map(datum => datum.name);
        this.setState({
          actors: names
        });
      })
      .catch(err => {
        this.setState({
          actors: ["Error Loading"]
        });
      });

    setTimeout(() => {
      this.setState({
        tanggal: "19 November 2018"
      });
    }, 3000);

    // setTimeout(() => {
    //   this.setState({
    //     people: "Budi"
    //   });
    // }, 2000);

    setTimeout(() => {
      console.log("here");
      this.setState({
        tempat: "GoWork"
      });
    }, 5000);
  }

  handleClickHeader() {
    this.setState({
      people: "Andi"
    });
  }

  handleClickContent() {
    this.setState({
      tempat: "Kota Tua",
      tanggal: "20 November 2019"
    });
  }

  render() {
    let { people, tempat, tanggal, actors } = this.state;

    return (
      <div>
        <Header people={people} onClick={() => this.handleClickHeader()} />

        <Content
          location={tempat}
          date={tanggal}
          onClick={() => this.handleClickContent()}
          actors={actors}
        />

        <Footer footer="Footer" />
      </div>
    );
  }
}
