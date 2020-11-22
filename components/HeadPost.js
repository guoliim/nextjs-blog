import { useMemo } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const Tag = styled.span`
    margin-inline-end: 0.5em;
`

export const HeadPost = ({
    meta,
    isBlogPost,
    link,
}) => {

    const tags = useMemo(() => {
        const { tags } = meta

        if (tags.length === 0) {
            return null
        }

        if (tags.length === 1) {
            return (
                <Link href={`/tags/${tags[0]}`}>
                    <a>
                        <Tag>
                            {tags[0]}
                        </Tag>
                    </a>
                </Link>
            )
        }

        if (tags.length > 1) {
            return tags.map((tag, index) => {
                if (index < tags.length - 1) {
                    return (
                        <Link key={index} href={`/tags/${tag}`}>
                            <a>
                                <Tag key={index}>
                                    {`${tag},`}
                                </Tag>
                            </a>
                        </Link>
                    )
                } else {
                    return (
                        <Link key={index} href={`/tags/${tag}`}>
                            <a>
                                <Tag>
                                    {tag}
                                </Tag>
                            </a>
                        </Link>
                    )
                }
            })
        }
    }, [])

    return (
        <>
            {isBlogPost
                ? (
                    <h1 className='great-title'>
                        {meta.title}
                    </h1>
                )
                : (
                    <Link href={`/blog${link}`}>
                        <a>
                            <h1>
                                {meta.title}
                            </h1>
                        </a>
                    </Link>
                )
            }
            <div className='details'>
                {
                    isBlogPost ? null: <p>{meta.description}</p>
                }
                <span>[{meta.date}]</span>
                {tags}
            </div>
            <style jsx>
                {`
                      h1 {
                        font-size: 1.5rem;
                        font-weight: 700;
                        color: #f39c12;
                      }
                      .great-title {
                          font-size: 2rem;
                      }
                      .details span {
                        color: #bdbdbd;
                        margin-right: 1rem;
                      }
                      .details {
                        margin-bottom: 1rem;
                      }
                `}
            </style>
        </>
    )
}
  