const _state = {
    points: {
        google: 12,
        players: [10, 11]
    }
}

export function getGooglePoints (){
    return _state.points.google
}
export function getPlayerPoints (playerNumber){
    return _state.points.players[playerNumber]
}