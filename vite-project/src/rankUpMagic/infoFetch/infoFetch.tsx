import {Attribute} from '../../common/entity/Attribute'
import {CardViewAction} from '../../common/reducer/CardViewReducer'

interface infoProps {
    attribute: Attribute; 
    rank: number
    dispatchCardView: React.Dispatch<CardViewAction>
}

export default function infoFetch({attribute, rank, dispatchCardView}: infoProps) {
    
    // あとは何かしらの形でCardViewStateを更新すればおk
    dispatchCardView({type: 'update', newState:{attribute: Attribute.Dark, name:`${rank} of ${attribute} Attr`, imageUrl:`${attribute}.png`}})

}