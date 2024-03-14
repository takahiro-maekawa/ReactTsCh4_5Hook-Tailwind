import { Attribute } from './common/entity/Attribute'
import { useEffect, useReducer } from "react";
import AttrForm from './rankUpMagic/valueChange/component/AttrForm'
import RankForm from './rankUpMagic/valueChange/component/RankForm'
import {cardValueReducer} from './rankUpMagic/valueChange/reducer/CardCalueReducer'

export default function RankUpMagic({}) {
    const [{attribute, rank, loading}, dispatchCardValue] = useReducer(cardValueReducer,
        {attribute: Attribute.Dark, rank:4, loading:true}
    );
    
    useEffect(() => {
        console.log(`属性は${attribute}, ランクは${rank}`);
    }, [attribute, rank])

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