import GridGame from "../components/gridmaster/gridgame";

export default function Home() {
        return(
        <div>
            <div className="relative h-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-scroll bg-top flex flex-col justify-center items-center" style={{ backgroundImage: "url('/assets/Background.png')" }}>
                        <GridGame />

                        
                </div>
            </div>
        </div>
    )
}