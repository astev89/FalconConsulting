import React, {Component} from 'react'
import PortalComponent from 'components/PortalComponent'

import './_faq.scss'

export default class Faq extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <main className="faq">
        <PortalComponent>
          <h2 className="falcon-header__heading-2">
            FAQ
          </h2>
          <p className="falcon-header__subtext">
            Frequently Asked Questions
          </p>
        </PortalComponent>
        <div className="faq-block">
          <h3 className="faq-block__heading">
            Why invest now?
          </h3>
          <p className="faq-block__text">
            The sooner you invest the sooner you can start mining and generating crypto! 
            This means you get more for you buck in terms of difficulty level and current market value of the coin
            being mined. Early Investors also have smaller investment requirements.
          </p> 
        </div> 

        <div className="faq-block">
          <h3 className="faq-block__heading">
            What is difficulty?
          </h3>
          <p className="faq-block__text">
            Difficulty is the measure of how challenging it is to generate a solution to the mining "puzzle" that will in turn generate a
            coin once solved.
          </p> 
        </div> 

        <div className="faq-block">
          <h3 className="faq-block__heading">
            What if I don't have enough funds?
          </h3>
          <p className="faq-block__text">
            Don't have the funds, but know someone who might? We offer a very rewarding referral program for any investor you send our way! 
            These referral fees start at 2% and cap at 5% and are sent every payout your referral gets paid!
          </p> 
        </div> 

        <div className="faq-block">
          <h3 className="faq-block__heading">
            2 to 5 percent of what exactly?
          </h3>
          <p className="faq-block__text">
            We are referring to 2 to 5 percent of all of the crypto mined from Falcon Consulting's percentage of the contract.
          </p> 
        </div> 
      </main>
    )
  }
}
