import cfgLogo from '../src/assets/images/logo.svg'

function App() {
  return (
    <div className="App">
      <div className="main-menu">
        <div className="main-menu-items">
            <img src={cfgLogo} className="menu-logo"/>

            <div className='player-v-player-button'>

            </div>
            <div className='game-rules-button'>

            </div>
        </div>
      </div>
      <div className="main-menu-background">
      </div>
    </div>
  );
}

export default App;
