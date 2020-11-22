export const generateRssItem = (post) => `
    <item>
        <guid>https://emilioschepis.com/blog/${post.id}</guid>
        <title>${post.title}</title>
        <link>https://emilioschepis.com/blog/${post.id}</link>
        <description>${post.description}</description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>
`

export const generateRss = (post) => `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
            <title>Blog - Emilio Schepis</title>
            <link>https://emilioschepis.com/blog</link>
            <description>[...]</description>
            <language>en</language>
            <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
            <atom:link href="https://emilioschepis.com/rss.xml" rel="self" type="application/rss+xml"/>
            ${posts.map(generateRssItem).join('')}
        </channel>
    </rss>
`

