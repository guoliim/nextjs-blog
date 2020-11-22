import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from '@emotion/styled'

const Header = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: #f39c12;
`

import { tagsMap } from '../../utils/getAllTags'

export default function Tag() {

    const router = useRouter()

    const { tag } = router.query

    const tagList = Array.isArray(tagsMap.get(tag)) && tagsMap.get(tag).sort((a, b) => (
        b.date.localeCompare(a.date)
    ))

    return (
        <div>
            <Header>
                {tag}
            </Header>
            <ul>
                {tagList 
                    ? tagList.map(({
                        date,
                        title,
                        link,
                    }, index) => (
                        <Link key={index} href={`/blog${link}`}>
                            <a>
                                <li key={index}>
                                    <span>
                                        {date}
                                        {title}
                                    </span>
                                </li>
                            </a>
                        </Link>
                    ))
                    : null
                }
            </ul>
        </div>
    )
}