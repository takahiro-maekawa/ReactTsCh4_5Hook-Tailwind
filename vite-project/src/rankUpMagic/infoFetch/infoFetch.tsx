import {Attribute} from '../../common/entity/Attribute'
import {CardViewAction} from '../../common/reducer/CardViewReducer'

interface infoProps {
    attribute: Attribute; 
    rank: number
    dispatchCardView: React.Dispatch<CardViewAction>
}

const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

async function exampleFunction() {
    console.log('Start');
    await sleep(2000); // 2秒間待機
    console.log('End');
   }

export default function infoFetch({attribute, rank, dispatchCardView}: infoProps) {
    exampleFunction();
    
    // あとは何かしらの形でCardViewStateを更新すればおk
    dispatchCardView({type: 'update', newState:{attribute: Attribute.Dark, name:`${rank} of ${attribute} Attr`, imageUrl:`${attribute}.png`}})

}