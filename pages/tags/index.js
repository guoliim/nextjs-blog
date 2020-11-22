import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { tagsMap } from '../../utils/getAllTags'

const Container = styled.div`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
`

const Tag = styled.span`
    font-size: 1rem;
    line-height: 1.5rem;
`

export default function Tags() {

    const tagList = []

    tagsMap.forEach((value, key) => {
        tagList.push({
            tag: key,
            len: value.length,
        })
    })

    return (
        <Container>
            {tagList.map(({ tag, len }, index) => (
                <Link href={`/tags/${tag}`} key={index}>
                    <a>
                        <Tag key={index}>
                            {tag}
                            <sup>
                                {len}
                            </sup>
                        </Tag>
                    </a>
                </Link>
            ))}
        </Container>
    )
}