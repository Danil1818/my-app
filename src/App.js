import React, { useState } from 'react'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyInput from './components/UI/input/MyInput'
import MySelect from './components/UI/select/MySelect'
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'HTML', body: 'HyperText Markup Language' },
		{ id: 2, title: 'CSS', body: 'This is Cascading Style Sheets' },
		{ id: 3, title: 'JavaScript', body: 'Programming Language' },
	])

	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	function getSortedPosts() {
		console.log(
			'==========================================================================='
		)
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
		}
		return posts
	}

	const sortedPosts = getSortedPosts()

	const createPost = newPost => {
		setPosts([...posts, newPost])
	}

	// Получаем post из дочернего компонента
	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const sortPosts = sort => {
		setSelectedSort(sort)
	}

	return (
		<div className='App'>
			<PostForm create={createPost} />
			<hr style={{ margin: '15px 0' }} />
			<div>
				<MyInput
					placeholder='Поиск'
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue='Сортировка'
					options={[
						{ value: 'title', name: 'По названию' },
						{ value: 'body', name: 'По описанию' },
					]}
				/>
			</div>
			{posts.length ? (
				<PostList remove={removePost} posts={sortedPosts} title='Ftontend' />
			) : (
				<h1 style={{ textAling: 'center' }}>Posts it`s not defined</h1>
			)}
		</div>
	)
}

export default App
