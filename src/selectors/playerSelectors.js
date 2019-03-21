import { createSelector } from 'reselect';
import I from 'immutable';

const player = state => state.player;

export const getPlayers = createSelector(player, playerState => playerState.get('players', I.List()));
export const getSelectedPlayer = createSelector(player, playerState => playerState.getIn(['selectedPlayer', -1], I.Map()));