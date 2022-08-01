import axios from 'axios'
import { ICard, IUser, IPost, IPhoto } from '../types'

const postStart = 5
const postEnd = 15
const postCount = 100
const photoCount = 50
const userCount = 10

const getRandomNumber = (start: number, end: number) => {
	return Math.floor(Math.random() * (end - start + 1) + start)
}
const getPosts = () => {
	const count = getRandomNumber(postStart, postEnd)
	const arr = Array(count).fill(0)
	return arr.map(() => Math.floor(Math.random() * postCount + 1))
}

export const fetchData = (): Promise<ICard>[] => {
	const randomPosts = getPosts()
	return randomPosts.map(async (key: number, index: number) => {
		const userId =
      key === postCount ? userCount : Math.floor(key / userCount) + 1
		const photoId = getRandomNumber(1, photoCount) + photoCount * (userId - 1)
		const {
			name: author,
			company: { name: company }
		}: IUser = await axios
			.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then(res => res.data)
		const { title, body }: IPost = await axios
			.get(`https://jsonplaceholder.typicode.com/posts/${key}`)
			.then(res => res.data)
		const { thumbnailUrl: photo }: IPhoto = await axios
			.get(
				`https://jsonplaceholder.typicode.com/albums/${userId}/photos?id=${photoId}`
			)
			.then(res => res.data[0])
		return {
      index,
			author,
			company,
			title,
			body,
			photo
		}
	})
}
