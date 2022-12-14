import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, title, remove}) => {

	if (!posts.length) {
		return (
			<h1 style={{textAling: 'center'}}>
				Posts is not defined
			</h1>
		)
	}

	return (
		<div>
			<h1 style={{ textAling: 'center' }}>{title}</h1>
			{posts.map((post, index) => (
				<PostItem remove={remove} number={index + 1} post={post} key={post.id} />
			))}
		</div>
	)
}
export default PostList
