
interface CardViewProps {
    name: string;
    imageUrl: string;
}

export default function CardView({name, imageUrl}: CardViewProps){
    return(
        <>
        {/** 
         <span>{imageUrl}</span>
        **/}
        <img src={imageUrl} />
        </>
    )
}