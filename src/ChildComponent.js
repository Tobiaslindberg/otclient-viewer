import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={this.props.player.name}>
        <div>
          <h2>{this.props.player.name}</h2>
          <span>{this.props.player.level}</span>
        </div>
        <p>
          Mana:{" "}
          <span
            className={this.props.player.mana > 60 ? "greenText" : "redText"}
          >
            {this.props.player.mana}
          </span>
        </p>
        <p>
          Health:{" "}
          <span className={this.props.player.hp > 70 ? "greenText" : "redText"}>
            {this.props.player.hp}
          </span>
        </p>
        <p>
          Exp/h: {this.props.player.xpHour} (total {this.props.player.xpGained})
        </p>
        <p>
          Loot balance <img src={"./Gold_Coin.gif"} />:{" "}
          <span
            className={
              this.props.player.lootBalance == 0
                ? ""
                : this.props.player.lootBalance > 0
                ? "greenText"
                : "redText"
            }
          >
            {this.props.player.lootBalance}
          </span>
        </p>
        <p>Magic level: {this.props.player.skills.mlevel}</p>

        {this.props.player.skills.fist > this.props.player.skills.club &&
          this.props.player.skills.fist > this.props.player.skills.sword &&
          this.props.player.skills.fist > this.props.player.skills.distance && (
            <p>Fist: {this.props.player.skills.fist}</p>
          )}
        {this.props.player.skills.club > this.props.player.skills.fist &&
          this.props.player.skills.club > this.props.player.skills.sword &&
          this.props.player.skills.club > this.props.player.skills.distance && (
            <p>Club: {this.props.player.skills.club}</p>
          )}
        {this.props.player.skills.sword > this.props.player.skills.club &&
          this.props.player.skills.sword > this.props.player.skills.fist &&
          this.props.player.skills.sword >
            this.props.player.skills.distance && (
            <p>Sword: {this.props.player.skills.sword}</p>
          )}
        {this.props.player.skills.distance > this.props.player.skills.club &&
          this.props.player.skills.distance > this.props.player.skills.sword &&
          this.props.player.skills.distance > this.props.player.skills.fist && (
            <p>Distance: {this.props.player.skills.distance}</p>
          )}
        <p>Shield: {this.props.player.skills.shielding}</p>
      </div>
    );
  }
}

export default ChildComponent;
