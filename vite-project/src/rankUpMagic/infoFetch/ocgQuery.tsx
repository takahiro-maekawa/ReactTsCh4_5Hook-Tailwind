import {Attribute} from '../../common/entity/Attribute'

export interface QueryInfo{
    attribute: Attribute | null;
    rank: number
}


// yugioh APIからデータを取得
export async function ocgQuery({attribute = null, rank}:QueryInfo) {
    let baseUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?level=${rank}&attribute=${attribute}`;
    if (attribute === null){
        baseUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?level=${rank}`;
    }

    // エクシーズ・ペンデュラムを取得
    const pendurumData = await getDataByList(`${baseUrl}&type=XYZ%20Pendulum%20Effect%20Monster`);

    // エクシーズモンスターを取得
    const xyzData = await getDataByList(`${baseUrl}&type=XYZ%20Monster`);
    return [...xyzData, ...pendurumData];
}

/** urlを引数として、データを取得しリストとして返却する関数*/
async function getDataByList(url: string) {
    const responseXyzPendurum = await fetch(url);
    const pendurumData= await responseXyzPendurum.json().then((data: unknown) => {
        if(containsData(data)){ 
            return data.data; // dataプロパティのみを抽出
        }
        return null;
    })
    .then((data: unknown) => {
        if (isList(data)){ 
            return data;
        }
        return [];
    }
    )

    return pendurumData;
}

/** 実際にdataを持っていれば、dataを持つオブジェクトとみなす*/
function containsData( 
    value: any
    ):
    value is {data: any}{
        return "data" in value;
    }

/** Array型と判定できれば、Array型とみなす*/
function isList(
    value: any
    ):
    value is Array<any> {
        return Array.isArray(value); 
    }