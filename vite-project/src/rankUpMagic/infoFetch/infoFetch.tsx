import {Attribute} from '../../common/entity/Attribute'
import {CardViewAction} from '../../common/reducer/CardViewReducer'
import {CardValueAction} from '../../common/reducer/CardSearchValueReducer'

// 関数引数用のインターフェース
interface infoProps {
    attribute: Attribute; 
    rank: number
    dispatchCardView: React.Dispatch<CardViewAction>
    dispatchCardValue: React.Dispatch<CardValueAction>
}

// Mock用のsleep関数
const sleep = (delay: number | undefined) => new Promise(resolve => setTimeout(resolve, delay));

export default async function infoFetch({attribute, rank, dispatchCardView, dispatchCardValue}: infoProps) {
    // 暫定的に値を変更
    await sleep(2000);
    
    // あとは何かしらの形でCardViewStateを更新すればおk
    dispatchCardView({type: 'update', newState:{attribute: Attribute.Dark, name:`${rank} of ${attribute} Attr`, imageUrl:`${attribute}.png`}})
    
    // Loding状態を解除
    dispatchCardValue({type: "isNotLoading"});
}