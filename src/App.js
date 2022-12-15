import React, { useMemo, useState } from 'react'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import './styles/App.css'


function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'HTML', body: 'HyperText Markup Language' },
		{ id: 2, title: 'CSS', body: 'This is Cascading Style Sheets' },
		{ id: 3, title: 'JavaScript', body: 'Programming Language' },
	])

	const [filter, setFilter] = useState({ sort: '', query: '' })

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) =>
				a[filter.sort].localeCompare(b[filter.sort])
			)
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSelectPosts = useMemo(() => {
		return sortedPosts.filter(post =>
			post.title.toLowerCase().includes(filter.query.toLowerCase())
		)
	}, [filter.query, sortedPosts])

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	// Получаем post из дочернего компонента
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}
	
	console.log("Ok, its working@!!");

	return (
		<div className='App'>
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			{sortedAndSelectPosts.length ? (
				<PostList
					remove={removePost}
					posts={sortedAndSelectPosts}
					title='Posts'
				/>
			) : (
				<h1 style={{ textAling: 'center' }}>Posts it`s not defined</h1>
			)}
		</div>
	)
}

export default App
