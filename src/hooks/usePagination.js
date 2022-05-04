export default function usePagination(){

    const paginationIn = (arr, rPage, col) => {
        const totalPage = Math.ceil(arr.length / col),
            RPage      = rPage,
            lastInd   = col * RPage,
            firstInd  = lastInd - col; 
  
        return{totalPage, RPage, lastInd, firstInd};
    }

    return paginationIn;
}