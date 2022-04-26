import React, { useEffect, useState } from 'react'
import GetServ from '../API/GetServ'
import Logo from '../Logo/Logo'
import classCss from './Footer.module.css'
import FooterListLink from './FooterList/FooterListLink'

const Footer = () => {
  
  const [urls, setUrls] = useState([]);
  const [title, setTitle] = useState([]);

  const getContact = async () => {
    const response = await GetServ.getContact('');
    const responseTitle = await GetServ.getContact('-title');
    setTitle(responseTitle.data)
    setUrls(response.data)
  }

  useEffect(() => {
    getContact();
  }, [])

  return (
    <footer className={classCss.Footer}>
      <div className="container">
        <div className={classCss.FooterBody}>
          <Logo theme='W'/>
          {
            !urls.length
            ?
            <h1>Contact not found</h1>
            :
            urls.map((arr, i) => 
              <FooterListLink
                key={i + Math.random() * 10}
                links={arr}
                ind={i}
                title={title[i]}
              />
            )
          }
          <p className={classCss.FooterPs}>Developed by Zeon 2022</p> 
        </div>
      </div>
    </footer>
  )
}

export default Footer