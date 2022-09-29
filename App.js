import Raect, { useState } from 'react';
import './App.css';
import './Components/Users/AddUser.js'
import AddUser from './Components/Users/AddUser.js';
import CardList from './Components/Users/CardList.js'

function App() {
  const [cardList, setCardList] = useState([]);

  function AddUserHandler(userFname, userSname, userLname, userEmail, userTelephone) {
   setCardList((prevCardList) => {
    return(
      [...prevCardList, {fname: userFname, sname: userSname, lname: userLname, email: userEmail, telephone: userTelephone}]
    )
   });
  }

  return (
    <div className='App'>
      <AddUser onAddUser ={AddUserHandler} />
      <CardList users={cardList} />
    </div>
  );
}

export default App;
