import React, { useEffect } from 'react'
import "../style/Feed.scss"
import usePost from '../hooks/usePost'
import Posts from '../components/posts'
import Nav from '../../shared/component/nav'


const Feed = () => {
  const { feed, loading, handleFeed } = usePost()

  useEffect(() => {
    handleFeed()
  }, [])
  if (loading || !feed) {
    return (<main><h1>feed is loading...</h1></main>)
  }
  console.log(feed)

  return (
    <main className='feed-page'>
      <Nav/>
      <div className="feed">
        <div className="posts">
              {feed.map(post=>{
                return <Posts user={post.user} post={post}/>
              })}
        </div>

      </div>

    </main>
  )
}

export default Feed
