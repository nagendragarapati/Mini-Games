import { Route, Routes, BrowserRouter } from 'react-router-dom'
import GamesHeader from './Components/GamesHeader'
import RpsRulesAndPlay from './Components/RPSComponents/RpsRulesAndPlay'
import RpsPlay from './Components/RPSComponents/RPSPlay'
import ResultScreen from './Components/RPSComponents/Results'
import EmojiHome from './Components/EmojiComponents/EmojiHome'
import FlipRulesAndPlay from './Components/CardFlipComponents/FlipRulesPlay'
import FlipPlay from './Components/CardFlipComponents/FlipPlay'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

const App = () => (
  <>  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GamesHeader />} />
      <Route path="/rps-game-rules" element={<RpsRulesAndPlay />} />
      <Route path="/rps-play-game" element={<RpsPlay />} />
      <Route path="/rps-result" element={<ResultScreen/>}/>
      <Route path="/emoji-game" element={<EmojiHome/>}/>
      <Route path="/flip-game-rules" element={<FlipRulesAndPlay/>}/>
      <Route path="/flip-play-game" element={<FlipPlay/>}/>



      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
  </>


)

export default App
