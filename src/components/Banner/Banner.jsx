import './banner.scss';

export default function Banner({bannerImg, tagline}) {    
    if (bannerImg && tagline) {
        return (            
            <section className='banner'>
                <div className='tagline'>
                    <h1>{tagline}</h1>
                </div>               
                <img src={bannerImg} alt="paysage naturel" />                
            </section>
        )
    }
}
