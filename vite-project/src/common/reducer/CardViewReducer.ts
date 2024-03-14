import {Attribute} from '../entity/Attribute'

export type CardViewState = {
    attribute: Attribute;
    name: string;
    imageUrl: string;
  };

  export type CardViewAction = 
    |
    {
        type: 'initalize';  
    }
    |{
        type: 'update';
        newState: CardViewState;
    };

export function cardViewReducer(state: CardViewState, action: CardViewAction): CardViewState {
    switch (action.type){
        case 'initalize': 
        // 値の初期化
            return {attribute: Attribute.Dark, name:'sample', imageUrl:'sample.png'};
        case 'update': 
        // 値の初期化
            return {...action.newState};
        default:
            return state;
    }
}