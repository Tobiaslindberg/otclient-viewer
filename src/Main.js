import React, { Component } from "react";
import ChildComponent from "./ChildComponent.js";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ws: null,
      players: [],
    };
  }

  componentDidMount() {
    this.connect();
  }

  connect = () => {
    var ws = new WebSocket(process.env.REACT_APP_BOTSERVER_URL);
    var players = [];
    let that = this;
    var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
      console.log("connected websocket main component");

      this.setState({ ws: ws, players: players });
      const apiCall = {
        type: "init",
        name: "postman",
        channel: "hbg",
      };
      ws.send(JSON.stringify(apiCall));

      that.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    // websocket onclose event listener
    ws.onclose = (e) => {
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (that.timeout + that.timeout) / 1000
        )} second.`,
        e.reason
      );

      that.timeout = that.timeout + that.timeout; //increment retry interval
      connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
    };

    // websocket onerror event listener
    ws.onerror = (err) => {
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );

      ws.close();
    };

    ws.onmessage = (event) => {
      const json = JSON.parse(event.data);
      try {
        if (json.type == "message" && json.topic == "stats") {
          this.setState({
            ws: this.state.ws,
            players: [
              ...this.state.players.filter((x) => x.name != json.name),
              {
                name: json.name,
                mana: json.message.mana,
                hp: json.message.hp,
                level: json.message.level,
                exp: json.message.exp,
                stamina: json.message.stamina,
                voc: json.message.voc,
                blessings: json.message.blessings,
                pos: {
                  x: json.message.pos.x,
                  y: json.message.pos.y,
                  z: json.message.pos.z,
                },
                skills: {
                  mlevel: json.message.skills.mlevel,
                  fist: json.message.skills.fist,
                  club: json.message.skills.club,
                  sword: json.message.skills.sword,
                  distance: json.message.skills.distance,
                  shielding: json.message.skills.shielding,
                  fishing: json.message.skills.fishing,
                },
                xpGained: json.message.xpGained,
                lootBalance: json.message.lootBalance,
                xpHour: json.message.xpHour,
              },
            ],
          });
        }
      } catch (err) {}
    };
  };

  render() {
    return (
      <div className="Players">
        {this.state.players &&
          []
            .concat(this.state.players)
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((player) => (
              <ChildComponent websocket={this.state.ws} player={player} />
            ))}
      </div>
    );
  }
}

export default Main;
