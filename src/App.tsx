import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoggedIn from './Pages/LoggedIn';
import store from './Store/Store';
import './App.css';
import Panel from './Pages/Panel';
function App() {


  return (
    <>
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Panel />} />
            <Route path='/login' element={<LoggedIn />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
