import React from 'react';
import './App.css';
import {User} from "./06_callback/06_callback";

function App() {

    const names = ['Dimych', 'Sveta', 'Katya', 'Victor', 'Ignat']
    const users = [
        {id: 1 ,name: 'Dimych'},
        {id: 2 ,name: 'Sveta'},
        {id: 3 ,name: 'Katya'},
        {id: 4 ,name: 'Victor'},
        {id: 5 ,name: 'Ignat'},
    ]

    const liElements = users.map( (obj) => <li key={obj.id}> {obj.name}</li>)

    return (
        <div>
            <ul>
                {liElements}
            </ul>
            <User />
        </div>
    );
}

export default App;
