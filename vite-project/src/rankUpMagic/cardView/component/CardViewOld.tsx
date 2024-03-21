
interface CardViewProps {
    name: String;
    imageUrl: String;
}

export default function CardViewOld({name, imageUrl}: CardViewProps){
    return(
        <div className='flex justify-center items-center'>
        {(() => {
            if(false){
                return <img style={{ height: '200px' }} src="https://uploads1.yugioh.com/card_images/743/detail/Xyz-effect.jpg?1380294200" />
            }else{
                return <img style={{ height: '700px' }} className="h-65" src={imageUrl.toString()} />
            }
        })()
        }
        {/** imageUrlがきちんと取得されているかのテスト用
         <span>{imageUrl}</span>
        **/}
        </div>
    )
}