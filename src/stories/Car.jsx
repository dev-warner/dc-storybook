import React, { useState } from 'react'
import useInterval from 'use-interval'
import Typing from 'react-typing-animation'

import { useTimeout } from 'usehooks-ts'
import { Game } from './Game'

import './ampy.css'

const states = ['Dummy', 'JPEGDummy', 'MoreJPEGDummy', 'GAME']

export const Car = (props) => {
  const [state, setState] = useState(states[0])
  const [time, setTime] = useState(5000)
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

  const Comps = new Map([
    ['Dummy', () => <Dummy />],
    ['JPEGDummy', () => <div>JPEGDummy</div>],
    ['MoreJPEGDummy', () => <div>MoreJPEGDummy</div>],
    ['GAME', (props) => <Game {...props} />],
  ])

  useInterval(
    () => {
      const index = states.indexOf(state) + 1

      if (index >= states.length) {
        setPlaying(false)
        return
      }

      setTime(time / 2)
      setState(states[index])
    },
    isPlaying ? time : null,
  )

  const Comp = Comps.get(state)

  return <Comp {...props} />
}
