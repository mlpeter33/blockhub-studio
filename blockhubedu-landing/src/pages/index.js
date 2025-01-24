export default function Home() {
        return(
        <div>
            <div className="relative h-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-contain bg-scroll bg-top" style={{ backgroundImage: "url('/assets/Background.png')" }}>
                    
                        <p className="flex justify-center items-center text-gray-800 text-4xl">Welcome to</p>
                        <p className="flex justify-center items-center text-gray-800 text-7xl font-[cabinSketch] font-bold">BlockHub</p>
                        <p className="flex justify-center items-center text-gray-800 text-7xl font-[cabinSketch] font-bold">Studio</p>
                </div>
            </div>
        </div>
    )
}