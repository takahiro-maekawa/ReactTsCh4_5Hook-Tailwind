import {CardValueAction, Attribute} from '../type/types'
import { MouseEvent } from 'react';

interface RankFormProps {
    rank: number;
    dispatchCardValue: React.Dispatch<CardValueAction>;
}

export default function RankForm({rank, dispatchCardValue}:RankFormProps){
    const clickDecrement = (e: MouseEvent<HTMLButtonElement>) => {
        dispatchCardValue({type:'decrement'})
    };

    const clickIncrement = (e: MouseEvent<HTMLButtonElement>) => {
        dispatchCardValue({type:'increment'})
    }

    return(
        <>  
            <button onClick = {clickDecrement}>◀️</button>
            <span>🔹🔹🔹</span>
            <button onClick = {clickIncrement}>▶️</button>
        </>
    )
}