import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";


export function fetchPostContent() {

    const postsDirectory = path.join(process.cwd(), 'src/cms/content/posts')
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
        .filter((it) => it.endsWith('.mdx'))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, "utf8")

            const matterResult = matter(fileContents, {
                engines: {
                    yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
                },
            });

            matterData.fullPath = fullPath;

            const slug = fileName.replace(/\.mdx$/, "");

            // Validate slug string
            if (matterData.slug !== slug) {
                throw new Error(
                    "slug field not match with the path of its content source"
                );
            }

            return matterData;
        })

} export function listPostContent() {
    return fetchPostContent()
        .filter((it) => !tag || (it.tags && it.tags.includes(tag)))
        .slice((page - 1) * limit, page * limit);
}