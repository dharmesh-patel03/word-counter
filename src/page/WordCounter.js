import React, { useState } from 'react'

export const WordCounter = () => {
    const [character, setCharacter] = useState(0)
    const [word, setWord] = useState(0);
    const [textValue, setTextValue] = useState()
    return (
        <div className='container'>
            <textarea name="" id="" value={textValue} onChange={(e) => {
                setTextValue(e.target.value)
                setCharacter(e.target.value.length)

                setWord(e.target.value.split(' ').filter((n) => n !== '').length);
            }}></textarea>

            <div className='button-group'>
                <span className='character'>{character}</span>
                <button onClick={() => {
                    setCharacter(0)
                    setTextValue("")
                    setWord(0)
                }}>Clear</button>
                <span className='word'>{word}</span>
            </div>
        </div>
    )
}

