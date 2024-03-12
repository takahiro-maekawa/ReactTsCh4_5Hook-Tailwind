import { act } from "react-dom/test-utils";
import { FormEvent, useReducer } from "react";
import {ChangeEvent} from 'react';

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
        attribute: string;
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
    
    const handleChangeAttr = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatchCardValue({type: 'changeAttr', attribute: e.target.value})
    }
    
    return(
        <>
        <form>
            <label htmlFor="cardAttribute">属性</label>
            <select id="cardAttribute" name="cardAttribute" value={attribute} onChange={handleChangeAttr}>
                <option value="Fire">火</option>
                <option value="Aqua">水</option>
                <option value="Earth">地</option>
                <option value="Wind">風</option>
                <option value="Dark">闇</option>
                <option value="Devine">光</option>
            </select>
        </form>
        
        <div className="text-3xl font-bold underline">
            <span>{attribute} {rank}</span>
        </div>
        </>
    )
}