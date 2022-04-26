import React from 'react'

const Paraph = ({paraph, paraph2, classCss}) => {
    return(
        <div>
            <p className={classCss}>
                {paraph}
                {paraph2}
            </p>
            <p className={classCss}>
                {paraph}
                {paraph}
                {paraph2}
            </p>
        </div>
    )
}

export default Paraph