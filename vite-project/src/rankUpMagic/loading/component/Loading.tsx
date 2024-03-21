import reactLogo from '../../../assets/pngegg_circle.png'

export default function Loading(){
    return(
        <>
            <div className="flex justify-center h-screen">
                <img className='logo' style={{ height: '900px' }} src={reactLogo} />
            </div>
        </>
    );
}