'use client'

import { Category, posts } from '@/lib/posts'
import { useState } from 'react'

export default function Posts() {
	const [category, setCategory] = useState<Category>('ALL')

	const categories = ['ALL', 'A', 'B'] as Category[]

	const filteredData =
		category === 'ALL' ? posts : posts.filter(item => item.category.includes(category))

	return (
		<>
			<div className="flex flex-col gap-5 w-full">
				<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
					Posts
				</h1>

				<div className="flex flex-col gap-3">
					<div className="flex gap-3 justify-end items-center">
						{categories.map(item => (
							<button
								key={item}
								className="border px-3 py-2 rounded-sm cursor-pointer text-sm"
								onClick={() => setCategory(item)}
							>
								{item}
							</button>
						))}
					</div>

					<div className="border rounded-sm border-zinc-300 border-b-0 overflow-hidden">
						<table className="border-none w-full text-center [&_th]:p-3 [&_td]:p-3 [&_tr]:border-b">
							<thead>
								<tr>
									<th>category</th>
									<th>title</th>
									<th>writer</th>
									<th>created</th>
								</tr>
							</thead>

							<tbody>
								{filteredData.length ? (
									filteredData.map(item => (
										<tr key={item.id}>
											<td>{item.category.join(', ')}</td>
											<td>{item.title}</td>
											<td>{item.writer}</td>
											<td>{item.created}</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan={4}>No data</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}
