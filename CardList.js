import './CardList.css';

//import React, {useState} from 'react';

function CardList( props ) {
    return(
        <div>
            <ul>
                {props.users.map((user) => (
                    <li className='cardContainer'>
                    Name: {user.fname} {user.sname} {user.lname} 
                    <br />
                    Email: {user.email}
                    <br />
                    Telephone: {user.telephone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CardList;