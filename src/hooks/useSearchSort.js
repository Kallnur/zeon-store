import { useDispatch, useSelector } from "react-redux"
import { addToSort } from "../store/searchSort"


export default function useSearchSort() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)
    
    const sortSearch = (val) => {
        const sortedArr = products.filter(obj => 
            obj.collection.toLowerCase().includes(val.toLowerCase())  
        )
        const getColletion = sortedArr.map(obj => obj.collection)
        const resArr = getColletion.filter((obj, i, arr) => 
            arr.indexOf(obj) == i 
        )
        dispatch(addToSort(resArr))
    }
    return sortSearch
}