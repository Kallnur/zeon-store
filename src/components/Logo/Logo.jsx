import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GetServ from '../API/GetServ'

const Logo = ({theme}) => {

  const [logoUrl, setLogoUrl] = useState([]);
  // const [temp, setTemp] = useState('');

  const getLogoUrl = async () => {
    
    let temp = '';

    if(theme === 'def')    temp = 'DefLogo'
    else if(theme === 'W') temp = 'BotLogo'
    else if(theme === 'M') temp = 'MobLogo'

    const response = await GetServ.getLogo(temp);
    setLogoUrl(response.data)
  }

  useEffect(() => {
    getLogoUrl();
  }, [])

  return (
    !logoUrl.length
    ?
    <h1>Logo not found</h1>
    :
    logoUrl.map(logo =>
      <Link to='/' key={logo.type}>
        <img src={logo.url} alt="Logo" />
      </Link>        
    )
  )
}

export default Logo