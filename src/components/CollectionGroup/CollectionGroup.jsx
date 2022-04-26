import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import GetServ from '../API/GetServ'
import Collection from '../Collection/Collection';
import ButtonGet from '../UI/ButtonGet/ButtonGet';

const CollectionGroup = ({getBtn, Limit, Page, fuse, toggle = false, timeout}) => {

    const [collections, setCollections] = useState([]);

    const GetCollection = async (limit = Limit, page = Page) => {
        if(collections.length < fuse){
            const respone = await GetServ.GetCollection(limit, page);
            if(toggle) setCollections(respone.data)
                else setCollections([...collections, ...respone.data])
            console.log(collections, respone.data)
        }
    }

    useEffect(() => {
        GetCollection();
    }, [Limit, Page])

  return (
    <div>
        {
            !collections.length
            ?
            <h1 className='collection-not'>Collections not found</h1>
            :
            <TransitionGroup className='collection-group'>
                {collections.map((col, i) => 
                    <CSSTransition
                        key={col.id}
                        timeout={timeout}
                        classNames="TCItem"
                    >
                        <Collection info={col}/>  
                    </CSSTransition>
                )}
            </TransitionGroup>
        }
        {
            getBtn
            ?
            <ButtonGet onClick={(e) => {
                GetCollection(8, 2)
                e.target.disabled = true
                e.target.style.display = "none"
            }}>
                Еще
            </ButtonGet>
            :
            null
        }  
    </div>
  )
}

export default CollectionGroup