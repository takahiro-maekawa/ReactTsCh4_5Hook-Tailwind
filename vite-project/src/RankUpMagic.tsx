import { Attribute } from './valueChange/type/types'
import { useReducer } from "react";
import AttrForm from './valueChange/component/AttrForm'
import RankForm from './valueChange/component/RankForm'
import {cardValueReducer} from './valueChange/reducer/CardCalueReducer'

export default function RankUpMagic({}) {
    const [{attribute, rank, loading}, dispatchCardValue] = useReducer(cardValueReducer,
        {attribute: Attribute.Dark, rank:4, loading:true}
    );
    
    return(
        <>
        <AttrForm attribute={attribute} dispatchCardValue={dispatchCardValue}/>
        <div className="text-3xl font-bold underline">
            <span>{attribute} {rank}</span><br/>
            <span>Image will be Insert</span>
        </div>
        <RankForm dispatchCardValue={dispatchCardValue}/>
        </>
    )
}