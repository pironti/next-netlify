const Index = ({ title, description, ...props }) => {
    return <div>Hello, world!</div>
}

export default Index

export async function getStaticProps() {
    const configData = await import(`../../../config.json`)

    console.log(configData)
    return {
        props: {
            title: configData.default.title,
            description: configData.default.description,
        },
    }
}