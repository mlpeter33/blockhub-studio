import Head from 'next/head';

export default function Home() {
    return(
        <div>
            <Head>
                <title>BlockHub Studio</title>
                <meta name="description" content="BlockHub Edu is a platform for learning blockchain development." />
                <link rel="icon" href="/Icon.png" />
            </Head>
            <div className="relative h-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-top" style={{ backgroundImage: "url('/assets/Background.png')" }}>
                    
                        <p className="flex justify-center items-center text-gray-800 text-4xl">Welcome to</p>
                        <p className="flex justify-center items-center text-gray-800 text-5xl">BlockHub Studio</p>
                </div>
            </div>
        </div>

    )
}