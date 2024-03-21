import {Attribute} from '../../common/entity/Attribute'
import { ocgQuery} from './ocgQuery'
import { QueryFunctionContext } from 'react-query';

// Mock用のsleep関数
const sleep = (delay: number | undefined) => new Promise(resolve => setTimeout(resolve, delay));

// 引数の型を指定
interface CardInfo{
    attribute: Attribute;
    rank: number;
}

// urlを返却する関数
export async function returnUrl({ queryKey }: QueryFunctionContext<[string, CardInfo]>):Promise<String>{
    
    const [,{ attribute, rank }] = queryKey;
    
    // Xyz(ペンデュラム含む)カードを取得
    let data = await ocgQuery({attribute, rank});

    // 属性を指定して検索結果に引っ掛からなかった場合には、ランクだけで再検索
    if (data.length < 1){
        data = await ocgQuery({attribute:null, rank});
    }
    const index = Math.floor(Math.random() * (data.length));

    return data[index].card_images.at(0).image_url;
}
