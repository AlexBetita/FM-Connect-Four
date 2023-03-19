import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import MainMenu from "./components/MainMenu";
import GameRules from './components/GameRules';
import GameBoard from './components/Game';

const router = createBrowserRouter([
  {
    path: '/',
    element:  <MainMenu/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/rules',
    element: <GameRules/>
  },
  {
    path: '/game',
    element: <GameBoard/>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
