import Post from './Post'

function Posts({ posts }) {
    return (
        <div className='posts'>
        {
          posts.map((post, index) => (
            // console.log(post)
            <Post key={index} post={post}/>
            // <h3 key={index}>{post.data.title}</h3>
          ))
        }
      </div>
    )
}

export default Posts;