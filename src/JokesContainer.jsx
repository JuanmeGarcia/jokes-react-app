import React from 'react'

function JokesContainer({ children }) {
	return (
        <div className="container">
			<h1 className="title">Jokes generator</h1>
            
            {children}
        </div>
    )
}

export { JokesContainer }
