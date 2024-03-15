import {Attribute} from '../entity/Attribute'

export type CardViewState = {
    attribute: Attribute;
    name: String;
    imageUrl: String;
  };

  export type CardViewAction = 
    |
    {
        type: 'initalize';  
    }
    |{
        type: 'update';
        newUrl: String;
    };

export function cardViewReducer(state: CardViewState, action: CardViewAction): CardViewState {
    switch (action.type){
        case 'initalize': 
        // 値の初期化
            return {attribute: Attribute.Dark, name:'sample', imageUrl:'sample.png'};
        case 'update': 
        // 値の初期化
            return {...state, imageUrl:action.newUrl};
        default:
            return state;
    }
}