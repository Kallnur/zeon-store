import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useDispatch } from "react-redux";
import { Context } from "..";

export default async function useFirestore(collection, fillArr) {

    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();

    const getFavorites = () => {if(user) return firestore.collection(`users/${user.uid}/${collection}`)}
    const [fireProducts, load] = await useCollectionData(getFavorites())

    // const pushFireProduct = () => {dispatch(fillArr(fireProducts))};

    if(fireProducts) {
        dispatch(fillArr(fireProducts))
        return {fireProducts, load};
    };
}