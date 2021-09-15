import React from 'react';
import './App.css'
import CompoC from './CompoC'
import { Myprovider } from './MyContext';

class App extends React.Component
{
    render()
    {
        return(
            <>
            <h3>This is main component</h3>
            <Myprovider value="Amit Kumar">
                <CompoC/>
            </Myprovider>
            </>
        )
    }
}
export default App