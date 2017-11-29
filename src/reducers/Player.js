import * as PlayerActionTypes from '../actiontypes/Player';

const initialState = [
  {
    name: 'Jim Hoskins',
    score: 31,
  },
  {
    name: 'Andrew Chalkley',
    score: 20,
  },
  {
    name: 'Alena Holligan',
    score: 50,
  },
];

export default function Player(state=initialState, action){
  switch(action.type){
    case PlayerActionTypes.ADD_PLAYER:
    return [
      ...state,
      {
        name: action.name,
        score: 0
      }
    ];

    case PlayerActionTypes.REMOVE_PLAYER:
    return[
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1)
    ];

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
    console.log('action', action)
    let result = state.map((player, index) => {
      console.log('index', player);
      if(index === action.index) {
        return {
            ...player,
            score: player.score + action.score
          }
      } else {
        return player;
      }
      // index === action.index
      //   ? {
      //       ...player,
      //       score: player.score + action.score
      //     }
      //   : player;
    });
    console.log('result', result);
    return result;

    default:
      return state;
  }
}
