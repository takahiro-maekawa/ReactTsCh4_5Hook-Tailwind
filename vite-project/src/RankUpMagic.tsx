import { Attribute } from './common/entity/Attribute'
import { useEffect, useReducer } from "react";
import AttrForm from './rankUpMagic/valueChange/component/AttrForm'
import RankForm from './rankUpMagic/valueChange/component/RankForm'
import {cardValueReducer} from './common/reducer/CardSearchValueReducer'
import {cardViewReducer} from './common/reducer/CardViewReducer'
import CardView from './rankUpMagic/cardView/component/CardView'
import infoFetch from './rankUpMagic/infoFetch/infoFetch';

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
        {attribute: Attribute.Dark, name:'sample', imageUrl:'test.png'}
    );
    
    // カードの検索用State
    useEffect(() => {
        dispatchCardValue({type: 'changeLoad'});
        infoFetch({attribute, rank, dispatchCardView});
        dispatchCardValue({type: 'changeLoad'});
    }, [attribute, rank])

    return(
        <>
        <AttrForm attribute={attribute} dispatchCardValue={dispatchCardValue}/>
        <div className="text-3xl font-bold underline">
            <span>{attribute} {rank} {loading ? "true": "false"}</span><br/>
        </div>
        <div className="text-3xl font-bold underline">
            <span>{name} {imageUrl}</span><br/>
        </div>
        <CardView /><br/>
        <RankForm dispatchCardValue={dispatchCardValue}/>
        </>
    )
}