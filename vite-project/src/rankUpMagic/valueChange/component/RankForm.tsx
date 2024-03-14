import {CardValueAction} from '../../../common/reducer/CardSearchValueReducer'
import { MouseEvent } from 'react';

interface RankFormProps {
    dispatchCardValue: React.Dispatch<CardValueAction>;
}

export default function RankForm({dispatchCardValue}:RankFormProps){
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