import {Attribute} from '../../common/entity/Attribute'
import { ChangeEvent } from 'react';
import {CardValueAction} from '../reducer/CardCalueReducer'

interface AttrFormProps {
    attribute: Attribute;
    dispatchCardValue: React.Dispatch<CardValueAction>;
}

   
export default function AttrForm({attribute, dispatchCardValue}: AttrFormProps){
    const handleChangeAttr = (e: ChangeEvent<HTMLSelectElement>) => {
        const attributeValue = e.target.value as Attribute;
        dispatchCardValue({type: 'changeAttr', attribute: attributeValue})
    }

    return (
        <>
            <form>
                <label htmlFor="cardAttribute">属性</label>
                <select id="cardAttribute" name="cardAttribute" value={attribute} onChange={handleChangeAttr}>
                    <option value={Attribute.Fire}>火</option>
                    <option value={Attribute.Water}>水</option>
                    <option value={Attribute.Earth}>地</option>
                    <option value={Attribute.Wind}>風</option>
                    <option value={Attribute.Dark}>闇</option>
                    <option value={Attribute.Light}>光</option>
                </select>
            </form>
        </>
    )
} 