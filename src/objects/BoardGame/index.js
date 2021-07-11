import CardGame from '../../components/cardGame'

function BoardGame(amountCards) {
  const $htmlCardGame = CardGame()
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards)
  return $htmlBoardGame
}

export default BoardGame
