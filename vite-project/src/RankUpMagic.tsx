import { Attribute } from './common/entity/Attribute'
import { useEffect, useReducer } from "react";
import AttrForm from './rankUpMagic/valueChange/component/AttrForm'
import RankForm from './rankUpMagic/valueChange/component/RankForm'
import {cardValueReducer} from './common/reducer/CardSearchValueReducer'
import {cardViewReducer} from './common/reducer/CardViewReducer'
import CardViewOld from './rankUpMagic/cardView/component/CardViewOld'
import infoFetch from './rankUpMagic/infoFetch/infoFetch';
import {Suspense, lazy} from 'react'

/**
 * ランクアップマジックだけでなく、ランクを下げることもできます
 * @param param0 
 * @returns 
 */
export default function RankUpMagic({}) {

    // カードの検索用Stateとdispatchを定義
    const [{attribute, rank, loading}, dispatchCardValue] = useReducer(cardValueReducer,
        {attribute: Attribute.Dark, rank:4, loading:false}
    );
    
    // カードの表示用Stateとdispatchを定義
    const [{name, imageUrl}, dispatchCardView] = useReducer(cardViewReducer,
        {attribute: Attribute.Dark, name:'sample', imageUrl:'./assets/pngegg.png'}
    );
    
    // カードの検索用State
    useEffect(() => {
        dispatchCardValue({type: 'isLoading'});
        infoFetch({attribute, rank, dispatchCardView, dispatchCardValue});
    }, [attribute, rank])

    // 実質Root要素
    return(
        <>                        
            <AttrForm attribute={attribute} dispatchCardValue={dispatchCardValue}/>
            <CardViewOld name={name} imageUrl={imageUrl} loading={loading}/><br/>
            <RankForm dispatchCardValue={dispatchCardValue}/>
        </>
    )
}