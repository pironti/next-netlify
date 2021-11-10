import fs from 'fs'
import path from 'path'
import Template from "../../../src/components/Template";

const Post = ({ blogpost }) => {
    if (!blogpost) return <div>not found</div>

    const { html, attributes } = blogpost

    return (
        <Template>
            <article> 
                <h1>{attributes.titulo}</h1>
                <img src={attributes.thumbnail} />
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        </Template>
    )
}

export async function getStaticPaths() {
    const paths = fs
        .readdirSync(path.join(process.cwd(), 'src/cms/content/posts'))
        .map((blogName) => {
            const trimmedName = blogName.substring(0, blogName.length - 3)
            return {
                params: { slug: trimmedName },
            }
        })

    return {
        paths,
        fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params

    const blogpost = await import(`../../../src/cms/content/posts/${slug}.md`).catch(
        () => null
    )

    return {
        props: {
            blogpost: blogpost.default,
        },
    }
}

export default Post