export function Contact() {
    return (
        <div className='w-full h-full text-center pt-20 bg-gradient-to-t from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col pt-4 justify-center max-w-screen-lg mx-auto'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-gray-400'>Contact Us</p>
                <p className='py-6 md:text-xl sm:text-md'>Please send us an email describing your project so we assess and provide an accurate quote. </p>
            </div>
            <div className='flex justify-center items-center'>
                <form action='' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your name' className='p-2 mt-4 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-gray-400 transition duration-300' />
                    <input type='text' name='phone' placeholder='Enter your mobile number' className='p-2 mt-4 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-gray-400 transition duration-300' />
                    <input type='text' name='email' placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  hover:border-gray-400 transition duration-300' />
                    <textarea name='message' placeholder='How can we help?' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-gray-400 transition duration-300'></textarea>
                    <button className='text-white bg-gradient-to-b from-gray-400 to-gray-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Get Quote
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}
