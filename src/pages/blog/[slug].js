import { useRouter } from "next/router"
import fs from "fs"
import matter from "gray-matter"
import { fetchPostContent } from "../../lib/cmsPosts"


const Post = ({ post }) => {
    const router = useRouter()
    const { slug } = router.query

    return <p>Post: {slug}</p>
}

export async function getStaticProps() {

    fetchPostContent()

    return {
        props: {
            tst: 1
        },
    }
}

export async function getStaticPaths() {

    const paths = fetchPostContent().map(it => "/posts/" + it.slug);
}
export default Post