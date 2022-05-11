import React, { useEffect, useState } from 'react'
import GetServ from '../../components/API/GetServ'
import classCss from './Help.module.css'
import PageTitle from '../../components/PageTitle/PageTitle'
import HelpBlock from './HelpBlock/HelpBlock';
import { useDispatch } from 'react-redux';
import { toogleCrumb } from '../../store/reducers/breadcrumb';
import Loader from '../../components/Loader/Loader';

const Help = () => {

  const [helpInfo, setHelpInfo] = useState([]);

  const getHelp = async () => {
    const response = await GetServ.getHelp()
    setHelpInfo(response.data)
  }
  const dispatch = useDispatch();
  const crumb = [{txt: 'Главная ', href: '/'},{txt:'Помощь ', href: '/help'}]

  useEffect(() => {
    getHelp();
    dispatch(toogleCrumb(crumb))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className={classCss.Help}>
      <div className='container'>
        <div className={classCss.HelpBody}>
          <div className={classCss.HelpImg}>
            <img src="https://firebasestorage.googleapis.com/v0/b/zeon-store-8ad28.appspot.com/o/Fscetch.jpg?alt=media&token=c5a45e72-cc42-4cdb-8bd4-3272a0f9842a" alt="Img" />
          </div>
          <div className={classCss.HelpGroupBlock}>
            <PageTitle title={"Помощь"}/>
            <div className={classCss.HelpGroup}>
              {
                !helpInfo.length
                ?
                <Loader/>
                :
                helpInfo.map((obj, i) =>
                  <HelpBlock key={Math.random() * i} info={obj}/>  
                )
              }              
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Help