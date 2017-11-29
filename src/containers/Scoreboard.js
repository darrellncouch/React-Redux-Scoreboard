import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/Player';
import Stopwatch from '../components/Stopwatch';
import Stats from '../components/Stats';
import Counter from '../components/Counter';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';
import Header from '../components/Header';



class Scoreboard extends Component{

  static propTypes ={
    players: React.PropTypes.array.isRequired
  };



  render(){

    const { dispatch, players } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => {
      console.log('player', player)
      return (
        <Player
          index={index}
          name={player ? player.name: null}
          score={player ? player.score: null}
          key={player ? player.name: null}
          updatePlayerScore={updatePlayerScore}
          removePlayer={removePlayer}
        />
      )
    });


    return (
      <div className="scoreboard">
        <Header
          players={players}
        />
        <div className="players">
          {playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
};

const mapStateToProps = state =>{
  return {
    players: state
  }
}


export default connect(mapStateToProps)(Scoreboard);
