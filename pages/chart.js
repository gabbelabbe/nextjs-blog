import { BarChart, XAxis, YAxis, Bar, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts'
import Layout from '../components/layout'
import { getGithubData } from '../lib/github'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json()).then(res => {
  const postData = []
  res.forEach((data) => {
    if (data.language) {
      const i = postData.findIndex(val => val.name === data.language)
      if (i !== -1) {
        postData[i].value += 1
      } else {
        postData.push({name: data.language, value: 1})
      }
    }
  })
  return postData
})

export default function Chart() {
  const { data: githubData, error } = useSWR('https://api.github.com/users/gabbelabbe/repos', fetcher)

  if (error) return <div>failed to load</div>
  if (!githubData) return <div>loading...</div>

  return (
    <Layout>
      <div style={{ height: 500 }}>
        <ResponsiveContainer height='100%' width='100%'>
          <BarChart data={githubData} cursor='pointer'>
            <XAxis dataKey='name' />
            <YAxis />
            <Legend height={25} iconSize={0} />
            <Tooltip />
            <Bar dataKey='value' name='Amount of GitHub repos using this language'>
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  )
}