import {useState, useEffect} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import './index.css'

const EmojiGame = props => {
  const {emojisList} = props
  const [clickedEmojiList, setClicked] = useState([])
  const [falseClick, setFalseClick] = useState(false)
  const [TopScore, setTopScore] = useState(0)

  const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

  useEffect(() => {
    shuffledEmojisList()
  })

  const onEmojiClick = id => {
    if (!clickedEmojiList.includes(id)) {
      setClicked([...clickedEmojiList, id])
    } else {
      setFalseClick(true)
    }
  }

  useEffect(() => {
    if (falseClick) {
      if (clickedEmojiList.length > TopScore) {
        setTopScore(clickedEmojiList.length)
      }
    }
  }, [falseClick])

  const onPlayAgain = () => {
    setClicked([])

    setFalseClick(false)
  }

  return (
    <div>
      <NavBar
        score={clickedEmojiList.length}
        TopScore={TopScore}
        falseClicked={falseClick}
      />

      {falseClick ? (
        <div>
          <h1>You Loss</h1>
          <p>Score is {clickedEmojiList.length}</p>
          <button onClick={onPlayAgain}>Play Again</button>
        </div>
      ) : (
        <div className="emoji_button">
          {emojisList.map(emoji => (
            <EmojiCard
              emoji={emoji}
              key={emoji.id}
              onEmojiClick={onEmojiClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default EmojiGame
