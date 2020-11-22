import { execOnce } from 'next/dist/next-server/lib/utils'
import { posts } from './getAllPosts'

export const tagsMap = new Map()

posts.forEach((post) => {
    const {
        link,
        module: {
            meta: {
                date,
                title,
                tags,
            }
        },
    } = post 

    tags.forEach((tag) => {
        if (!tagsMap.has(tag)) {
            tagsMap.set(tag, [{
                date,
                title,
                link,
            }])
        } else {
            tagsMap.set(
                tag,
                [
                    ...tagsMap.get(tag),
                    {
                        date,
                        title,
                        link,
                    },
                ]
            )
        }
    })
})