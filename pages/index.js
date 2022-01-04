import fs from 'fs'
import path from 'path' 
import Head from 'next/head'
import matter from 'gray-matter'
import Posts from '../components/Posts'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <Posts posts={posts}/>
    </div>
  )
}

export async function getStaticProps () {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map(fileName => {
    const slug = fileName.replace('.md' , '');

    const text = fs.readFileSync(path.join('posts', fileName), 'utf-8')
    const { data } = matter(text);

    return {
      slug,
      data,
    };
  });

  return {
    props: {
      posts: posts
    }
  }
}