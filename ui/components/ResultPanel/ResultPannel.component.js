import {getGooglePoints, getPlayerPoints} from "../../../core/state-manager.js";

export function ResultPanelComponent() {
    const element = document.createElement('div')

    element.classList.add('result-panel');

    async function render() {
        const googlePoints = await getGooglePoints();
        const playerOnePoints = await getPlayerPoints(1);
        const playerTwoPoints = await getPlayerPoints(2);

        element.append(`Player1: ${playerOnePoints}, Player2: ${playerTwoPoints}, Google: ${googlePoints}`)
    }

    render();

    return {element};
}