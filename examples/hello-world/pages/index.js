import React from 'react'
import Link from 'next/link'
import redirect from '../redirect'

class Index extends React.Component {
  static async getInitialProps (ctx) {
    const { res } = ctx
    return redirect(res, '/about2')
  }

  render () {
    return (<div>Hello World. <Link href='/about'><a>About</a></Link></div>)
  }
}

export default Index
