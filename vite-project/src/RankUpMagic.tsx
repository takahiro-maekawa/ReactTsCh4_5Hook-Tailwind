import { Attribute } from './common/entity/Attribute'
import { useEffect, useReducer } from "react";
import AttrForm from './rankUpMagic/valueChange/component/AttrForm'
import RankForm from './rankUpMagic/valueChange/component/RankForm'
import {cardValueReducer} from './common/reducer/CardSearchValueReducer'
import CardView from './rankUpMagic/cardView/component/CardView'
/**
 * ランクアップマジックだけでなく、ランクを下げることもできます
 * @param param0 
 * @returns 
 */
export default function RankUpMagic({}) {

    // カードの検索用Stateとdispatchを定義
    const [{attribute, rank}, dispatchCardValue] = useReducer(cardValueReducer,
        {attribute: Attribute.Dark, rank:4}
    );

    // 実質Root要素
    return(
        <>                        
            <AttrForm attribute={attribute} dispatchCardValue={dispatchCardValue}/>
            <CardView attribute={attribute} rank={rank} />
            <RankForm dispatchCardValue={dispatchCardValue}/>
        </>
    )
}