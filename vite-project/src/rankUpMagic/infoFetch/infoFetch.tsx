import {Attribute} from '../../common/entity/Attribute'
import {CardViewAction} from '../../common/reducer/CardViewReducer'
import {CardValueAction} from '../../common/reducer/CardSearchValueReducer'
import { ocgQuery} from './ocgQuery'

// 関数引数用のインターフェース
interface infoProps {
    attribute: Attribute; 
    rank: number
    dispatchCardView: React.Dispatch<CardViewAction>
    dispatchCardValue: React.Dispatch<CardValueAction>
}

// Mock用のsleep関数
const sleep = (delay: number | undefined) => new Promise(resolve => setTimeout(resolve, delay));

// 引数の型を指定
interface CardInfo{
    attribute: Attribute;
    rank: number;
}

// urlを返却する関数
async function returnUrl({attribute, rank}: CardInfo):Promise<String>{
    // Xyz(ペンデュラム含む)カードを取得
    let data = await ocgQuery({attribute, rank});

    // 属性を指定して検索結果に引っ掛からなかった場合には、ランクだけで再検索
    if (data.length < 1){
        data = await ocgQuery({attribute:null, rank});
    }
    // 
    const index = Math.floor(Math.random() * (data.length));

    return data[index].card_images.at(0).image_url;
}

// データを取得し、Loading状態も解消する関数
export default async function infoFetch({attribute, rank, dispatchCardView, dispatchCardValue}: infoProps) {
    // 暫定的に値を変更
    const url = await returnUrl({attribute, rank});
    
    // CardViewStateを更新すればおk
    dispatchCardView({type: 'update', newUrl:url});
    
    // Loding状態を解除
    dispatchCardValue({type: "isNotLoading"});
}