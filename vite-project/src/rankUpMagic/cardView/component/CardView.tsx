import {Attribute} from '../../../common/entity/Attribute'
import { returnUrl } from '../../infoFetch/infoFetch';
import {useQuery} from 'react-query'

interface CardViewProps {
    attribute: Attribute;
    rank: number;
}

export default function CardView({attribute, rank}: CardViewProps){
    const {data: url} = useQuery(['ocgApi', {attribute, rank}], returnUrl);

    return(
        <img style={{ height: '700px' }} className="h-65" src={url?.toString()} />
    )
}