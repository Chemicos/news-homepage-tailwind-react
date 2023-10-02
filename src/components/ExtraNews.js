import retroImg from '../assets/image-retro-pcs.jpg'
import laptopImg from '../assets/image-top-laptops.jpg'
import gamingImg from '../assets/image-gaming-growth.jpg'

export default function ExtraNews() {
    return (
        <section className='flex flex-col md:flex-row justify-between mb-20 md:mb-0 mt-16 gap-6 md:gap-2'>
                <div className='flex gap-5 max-h-28'>
                    <img src={retroImg} alt="" />
                    <div className='flex flex-col justify-between w-48'>
                        <span className='font-bold text-neutral-grayish-blue text-3xl'>01</span>
                        <h1 className='font-bold hover:text-primary-soft-red cursor-pointer transition-all'>Reviving Retro PCs</h1>
                        <p className='text-neutral-dark-grayish-blue text-small'>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                <div className='flex gap-5 max-h-28'>
                <img src={laptopImg} alt="" />
                    <div className='flex flex-col justify-between w-48'>
                        <span className='font-bold text-neutral-grayish-blue text-3xl'>02</span>
                        <h1 className='font-bold hover:text-primary-soft-red cursor-pointer transition-all'>Top 10 Laptops of 2022</h1>
                        <p className='text-neutral-dark-grayish-blue text-small'>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className='flex gap-5 max-h-28'>
                <img src={gamingImg} alt="" />
                    <div className='flex flex-col justify-between w-48'>
                        <span className='font-bold text-neutral-grayish-blue text-3xl'>03</span>
                        <h1 className='font-bold hover:text-primary-soft-red cursor-pointer transition-all'>The Growth of Gaming</h1>
                        <p className='text-neutral-dark-grayish-blue text-small'>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
        </section>
    )
}