import { useState, useEffect } from 'react'
import './NewsUpdater.css'

function NewsUpdater() {
  const [newsList, setNewsList] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()
        setNewsList(data.slice(startIndex, startIndex + 5))
        setLoading(false)
      } catch(error) {
        console.error("Erro ao buscar noticias:", error)
      }
    }

    fetchNews();

    const interval = setInterval(() => {
      setStartIndex((prevIndex) => prevIndex + 5 )
      setLoading(true)
      fetchNews()
      console.log('Novas Mensagens...')
    }, 30000)

    return () => clearInterval(interval)
  }, [startIndex])

  return (
    <div className="news-container">
      {loading ? (
        <p className="loading">Carregando...</p>
      ) : (
        newsList.map((news) => (
          <div key={news.id} className="news-card">
            <h2 className="news-title">{news.title}</h2>
            <p className="news-body">{news.body}</p>
          </div>
        ))
      )}
    </div>
  )

}

export default NewsUpdater