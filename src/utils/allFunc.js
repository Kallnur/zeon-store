export const calcPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const newPrice = (old, perc) => {
    let res   = Math.ceil(old - old * (perc / 100)),
        round = res % 10;
    if(round !== 0) res = res - round;
    return res;
}

export const part = (price) => {
     const res = (price + '').replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    return res;
}

export const totalPagBullet = (totalPages) => {
    let res = [];
    for(let i = 0; i < totalPages; i++){
        res.push(i + 1)
    }
    return res;
}

export const getTotalPages = async (state, setState, serv) => {
    const response = await serv;
    const totalCount = response.headers['x-total-count']
    const totalPages = calcPageCount(totalCount, state.limit)
    setState({...state, totalPages: totalPages})
    console.log(response.headers['x-total-count'])
}

export const checkArr = (arr, obj) => {
    if(arr.length){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].id === obj.id) return true
            else continue
        }     
    }
}

export const workaround = (url, setState) => {
    return setState([url[0],url[0],url[0],url[0],url[0],url[0],url[0],url[0]])  
}

export const retColArr = (col, arr) => {
    let newArr = [];
    for(let i = 0; i < col; i++){
        newArr.push(arr[i])
    }
    return newArr;
}

export const addKeyInObj = (arr, key) => {
    arr.forEach(obj => {
        obj.favorite = key;
    })
}
