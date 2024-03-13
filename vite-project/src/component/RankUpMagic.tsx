import {Attribute} from '../type/types'
import { useReducer } from "react";
import AttrForm from './AttrForm'

type CardValueState = {
    attribute: string;
    rank: number;
    loading: boolean;
  };

type CardValueAction = 
    |
    {
        type: 'initalize';  
    }
    |{
        type: 'changeAttr';
        attribute: Attribute;
    }
    |{
        type: 'increment';
    }
    |{
        type: 'decrement';
    };

function cardValueReducer(state: CardValueState, action: CardValueAction): CardValueState {
    switch (action.type){
        case 'initalize':
            return {attribute: 'Dark', rank:4, loading:true}
        case 'changeAttr':
            return {...state, attribute: action.attribute}
        default:
            return state;
    }
}
export default function RankUpMagic({}) {
    const [{attribute, rank, loading}, dispatchCardValue] = useReducer(cardValueReducer,
        {attribute: 'Dark', rank:4, loading:true}
    );
    
    return(
        <>
        <AttrForm attribute={attribute} dispatchCardValue={dispatchCardValue}/>
        <div className="text-3xl font-bold underline">
            <span>{attribute} {rank}</span>
        </div>
        </>
    )
}