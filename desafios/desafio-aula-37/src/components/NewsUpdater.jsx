import { useState, useEffect } from "react";
import './NewsUpdater.css'

function NewsUpdater() {
  const [news, setNews] = useState(null);
  const [random, setRandom] = useState(1);

  useEffect(() => {
    const fetchNews = async (id) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setNews(data);
        console.log("Mudando notícia");
      } catch (error) {
        console.error("Erro ao buscar notícia:", error);
      }
    };

    fetchNews(random);

    const change = setInterval(() => {
      setRandom((prevRandom) => prevRandom + 1);
    }, 30000);

    return () => {
      setNews(null);
      clearInterval(change);
    };
  }, [random]);

  return (
    <div className="news-container">
      {news ? (
        <div className="news-card">
          <h2 className="news-title">{news.title}</h2>
          <p className="news-body">{news.body}</p>
        </div>
      ) : (
        <p className="loading">Carregando...</p>
      )}
    </div>
  );
}

export default NewsUpdater;