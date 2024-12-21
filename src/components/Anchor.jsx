import React from 'react'

export default function Anchor({
    onClick,
    text,

    bg='bg-color30',
    font='text-color60 font-bold text-sm',
    hover='hover:bg-color10a hover:border hover:border-color10a',
    active,
    
}) {
    return (
        <a 
            href={onClick}
            className={`
                capitalize 
                px-3 py-1.5
                rounded-md 
                text-center
                cursor-pointer
                ${bg}
                ${font}
                ${hover}
                ${active}
            `}
        >
            {text}
        </a>
    )
}
