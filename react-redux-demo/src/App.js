import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCaKeContainer from './components/NewCaKeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store= {store}> 
      <div className="App">
        {/* <UserContainer /> */}
        <ItemContainer cake />
        <ItemContainer icecream />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCaKeContainer />
        </div>
    </Provider>
  )
}

export default App;
