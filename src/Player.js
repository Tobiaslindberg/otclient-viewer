import React, { Component } from "react";

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <div className="w3-border lines">
            <span className="center-absolute">HP {this.props.player.hp} %</span>
            <div
              className="w3-green center"
              style={{ height: 30 + "px", width: this.props.player.hp + "%" }}
            ></div>
          </div>
          <div className="w3-border lines">
            <span className="center-absolute">
              Mana {this.props.player.manaPercent} %
            </span>
            <div
              className="w3-blue center"
              style={{
                height: 30 + "px",
                width: this.props.player.manaPercent + "%",
              }}
            ></div>
          </div>
          <h2>{this.props.player.name}</h2>
          <div className="Flex center">
            <div className="flex-grow">
              {this.props.player.voc == 1 && "EK"}
              {this.props.player.voc == 2 && "RP"}
              {this.props.player.voc == 3 && "MS"}
              {this.props.player.voc == 4 && "ED"}
            </div>
            <div className="flex-grow">{this.props.player.level}</div>
            <div className="flex-grow">{this.props.player.levelPercent}%</div>
          </div>
        </div>
        <div className="Flex center">
          <div className="flex-grow">
            Cavebot:{" "}
            <span
              className={this.props.player.caveBot ? "greenText" : "redText"}
            >
              {this.props.player.caveBot ? "On" : "Off"}
            </span>
          </div>
          <div className="flex-grow">
            Targetbot:{" "}
            <span
              className={this.props.player.targetBot ? "greenText" : "redText"}
            >
              {this.props.player.targetBot ? "On" : "Off"}
            </span>
          </div>
        </div>
        <div className="Flex center">
          <div className="flex-grow">
            m lvl: {this.props.player.skills.mlevel}
          </div>
          <div className="flex-grow">
            {this.props.player.skills.fist > this.props.player.skills.club &&
              this.props.player.skills.fist > this.props.player.skills.sword &&
              this.props.player.skills.fist >
                this.props.player.skills.distance && (
                <>Fist: {this.props.player.skills.fist}</>
              )}
            {this.props.player.skills.club > this.props.player.skills.fist &&
              this.props.player.skills.club > this.props.player.skills.sword &&
              this.props.player.skills.club >
                this.props.player.skills.distance && (
                <>Club: {this.props.player.skills.club}</>
              )}
            {this.props.player.skills.sword > this.props.player.skills.club &&
              this.props.player.skills.sword > this.props.player.skills.fist &&
              this.props.player.skills.sword >
                this.props.player.skills.distance && (
                <>Sword: {this.props.player.skills.sword}</>
              )}
            {this.props.player.skills.distance >
              this.props.player.skills.club &&
              this.props.player.skills.distance >
                this.props.player.skills.sword &&
              this.props.player.skills.distance >
                this.props.player.skills.fist && (
                <>Dist: {this.props.player.skills.distance}</>
              )}
          </div>

          <div className="flex-grow">
            Shield: {this.props.player.skills.shielding}
          </div>
        </div>
        <p>
          Stamina:{" "}
          <span
            className={
              this.props.player.stamina <= 840
                ? "redText"
                : this.props.player.stamina >= 2400
                ? "greenText"
                : "yellowText"
            }
          >
            {this.props.player.stamina > 60
              ? Math.floor(this.props.player.stamina / 60) +
                "h " +
                (this.props.player.stamina % 60) +
                "m"
              : "0h " + this.props.player.stamina + "m"}
          </span>
        </p>
        <p>Exp/h: {this.props.player.xpHour}</p>
        <p>Exp: {this.props.player.xpGained.toLocaleString()}</p>

        <p>
          Profit
          <img src={"./Gold_Coin.gif"} />:{" "}
          <span
            className={
              this.props.player.lootBalance == 0
                ? ""
                : this.props.player.lootBalance > 0
                ? "greenText"
                : "redText"
            }
          >
            {this.props.player.lootBalance.toLocaleString()}
          </span>
        </p>
      </div>
    );
  }
}

export default Player;
