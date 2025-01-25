export default function Home() {
        return(
        <div>
            <div className="relative h-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-scroll bg-top flex flex-col justify-center items-center" style={{ backgroundImage: "url('/assets/Background.png')" }}>
                    
                        <p className=" text-gray-800 text-4xl mb-4 shadow-md">Welcome to</p>
                        <p className=" text-gray-800 text-7xl font-[cabinSketch] font-bold mb-2 shadow-sm tracking-widest">BlockHub</p>
                        <p className=" text-gray-800 text-7xl font-[cabinSketch] font-bold mb-2 shadow-md tracking-widest">Studio</p>
                </div>
            </div>
        </div>
    )
}