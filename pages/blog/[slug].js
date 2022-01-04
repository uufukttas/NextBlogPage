import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } from 'node-html-markdown'
import Link from 'next/link'

function PostPage({ data: {cover_image, title, date}, slug, content }) {
    return (
        <>
            <Link href="/">
                <a className="btn btn-back">Go Back</a>
            </Link>
            <div className='card card-page'>
            <h3 className='post-title'>{title}</h3>
            <p className='post-date'>Posted by, {date}</p>
            <img src={`../posts/${cover_image}`}/>
            <div className='post-body'>
                <div dangerouslySetInnerHTML={{ __html: NodeHtmlMarkdown.translate(content) }}></div>
            </div>
        </div>

        </>
    )
}

export default PostPage

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(fileName => ({
        params: {
            slug: fileName.replace('.md', ''),
        }
    }

    ))

    return {
        paths,
        fallback: false,
    }

}

export async function getStaticProps({ params: { slug }}) {
    const article = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf-8');
    const { data, content } = matter(article);

    return {
        props: {
            data,
            content,
            slug,
        }
    }
}