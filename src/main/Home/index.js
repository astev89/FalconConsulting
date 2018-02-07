import React, {Component} from 'react'
import './_home.scss'
export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="falcon-home">
        <h1 className="falcon-home__heading">What is a 'Cryptocurrency'?</h1>
        <p>A cryptocurrency is a digital or virtual currency designed to work as a means of exchange between any number of parties.</p>

        <h2 className="falcon-home__heading">What is mining?</h2>
        <p>Some mining content here.</p>

        <h3 className="falcon-home__heading">How much can I make?</h3>
        <p>Some profitability content here.</p>

        <h4>Why invest now?</h4>
        <p>Reasons right here.</p>
        {/* Loading bar here: indicates order completion from investors */}
        {/* Ready to start generating your own wealth today? Sign up now  */}
      </div>
    )
  }
}