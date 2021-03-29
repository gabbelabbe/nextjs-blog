import { BarChart, XAxis, YAxis, Bar, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts'
import Layout from '../components/layout'
import { getGithubData } from '../lib/github'

export default function Chart({ postData }) {

  return (
    <Layout>
      <div style={{ height: 500 }}>
        <ResponsiveContainer height='100%' width='100%'>
          <BarChart data={postData} cursor='pointer'>
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

export async function getStaticProps() {
  const githubData = await getGithubData()
  const postData = []
  githubData.forEach((data) => {
    if (data.language) {
      const i = postData.findIndex(val => val.name === data.language)
      if (i !== -1) {
        postData[i].value += 1
      } else {
        postData.push({name: data.language, value: 1})
      }
    }
  })
  return {
    props: {
      postData
    }
  }
}