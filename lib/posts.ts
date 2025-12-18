export type Category = 'ALL' | 'A' | 'B'

export interface Post {
	id: number
	title: string
	created: string
	writer: string
	category: Category[]
}

export const posts: Post[] = [
	{
		id: 1,
		title: 'A1',
		created: '2025/12/31',
		writer: 'admin',
		category: ['A'],
	},
	{
		id: 2,
		title: 'A2',
		created: '2025/12/31',
		writer: 'admin',
		category: ['A'],
	},
	{
		id: 3,
		title: 'B1',
		created: '2025/12/31',
		writer: 'admin',
		category: ['B'],
	},
	{
		id: 4,
		title: 'A & B',
		created: '2025/12/31',
		writer: 'admin',
		category: ['A', 'B'],
	},
]
