export function togglePlay() {
  return {
    type: "TOGGLE_PLAY"
  };
}

export function clearPattern() {
  return {
    type: "CLEAR_PATTERN"
  };
}

export function advancePos() {
  return {
    type: "ADVANCE_POS"
  };
}

export function changeBpm(bpm) {
  return {
    type: "CHANGE_BPM",
    bpm
  };
}

export function toggleNote(row, col) {
  return {
    type: "TOGGLE_NOTE",
    row,
    col
  };
}
