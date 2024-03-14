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
        {attribute: Attribute.Dark, name:'sample', imageUrl:'https://images.ygoprodeck.com/images/cards/16195942.jpg'}
    );
    
    // カードの検索用State
    useEffect(() => {
        dispatchCardValue({type: 'isLoading'});
        infoFetch({attribute, rank, dispatchCardView, dispatchCardValue});
    }, [attribute, rank])

    return(
        <>
        <AttrForm attribute={attribute} dispatchCardValue={dispatchCardValue}/>
        <div className="text-3xl font-bold underline">
            <span>{attribute} {rank} {loading ? "true": "false"}</span><br/>
        </div>
        <CardView name={name} imageUrl={imageUrl} /><br/>
        <RankForm dispatchCardValue={dispatchCardValue}/>
        </>
    )
}