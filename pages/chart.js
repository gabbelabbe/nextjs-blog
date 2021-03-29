import { BarChart, XAxis, YAxis, Bar, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts'
import Layout from '../components/layout'

export default function Chart() {

  return (
    <Layout>
      <div style={{ height: 500 }}>
        <ResponsiveContainer height='100%' width='100%'>
          <BarChart data={[{name: 'js', value: 10}, {name: 'ts', value: 5}, {name: 'ruby', value: 3}, {name: 'java', value: 0}]} cursor='pointer'>
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