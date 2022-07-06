/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} bets - toutes les recettes
 * @param {string} searchedId - le slug de la recette recherchée
 * @return {Object} - La recette trouvée
 */
export function findBetForm(bets, searchedId) {
  const betForm = bets.find((testedBet) => {
    return testedBet.id === searchedId;
  });
  return betForm;
}
