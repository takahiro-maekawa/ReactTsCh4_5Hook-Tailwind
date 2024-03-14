import { Attribute } from './common/entity/Attribute'
import { useEffect, useReducer } from "react";
import AttrForm from './rankUpMagic/valueChange/component/AttrForm'
import RankForm from './rankUpMagic/valueChange/component/RankForm'
import {cardValueReducer} from './common/reducer/CardSearchValueReducer'
import {cardViewReducer} from './common/reducer/CardViewReducer'
import CardView from './rankUpMagic/cardView/component/CardView'

export default function RankUpMagic({}) {

    const [{attribute, rank, loading}, dispatchCardValue] = useReducer(cardValueReducer,
        {attribute: Attribute.Dark, rank:4, loading:true}
    );

    const [{name, imageUrl}, dispatchCardView] = useReducer(cardViewReducer,
        {attribute: Attribute.Dark, name:'sample', imageUrl:'test.png'}
    );
    
    useEffect(() => {
        console.log(`属性は${attribute}, ランクは${rank}`);
    }, [attribute, rank])

    return(
        <>
        <AttrForm attribute={attribute} dispatchCardValue={dispatchCardValue}/>
        <div className="text-3xl font-bold underline">
            <span>{attribute} {rank}</span><br/>
        </div>
        <CardView /><br/>
        <RankForm dispatchCardValue={dispatchCardValue}/>
        </>
    )
}