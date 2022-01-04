import Link from 'next/link'

function Post({ post }) {
    return (
        <div className='card'>
            <img src={`../posts/${post.data.cover_image}`} alt="test"/>
            <div className='post-date'>Posted on, {post.data.date}</div>
            <h3 className='post-title'>{post.data.title}</h3>
            <p className='post-excerpt'>{post.data.excerpt}</p>
            <Link href={`/blog/${post.slug}`}>
                <a className='btn'>Read More</a>
            </Link>
            
        </div>
    )
}

export default Post