import React from 'react'
import classCss from './ButtonPost.module.css'

const ButtonPost = ({children, ...props}) => {
  
  const rootClass = [classCss.ButtonPost];

  if(props['data-active']) rootClass.push(classCss.ButtonPostActive);

  console.log(props['data-active']);

  return (
    <button className={rootClass.join(' ')} {...props}>
      <span>{children}</span>
    </button>
  )
}

export default ButtonPost