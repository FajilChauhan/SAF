import React from 'react'

const About = () => {
    return (
        <>
            <div className="px-[40px] about flex w-full">
                <div className="left w-[1/2]">
                    <div className="flex mb-[20px]">
                        <img className='w-[300px] rounded-[10px] border-2 overflow-hidden mr-[30px]' src="./about-1.jpg" alt="" />
                        <img className='w-[250px] rounded-[10px] border-2 ovwerflow-hidden mt-[70px] mr-[50px]' src="./about-2.jpg" alt="" />
                    </div>
                    <div className="flex">
                        <img className='w-[250px] mb-[70px] rounded-[10px] border-2 overflow-hidden ml-[45px] mr-[30px]' src="./about-3.jpg" alt="" />
               -/         <img className='w-[300px] rounded-[10px] border-2 overflow-hidden mr-[0px]' src="./about-4.jpg" alt="" />
                    </div>
                </div>

                <div className="right w-[550px] mt-[70px] text-black pl-[40px] flex flex-col">
                    <h1 className='font-black text-orange-500 bold text-[22px] mb-[4px] underline'>About Us</h1>
                    <span className='font-bold text-[30px] mb-[18px]'>Welcome to <span className='text-orange-400'>SAFNAM</span></span>
                    <span className='mb-[18px]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. 
                        Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</span>
                    <span className='mb-[18px]'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</span>
                    <span className='text-[30px]'><span className='text-orange-400 font-bold'>15</span> Year Of <span className='font-semibold'>Experience</span></span>
                    <span className='text-[30px]'><span className='text-orange-400 font-bold'>50</span> Popular <span className='font-semibold'>Master Chef</span></span>
                    <div className="team pt-[16px] max-w-screen">
                        <h1 className='font-bold text-center text-[30px] text-orange-400 underline'>Our Master Chefs</h1>
                        <div className="flex gap-[20px] pt-[15px]">
                            <img className='w-[120px] border-2 border-black rounded-full'src="./team-1.jpg" alt="" />
                            <img className='w-[120px] border-2 border-black rounded-full' src="./team-2.jpg" alt="" />
                            <img className='w-[120px] border-2 border-black rounded-full' src="./team-3.jpg" alt="" />
                            <img className='w-[120px] border-2 border-black rounded-full' src="./team-4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
