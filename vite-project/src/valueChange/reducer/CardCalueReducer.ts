import {Attribute, CardValueState, CardValueAction} from '../type/types'
export function cardValueReducer(state: CardValueState, action: CardValueAction): CardValueState {
    switch (action.type){
        case 'initalize':
            return {attribute: Attribute.Dark, rank:4, loading:true}
        case 'changeAttr':
            return {...state, attribute: action.attribute}
        case 'decrement':
            if (state.rank < 2) {
                return state;
            }
            return {...state, rank: state.rank -1}
        case 'increment':
            if (state.rank > 11){
                return state;
            }
            return {...state, rank: state.rank +1}
        default:
            return state;
    }
}