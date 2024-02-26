import { Route, Routes, BrowserRouter } from 'react-router-dom'
import GamesHeader from './Components/GamesHeader'
import RpsRulesAndPlay from './Components/RPSComponents/RpsRulesAndPlay'
import RpsPlay from './Components/RPSComponents/RPSPlay'
import ResultScreen from './Components/RPSComponents/Results'
import EmojiHome from './Components/EmojiComponents/EmojiHome'
import FlipRulesAndPlay from './Components/CardFlipComponents/FlipRulesPlay'
import FlipPlay from './Components/CardFlipComponents/FlipPlay'
import EmojiRules from './Components/EmojiComponents/EmojiRules'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

const App = () => (
  <>  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GamesHeader />} />
      <Route path="/rps-game-rules" element={<RpsRulesAndPlay />} />
      <Route path="/rps-play-game" element={<RpsPlay />} />
      <Route path="/rps-result" element={<ResultScreen/>}/>
      <Route path="/flip-game-rules" element={<FlipRulesAndPlay/>}/>
      <Route path="/flip-play-game" element={<FlipPlay/>}/>
      <Route path="/emoji-game" element={<EmojiHome/>}/>
      <Route path="/emoji-game-rules" element={<EmojiRules />} />




      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
  </>


)

export default App
