import desktopImg from '../assets/image-web-3-desktop.jpg'
import mobileImg from '../assets/image-web-3-mobile.jpg'
export default function News() {
    return ( 
        <section className='grid grid-cols-mobile md:grid-cols-1fr-34% gap-10 md:gap-7'>
            <div className=''>
                <picture>
                    <source media="(min-width: 768px)" srcSet={desktopImg} />
                    <img src={mobileImg} alt="mobileImage" />
                </picture>
                <div className='flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 mt-6'>
                    <h1 className='font-bold title'>The Bright Future of Web 3.0?</h1>
                    <article className='flex flex-col justify-between items-start'>
                            <p className='text-neutral-dark-grayish-blue text-sm'>We dive into the next evolution of the web that claims to put the power of the platforms
                                back into the hands of the people. But is it really fulfilling its promise?
                            </p>
                            <button className='border border-none bg-primary-soft-red hover:bg-neutral-very-dark-grayish-blue transition-all 
                                text-neutral-off-white tracking-ultra-wide uppercase text-xs font-bold px-7 py-3 mt-6 md:mt-0
                            '>
                                Read more
                            </button>
                    </article>
                </div>
            </div>

            <div className='flex flex-col justify-between bg-neutral-very-dark-grayish-blue
                pl-6 pr-7 py-6
            '>
                <h1 className='text-primary-soft-orange text-3xl md:text-4xl font-bold mb-6 md:mb-0'>New</h1>
                <div className='mb-6 md:mb-0'>
                    <h3 className='text-neutral-off-white font-bold mb-1 hover:text-primary-soft-orange
                     cursor-pointer transition-all'>
                        Hydrogen VS Electric Cars
                    </h3>
                    <p className='text-neutral-grayish-blue opacity-80 text-sm'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <span className='border flex border-neutral-grayish-blue opacity-30 mb-6 md:mb-0'></span>
                <div className='mb-6 md:mb-0'>
                    <h3 className='text-neutral-off-white font-bold mb-1 hover:text-primary-soft-orange
                     cursor-pointer transition-all'>
                        The Downsides of AI Artistry
                    </h3>
                    <p className='text-neutral-grayish-blue opacity-80 text-sm'>What are the possible adverse effects of on-demand AI image generation?</p>
                    
                </div>
                <span className='border flex border-neutral-grayish-blue opacity-30 mb-6 md:mb-0'></span>
                <div>
                    <h3 className='text-neutral-off-white font-bold mb-1 hover:text-primary-soft-orange
                     cursor-pointer transition-all'>
                        Is VC Funding Drying Up?
                    </h3>
                    <p className='text-neutral-grayish-blue opacity-80 text-sm'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </div>
            </div>
        </section>
    )
}