import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import MainMenu from "./components/MainMenu";
import GameRules from './components/GameRules';

const router = createBrowserRouter([
  {
    path: '/',
    element:  <MainMenu/>,
    errorElement: <ErrorPage />
  },
  {
    path: '/rules',
    element: <GameRules/>
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
