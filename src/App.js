import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import MainMenu from "./components/MainMenu";

const router = createBrowserRouter([
  {
    path: '/',
    element:  <MainMenu/>,
    errorElement: <ErrorPage />
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
