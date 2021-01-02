import './App.css';

import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed'
import Widgets from './Components/Widgets/Widgets'
import Login from './Components/Login/Login';

function App() {

  const user = null
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) 
      : (
        <>
         <Header/>
         <div className="app__body">
           <Sidebar/>
           <Feed/>
           <Widgets/>
         </div>
         </>
      )}
    
    </div>
  );
}

export default App;
