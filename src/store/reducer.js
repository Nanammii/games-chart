import { GAMES } from "../mooks/games";

const initialState = {
  games: GAMES,
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'games/setData':
      return {
        ...state,
        games: action.payload
      };
    default:
      return state;
  }
};
