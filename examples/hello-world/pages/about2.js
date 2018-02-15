import React from 'react'
import Router from 'next/router'

class AboutTwo extends React.Component {
  render () {
    const url = '/about2?key=value'
    return (
      <div>
        <div>About 2</div>
        <button
          onClick={() => Router.replace(url, url, { shallow: true })}
        >
          Click me to set url
        </button>
      </div>)
  }
}

export default AboutTwo
