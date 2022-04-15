import React from 'react'

function Joke({setup, punchline}) {
	return (
        <>
			<div className='joke'>
				{setup && <p className="setup paragraph">{setup}</p>}
				{punchline && <p className="punchline paragraph">{punchline}</p>}
			</div>
        </>
	)
}

export { Joke }
