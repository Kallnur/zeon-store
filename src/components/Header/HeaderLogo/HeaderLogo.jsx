import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux';
import Logo from '../../Logo/Logo';
import classCss from '../Header.module.css'
import SortArrWindow from '../../SortArrWindow/SortArrWindow';
import { BasFav, SearchBtn, SearchInput } from '../HeaderComponents/HeaderComponents';
import { Context } from '../../..';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from '../../SignIn/SignIn';

const HeaderLogo = () => {
    const [search, setSearch] = useState('');

    const sortedProduct = useSelector(state => state.searchSort.searchSort)
    const [visi, setVisi] = useState(false)
    const tgle = () => setVisi(false);

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth);

    return (
        <div className={classCss.HeaderLogo}>
                <Logo theme='def'/>
            <div className={classCss.HeaderInputBlock}>
                <SearchInput
                    setVisi={setVisi} 
                    search={search}
                    setSearch={setSearch}
                />
                <SearchBtn setVisi={setVisi} search={search} setSearch={setSearch} value={search}/>
                <SortArrWindow visi={visi} setVisi={setVisi} tgle={tgle} sortedProduct={sortedProduct} setSearch={setSearch}/>
            </div>
            {
                !user
                ?
                <SignIn/>
                :
                <BasFav/>
            }
        </div>
    )
}

export default HeaderLogo