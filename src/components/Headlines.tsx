import React from 'react'
import { Props } from '../App'

const Headlines: React.FC<Props> = ({ articles }) => {
  return (
    <section>
        {articles.map(article => (
        <div key={article.title}>
          {article.title}
          <img src={article.urlToImage} alt={article.title} />
          {article.publishedAt}</div>
      ))}
    </section>
  )
}

export default Headlines