import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className="w-[min(1200px,100%-2rem)] mx-auto">
        {children}
    </div>
  )
}

export default Wrapper
