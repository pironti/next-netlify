import Head from 'next/head'

export default function Default({ children }) {
    return (
        <>
            <Head>
                <title>Layouts Example asdkçalsk daçlskd laç</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                    rel="stylesheet"
                />

            </Head>

            {children}
            <p className="text-2xl">tst</p>
        </>
    )
}