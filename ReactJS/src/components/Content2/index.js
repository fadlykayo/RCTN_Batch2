import React, { Component } from "react";
import axios from "axios";
import { Columns, Column, Card, CardHeader, CardHeaderTitle, CardHeaderIcon, CardContent, Content, small, CardFooter, CardFooterItem, Icon, CardImage, Image } from "bloomer";

// import "./style.css" ;
// import style from "./style.js";

export default class AContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      ikutGa: "white"
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.actors[0] !== this.props.actors[0]) {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  }

  renderContent() {
    if (this.props.actors.length > 0) {
      return this.props.actors.map((actor, index) => {
        return (
          <div key={index}>
            <p>{actor}</p>
            <br />
          </div>
        );
      });
    } else {
      return (
        <div>
          <p>Loading data...</p>
        </div>
      );
    }
  }

  render() {
    return (
      <Columns isCentered>
        <Column isSize="1/2">
          <Card>
            <CardHeader>
              <CardHeaderTitle>
                Meetup 2
              </CardHeaderTitle>
              <CardHeaderIcon>
                <Icon className="fa fa-angle-down" />
              </CardHeaderIcon>
            </CardHeader>
            <CardContent style={{backgroundColor: this.state.ikutGa}}>
              <Content>
                Halo semuanya! Kita akan mengadakan meetup lagi loh!
                <br/>
                Kali ini akan diadakan di {this.props.location}
                <br/>
                <small>pada {this.props.date}</small>
              </Content>
            </CardContent>
            <CardFooter>
              <CardFooterItem
                onClick={() => this.props.onClick()}
              >
                Usul tempat lain!
              </CardFooterItem>
              <CardFooterItem
                onClick={() => this.setState({
                  ikutGa: "yellow"
                })}
              >
                Ikut
              </CardFooterItem>
            </CardFooter>
          </Card>
        </Column>
      </Columns>
    );
  }
}
