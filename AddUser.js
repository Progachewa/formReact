import React, { useState } from 'react';

import './AddUser.css';

function AddUser( props ) {
    const [ enteredFirstName, setEnteredFirstName ] = useState('');
    const [ enteredSecondName, setEnteredSecondName ] = useState('');
    const [ enteredLastName, setEnteredLastName ] = useState('');
    const [ enteredTelephone, setEnteredTelephone ] = useState('');
    const [ enteredEmail, setEnteredEmail ] = useState('');
    

    const AddUserHandler = ( event ) => {
        event.preventDefault();

        if (enteredFirstName.trim().length === 0 || enteredSecondName.trim().length === 0 || enteredLastName.trim().length === 0 || enteredTelephone.trim().length === 0 || enteredEmail.trim().length === 0){
            return;
        }

        if(+enteredTelephone.length < 9 || enteredTelephone.length > 14){
            return;
        }

        props.onAddUser(enteredFirstName, enteredSecondName, enteredLastName, enteredEmail, enteredTelephone);
        
        setEnteredFirstName('');
        setEnteredSecondName('');
        setEnteredLastName('');
        setEnteredEmail('');
        setEnteredTelephone('');
    }

    function UserSecondNameHandler( event ){
        return(
            setEnteredSecondName( event.target.value )
        );
    }

    function UserFirstNameHandler( event ){
        return(
           setEnteredFirstName( event.target.value )
        );
    }

    function UserLastNameHandler( event ){
        return(
            setEnteredLastName( event.target.value )
        );
    }

    function UserTelephoneHandler( event ){
        return(
            setEnteredTelephone( event.target.value )
        );
    }

    function UserEmailHandler( event ){
        return(
            setEnteredEmail( event.target.value )
        );
    }

    return (
        <div className='FormContainer'>
            <h1 className='headerForm'>Form</h1>
            <form className='FormInput' onSubmit={AddUserHandler}>
                <label htmlFor='fname'>First Name: </label>
                <input type='text' id='fname' onChange={UserFirstNameHandler} value={enteredFirstName} />
                <br />
                <br />
                <label htmlFor='sname'>Second Name: </label>
                <input type='text' id='sname' onChange={UserSecondNameHandler} value={enteredSecondName} />
                <br />
                <br />
                <label htmlFor='lname'>Last Name: </label>
                <input type='text' id='lname' onChange={UserLastNameHandler} value={enteredLastName} />
                <br />
                <br />
                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' onChange={UserEmailHandler} value={enteredEmail} />
                <br />
                <br />
                <label htmlFor='telephone'>Telephone: </label>
                <input type='number' min='0' id='telephone' onChange={UserTelephoneHandler} value={enteredTelephone} />
                <br />
                <br />
                <input type='submit' value='Add User' />
            </form>
        </div>
    );
}

export default AddUser;