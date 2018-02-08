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
        <h1 className="falcon-home__heading">Start Crypto Mining Today!</h1>
        <p className="falcon-home__subtext">
          At Falcon Consulting we provide one of the easiest, smartest and safest ways to enter the cryptocurrency space.
        </p>

        <h2 className="falcon-home__heading">What is mining?</h2>
        <p>Remove.</p>

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