// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_WARS = 'FETCH_WARS';

// Action creator => On l'utilise au moment du dispatch()
export function fetchWars(list) {
  return {
    type: FETCH_WARS,
    list: list,
  };
}
