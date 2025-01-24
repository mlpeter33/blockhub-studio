export default function Home() {
        return(
        <div>
            <div className="relative h-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-contain bg-scroll bg-top flex flex-col justify-center items-center" style={{ backgroundImage: "url('/assets/Background.png')" }}>
                    
                        <p className=" text-gray-800 text-4xl">Welcome to</p>
                        <p className=" text-gray-800 text-7xl font-[cabinSketch] font-bold">BlockHub</p>
                        <p className=" text-gray-800 text-7xl font-[cabinSketch] font-bold">Studio</p>
                </div>
            </div>
        </div>
    )
}