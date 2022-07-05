// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const FETCH_CLANS = 'FETCH_CLANS';

// Action creator => On l'utilise au moment du dispatch()
export function fetchClans(list) {
  return {
    type: FETCH_CLANS,
    list: list,
  };
}
