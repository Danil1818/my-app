import React, { useState, useRef } from 'react'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'HTML', body: 'Description' },
		{ id: 2, title: 'CSS', body: 'Description' },
		{ id: 3, title: 'JavaScript', body: 'Description' },
	])

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	// Получаем post из дочернего компонента
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<PostForm create={createPost} />
			{posts.length !== 0 ? (
				<PostList remove={removePost} posts={posts} title='Ftontend' />
			) : (
				<h1 style={{textAling: 'center'}}>Posts it`s not defined</h1>
			)}
		</div>
	)
}

export default App
