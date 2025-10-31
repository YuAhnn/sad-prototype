export default function Btn( {btnTask, label} ){
    return(
        <>
            <button className='bg-[#3fb185] p-2 rounded-full w-25 text-white font-bold transition 
            duration-300 ease-in-out hover:bg-[#2a8f6d] active:bg-[#2a8f6d] cursor-pointer' onClick={btnTask}>{label}</button>
        </>
    )
} 