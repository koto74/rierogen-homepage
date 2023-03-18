import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), "posts")

const getPostsData = () => {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, "") // id = file name

        // md file get string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf-8")

        const matterResult = matter(fileContents)

        // return id and data
        return {
            id, 
            ...matterResult.data,
        }
    })

    return (
        allPostsData
    )
}

export default getPostsData