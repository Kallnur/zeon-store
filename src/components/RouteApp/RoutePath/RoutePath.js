import AboutUs from "../../../pages/AboutUs/AboutUs"
import Basket from "../../../pages/Basket/Basket"
import Collection from "../../../pages/Collection/Collection"
import CollectionProduct from "../../../pages/CollectionProduct/CollectionProduct"
import Favorits from "../../../pages/Favorites/Favorites"
import Help from "../../../pages/Help/Help"
import Home from "../../../pages/Home/Home"
import News from "../../../pages/News/News"
import PageNotFound from "../../../pages/PageNotFound/PageNotFound"
import ProductPage from "../../../pages/ProductPage/ProductPage"
import PublicOffer from "../../../pages/PublicOffer/PublicOffer"
import ResSearch from "../../../pages/ResSearch/ResSearch"
import { ABOUT_US, BASKET, COLLECTION, COLLECTION_ID, FAVORITES, HELP, HOME, NEWS, NOT_FOUND, OFFER, PRODUCT_ID, SEARCH_RESULT } from "../../../utils/routePath"

export const PubRoute = [
    {
        path: HOME,
        component: <Home/>
    },
    {
        path: ABOUT_US,
        component: <AboutUs/>
    },
    {
        path: COLLECTION,
        component: <Collection/>
    },
    {
        path: COLLECTION_ID,
        component: <CollectionProduct/>
    },
    {
        path: NEWS,
        component: <News/>
    },
    {
        path: HELP,
        component: <Help/>
    },
    {
        path: OFFER,
        component: <PublicOffer/>
    },
    {
        path: SEARCH_RESULT,
        component: <ResSearch/>
    },
    {
        path: PRODUCT_ID,
        component: <ProductPage/>
    },
    {
        path: NOT_FOUND,
        component: <PageNotFound/>
    }
]
export const PriRoute = [
    ...PubRoute,
    {
        path: FAVORITES,
        component: <Favorits/> 
    },
    {
        path: BASKET,
        component:<Basket/>
    }
]