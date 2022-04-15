import React from 'react'
import { Joke } from './Joke'
import { JokesContainer } from './JokesContainer'
import './main.scss'
import info from './jokes.json'

function App(){
    return (
        <main className='main'>
            <JokesContainer>
                {info.jokes.map(joke => (
                    <Joke 
                        key={joke.setup}
                        setup={joke.setup}
                        punchline={joke.punchline}
                    />
                ))}    
            </JokesContainer>
        </main>
    )
}

export { App }