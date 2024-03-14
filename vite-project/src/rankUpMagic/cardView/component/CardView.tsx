
interface CardViewProps {
    name: string;
    imageUrl: string;
    loading: boolean;
}

export default function CardView({name, imageUrl, loading}: CardViewProps){
    return(
        <div className='flex justify-center items-center'>
        {(() => {
            if(loading){
                return <img style={{ height: '200px' }} src="https://uploads1.yugioh.com/card_images/743/detail/Xyz-effect.jpg?1380294200" />
            }else{
                return <img style={{ height: '200px' }} className="h-65" src={imageUrl} />
            }
        })()
        }
        {/** imageUrlがきちんと取得されているかのテスト用
         <span>{imageUrl}</span>
        **/}
        </div>
    )
}