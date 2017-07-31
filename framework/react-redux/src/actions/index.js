export function togglePlay() {
    return {
        type: 'TOGGLE_PLAY'
    };
}

export function changeBpm(bpm) {
    return {
        type: 'CHANGE_BPM',
        bpm
    }
}

export function toggleNote(row, col) {
    return {
        type: 'TOGGLE_NOTE',
        row,
        col
    }
}

