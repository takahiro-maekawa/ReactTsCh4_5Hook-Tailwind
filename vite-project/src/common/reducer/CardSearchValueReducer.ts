import {Attribute} from '../entity/Attribute'

export type CardValueState = {
    attribute: Attribute;
    rank: number;
  };

export type CardValueAction = 
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

export function cardValueReducer(state: CardValueState, action: CardValueAction): CardValueState {
    switch (action.type){
        case 'initalize': 
        // 値の初期化
            return {attribute: Attribute.Dark, rank:4}
        case 'changeAttr': 
        // 属性の変更
            return {...state, attribute: action.attribute}
        case 'decrement': 
        // ランクを1下げる
            if (state.rank < 2) {
                return state;
            }
            return {...state, rank: state.rank -1}
        case 'increment':
        // ランクを1上げる
            if (state.rank > 11){
                return state;
            }
            return {...state, rank: state.rank +1}
        default:
            return state;
    }
}