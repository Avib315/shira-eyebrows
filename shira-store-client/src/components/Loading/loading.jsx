import './loading.scss'

export default function Loading() {
    return (
        <div className='Loading'>
            <div className='eyebrowContainer'>
                <div className='eyeBrows'></div>
            </div>
            <div className='loaderDotsContainer'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
    )
}
