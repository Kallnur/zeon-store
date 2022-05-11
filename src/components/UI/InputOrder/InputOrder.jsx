import React, { useState } from 'react'

const InputOrder = ({classCss, label, name, register, value, placeholder, type, errName}) => {
 
    let classErr = [];

    const checkError = () => {classErr.push(classCss.ModalErr)};
    const checkDone = () => {classErr.pop()};

    if(errName) checkError()
        else checkDone();
    
  return (
    <div className={classCss.FormInpBlock}>
      <label className={classErr}>
        {label}
        <input type={type} {...register(name, {required: true, minLength: 3, value: value})} 
          placeholder={placeholder}/>
      </label>
    </div>
  )
}

export default InputOrder