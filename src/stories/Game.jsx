import { Component, useState, useEffect, useCallback } from 'react'
import AmpImage from './AmpImage'
import PropTypes from 'prop-types'

import useInterval from 'use-interval'

import './App.css'

export function Game({
  background,
  logo,
  headerColor,
  tabs = [],
  answers = [],
}) {
  const [state, setState] = useState({
    isTrue: false,
    score: 0,
    time: 60,
  })
  const [isPlaying, setPlaying] = useState(null)

  useInterval(
    () => {
      statusChange()
    },
    isPlaying ? 1000 : null,
  )

  const statusChange = useCallback(() => {
    const { time } = state
    if (time !== 0) {
      setState({ ...state, time: state.time - 1 })
    } else {
      setPlaying(false)
      setState({ isTrue: true })
    }
  }, [state])

  const clickTab = useCallback(
    (tabId) => {
      setState({ ...state, category: tabId })
    },
    [state],
  )

  const imageClick = useCallback(
    (name) => {
      const { image: stateImage } = state
      const imageValue = answers.find(
        (eachValue) => eachValue.image.id === name,
      )
      if (stateImage.id === imageValue.image.id) {
        const img = answers[Math.floor(Math.random() * answers.length)].image
        setState({
          ...state,
          score: state.score + 1,
          image: img,
        })
      } else {
        setPlaying(false)
        setState({ isTrue: true, score: state.score })
      }
    },
    [state, answers],
  )

  const playAgain = useCallback(() => {
    if (!answers.length) {
      return
    }
    setState({
      score: 0,
      image: answers[0].image,
      category: answers[0].tabId,
      background: background,
      isTrue: false,
      time: 60,
    })
    setPlaying(true)
  }, [answers])

  useEffect(() => {
    if (!answers.length) {
      return
    }
    setState({
      isTrue: false,
      score: 0,
      time: 60,
      image: answers[0].image,
      category: answers[0].tabId,
      background: background,
    })

    setPlaying(true)
  }, [answers, tabs, background])

  const { isTrue, category, score, time, image } = state

  if (!answers.length) {
    return <div>Loading...</div>
  }

  const thumbnailList = answers.filter(
    (eachValue) => eachValue.tabId === category,
  )

  return (
    <div className="main-container">
      <nav className="nav-bar" style={{ backgroundColor: headerColor || null }}>
        <AmpImage
          className="top-image"
          alt="website logo"
          image={logo}
          fallback={
            'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png'
          }
        />
        <ul className="score-div">
          <li className="score-name">
            <p>
              Score: <span className="score">{score}</span>
            </p>
          </li>
          <li className="score-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-img"
            />
            <p className="time">{time} sec</p>
          </li>
        </ul>
      </nav>
      <div
        className="content-div"
        style={{
          backgroundImage: state.background
            ? `url(https://${state.background.defaultHost}/i/${state.background.endpoint}/${state.background.name})`
            : `url(""https://assets.ccbp.in/frontend/react-js/match-game-bg.png""})`,
        }}
      >
        {!isTrue && (
          <div className="first-div">
            <AmpImage image={image} className="big-image" alt="match" />
            <ul className="tab-elements">
              {tabs.map((eachValue) => (
                <li key={eachValue.tabId}>
                  <button
                    type="button"
                    className={`tab-button ${
                      category === eachValue.tabId ? 'highlight-text' : ''
                    }`}
                    onClick={() => clickTab(eachValue.tabId)}
                  >
                    {eachValue.displayName}
                  </button>
                </li>
              ))}
            </ul>
            <ul className="thumbnail-images">
              {thumbnailList.map((eachObject) => (
                <li key={eachObject.image.id}>
                  <button
                    type="button"
                    className="image-button"
                    onClick={() => imageClick(eachObject.image.id)}
                  >
                    <AmpImage
                      image={eachObject.image}
                      className="thumbnail-image"
                      alt="thumbnail"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isTrue && (
          <div className="second-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              className="trophy-image"
              alt="trophy"
            />
            <p className="main-heading">YOUR SCORE</p>
            <p className="your-score">{score}</p>
            <button type="button" className="play-button" onClick={playAgain}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                className="restart"
                alt="reset"
              />
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

Game.propTypes = {
  background: PropTypes.objectOf({
    id: PropTypes.string,
    name: PropTypes.string,
    endpoint: PropTypes.string,
    defaultHost: PropTypes.string,
    _meta: PropTypes.objectOf(PropTypes.any),
  }),
  logo: PropTypes.objectOf({
    id: PropTypes.string,
    name: PropTypes.string,
    endpoint: PropTypes.string,
    defaultHost: PropTypes.string,
    _meta: PropTypes.objectOf(PropTypes.any),
  }),
  headerColor: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.objectOf({
      tabId: PropTypes.string,
      displayName: PropTypes.string,
      _meta: PropTypes.objectOf(PropTypes.any),
    }),
  ),
  answers: PropTypes.arrayOf(
    PropTypes.objectOf({
      image: PropTypes.objectOf({
        id: PropTypes.string,
        name: PropTypes.string,
        endpoint: PropTypes.string,
        defaultHost: PropTypes.string,
        _meta: PropTypes.objectOf(PropTypes.any),
      }),
      tabId: PropTypes.string,
      _meta: PropTypes.objectOf(PropTypes.any),
    }),
  ),
  _meta: PropTypes.objectOf(PropTypes.any),
}
