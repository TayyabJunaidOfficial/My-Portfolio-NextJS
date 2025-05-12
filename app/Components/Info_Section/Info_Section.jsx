import React from 'react'

const Info_Section = ({icon,title,children}) => {
    return (
        <article className="flex-1 flex flex-col items-center text-center md:text-left">
        <header className="flex items-center gap-2 text-2xl font-semibold mb-4">
          {icon}
          <span>{title}</span>
        </header>
        {children}
      </article>
  )
}

export default Info_Section