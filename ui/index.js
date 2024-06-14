import {getGooglePoints, getPlayerPoints} from "../core/state-manager.js";

const rootElement = document.getElementById('root');

rootElement.innerHTML = '';

const googlePoints = getGooglePoints();
const playerOnePoints = getPlayerPoints(0);
const playerTwoPoints = getPlayerPoints(1);

rootElement.append(`Player1: ${googlePoints}, Player2: ${playerOnePoints}, Google: ${playerTwoPoints}`);