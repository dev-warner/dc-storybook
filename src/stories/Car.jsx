import React, { useState } from 'react'
import useInterval from 'use-interval'
import Typing from 'react-typing-animation'

import { useTimeout } from 'usehooks-ts'
import { Game } from './Game'
import { Carousel } from './Carousel'

import './ampy.css'

const states = [
  'Dummy',
  'JPEGDummy',
  'MoreJPEGDummy',
  'EvenMoreJPEGDummy',
  'GAME',
]

export const Car = (props) => {
  const [state, setState] = useState(states[0])
  const [time, setTime] = useState(6000)
  const [isPlaying, setPlaying] = useState(false)

  const Dummy = () => {
    const [show, setShow] = useState(false)
    useTimeout(() => {
      setShow(true)
    }, 1000)

    useTimeout(() => {
      setShow(false)
    }, 6000)

    return (
      <div className="dummy">
        some comp
        {show && (
          <div className="ampy">
            <img src="https://cdn.media.amplience.net/i/ampeng/ampy" />

            <div className="speech-bubble">
              <Typing>
                <Typing.Delay ms={1000} />
                hello, you didn't think i'd let you use a carousel?
                <Typing.Delay ms={1000} />
                ... did you?
              </Typing>
            </div>
          </div>
        )}
      </div>
    )
  }

  const startPlaying = () => {
    setPlaying(true)
  }

  const Comps = new Map([
    [
      'Dummy',
      (props) => <Carousel {...props.propertyName1} onClick={startPlaying} />,
    ],
    [
      'JPEGDummy',
      () => (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            backgroundSize: 'cover',
            backgroundImage:
              'url("https://morejpeg.com/Image/JPEG/b75e2b13-6e5e-ec11-80f9-ba2c269a3d44")',
          }}
        ></div>
      ),
    ],
    [
      'MoreJPEGDummy',
      () => (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            backgroundSize: 'cover',
            backgroundImage:
              'url("https://morejpeg.com/Image/JPEG/39011b20-6e5e-ec11-80f9-ba2c269a3d44")',
          }}
        ></div>
      ),
    ],
    [
      'EvenMoreJPEGDummy',
      () => (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            backgroundSize: 'cover',
            backgroundImage:
              'url("https://morejpeg.com/Image/JPEG/6f81223d-6e5e-ec11-80f9-ba2c269a3d44")',
          }}
        >
          <Dummy />
        </div>
      ),
    ],
    [
      'GAME',
      (props) => {
        return <Game {...props.game} />
      },
    ],
  ])

  useInterval(
    () => {
      const index = states.indexOf(state) + 1

      if (index >= states.length) {
        setPlaying(false)
        return
      }

      setTime(time)
      setState(states[index])
    },
    isPlaying ? time : null,
  )

  const Comp = Comps.get(state)

  return <Comp {...props} />
}
