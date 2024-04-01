import React from 'react'

type FooterProps = {
    text:string
}

export default function FooterText({ text }: FooterProps){
    return(
        <p className='font-bold text-white'>{text}</p>
    )
}