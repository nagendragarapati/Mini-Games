import './index.css'

const NavBar = props => {
  const {score, TopScore, falseClicked} = props
  return (
    <div className="main-nav">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji_logo"
        />
        <p className="text-emoji">Emoji Game</p>
      </div>

      {!falseClicked && (
        <div>
          <p className="text-emoji">Score: {score}</p>
          <p className="text-emoji">Top Score: {TopScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
