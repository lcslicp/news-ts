import React from 'react'
import { Props } from '../App'

const Headlines: React.FC<Props> = ({ articles }) => {
  return (
    <section>
        {articles.map(article => (
        <li key={article.title}>
          {article.title}</li>
      ))}
    </section>
  )
}

export default Headlines