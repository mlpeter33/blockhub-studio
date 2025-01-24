import Head from 'next/head';

export default function Landing() {
    return(
        <div>
            <Head>
                <title>BlockHub Studio</title>
                <meta name="description" content="BlockHub Edu is a platform for learning blockchain development." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p className="text-pink-600">Welcome to BlockHub Studio</p>
            </main>
        </div>
    )
}