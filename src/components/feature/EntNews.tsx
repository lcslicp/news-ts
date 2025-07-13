import React, { useState, useEffect } from "react";
import { entNews } from "../../Pages/Home";
import axios from "../../api/axios";
import styles from "../../css/feature/EntNews.module.css";

const Carousel: React.FC<entNews> = ({ entertainmentnews }) => {
  const [sodoku, setSodoku] = useState<(number | null)[][]>([]);
  const [userAnswers, setUserAnswers] = useState<(number | null)[][]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [sodokuMessage, setSodokuMessage] = useState<string>("Hold on, we're generating the puzzle ⏳");
  const [cta, setCTA] = useState<String>('Check Your Answers');
  const baseURL = 'https://nownews-server.onrender.com/api';


  const handleSodokuInput = (rowIndex: number, colIndex:number, value: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[rowIndex] = [...userAnswers[rowIndex]];
    newAnswers[rowIndex][colIndex] = value === '' ? null : parseInt(value);

    setUserAnswers(newAnswers);
  }

  const checkSodokuAnswers = async() => {
    try {
      const response = await axios.post(`${baseURL}/check-solution`, {
        userSolution: userAnswers
      })

      setSodokuMessage(response.data?.message)
      setCTA(response.data?.button)

      if (!response.data?.correct) {
        setTimeout(() => {
          setCTA('Check Answers')
        }, 10000)
      } else {
        setIsCorrect(true)
      }
    } catch (error) {
      console.log(error);
      setError(true)
    }
  }

  const fetchSodokuPuzzle = async () => {
    try {
      const puzzleRes = await axios.get(`${baseURL}/sodokupuzzle`, {
        withCredentials: true
      })

      setSodoku(puzzleRes.data.puzzle)
      setSodokuMessage("Try it out, let's see what you got! 😉")
      
    } catch (error) {
      console.log(error);
      setError(true)
    }
  }

  const generateNewPuzzle = async () => {
    setCTA('...')
    setIsCorrect(false)
    setSodokuMessage('')

    try {
      await fetchSodokuPuzzle()
    } catch (error) {
      console.error(error)
      setSodokuMessage('Something went wrong 😵');
    }
    setCTA('Check Answers')
  }

  useEffect(() => {
    fetchSodokuPuzzle();
  }, [])

  useEffect(() => {
    if (sodoku.length > 0) {
      const emptyGrid = sodoku.map((row) =>
      row.map(cell => (cell !== null ? cell : null)))
      
      setUserAnswers(emptyGrid);
    }
    
  }, [sodoku]);

  return (
    <section>
      <div className={styles.sectionTitle}>
        <h4>Entertainment News</h4>
        <span></span>
      </div>
      <div className={styles.container}>
        <div className={styles.articles}>
          {entertainmentnews.map((news, index) => {
            let publishedAt = new Date(news.publishedAt);
            let date = publishedAt.toLocaleDateString("default", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });
            let fixOrphan = (text: string) => {
              if (text == null) return text;
              const lastSpaceIndex = text.trim().lastIndexOf(" ");
              if (lastSpaceIndex === -1) return text;

              return (
                text.slice(0, lastSpaceIndex) +
                "\u00A0" +
                text.slice(lastSpaceIndex + 1)
              );
            };
            let description = fixOrphan(news.description);

            return (
              <div key={index} className={styles.article}>
                <img src={news.urlToImage} alt={news.title} />
                <span className={styles.date}>{date} &nbsp; | &nbsp; {news.author}</span>
                <a href={news.title} target="_blank">
                  <h5 className={styles.title}>{news.title}</h5>
                </a>
                <p lang="en" className={styles.articleDesc}>{description}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.puzzleContainer}>
          <div className={styles.textUpper}>
            <h5>Sodoku Puzzle</h5>
            <p className={styles.puzzleDesc}>Fill in the empty cells so that each row, each column, and each 3×3 grid contains the numbers 1 to 9 — with no repeats. Use logic, not guesswork!</p>
          </div>
          
          <div className={styles.puzzleOuter}>
            {sodoku.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.puzzleRow}>
                {row.map((num, colIndex) => (
                  <span key={colIndex} className={styles.puzzleCell} >
                    {num !== null ? (
                      num
                    ) : (
                      <input type='text'
                      inputMode='numeric'
                      maxLength={1}
                      pattern='[1-9]'
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/[^1-9]/g, '').slice(0, 1);
                      }}
                     className={styles.puzzleCell}
                     value={userAnswers[rowIndex]?.[colIndex] ?? ''}
                     onChange={(e) => handleSodokuInput(rowIndex, colIndex, e.target.value)}></input>
                    )}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <div className={styles.textLower}>
          <p>{sodokuMessage}</p>
          <button className={styles.btn} onClick={isCorrect ? generateNewPuzzle : checkSodokuAnswers}>{cta}</button>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
