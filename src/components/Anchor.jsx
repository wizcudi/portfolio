import React from 'react'

export default function Anchor({
    onClick,
    text,

    bg='bg-brand-color-30-percent',
    font='text-brand-color-accent-2 font-bold text-lg',
    hover='hover:bg-brand-color-accent-1 hover:text-brand-color-30-percent hover:border hover:border-brand-color-30-percent',
    active='hover:bg-brand-color-accent-1 hover:text-brand-color-30-percent hover:border hover:border-brand-color-30-percent',
    
}) {
    return (
        <a 
            href={onClick}
            className={`
                capitalize 
                px-4 py-2.5 
                rounded-md 
                text-center
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
