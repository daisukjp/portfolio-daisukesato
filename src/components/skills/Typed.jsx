import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

const Typed = () => {
    return (
        <TypeWriterEffect
        textStyle={{
        fontFamily: 'Abel, sans-serif',
        color: 'rgb(35, 41, 70)',
        fontWeight: 500,
        fontSize: '36px',
        letterSpacing: '5px',
        padding: '20px 0px 0px',
        textAlign: 'center',
        }}
        startDelay={1000}
        cursorColor="rgb(35, 41, 70)"
        multiText={[
        'My name is',
        'DAISUKE SATO',
        'I am',
        'FRONT-END DEVELOPER'
        ]}
        multiTextDelay={1000}
        typeSpeed={150}
        multiTextLoop
    />
    )
}

export default Typed
