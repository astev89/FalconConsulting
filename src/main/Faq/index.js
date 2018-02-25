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
            What is difficulty in regards to mining?
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

        <div className="faq-block">
          <h3 className="faq-block__heading">
            How often do I get paid?
          </h3>
          <p className="faq-block__text">
            All payments are sent directly to your wallet of choice every 2nd and 4th Friday of the month.
          </p>
        </div>

        <div className="faq-block">
          <h3 className="faq-block__heading">
            Where do I set up my wallet to receive payment?
          </h3>
          <p className="faq-block__text">
            We recommend our customers to set up a wallet on <a href="http://www.gdax.com" target="_blank">GDAX.com</a>.
            If you are uncomfortable with setting up your wallet our Team will be more than happy to walk you through the process.
          </p>
        </div>

         <div className="faq-block">
          <h3 className="faq-block__heading">
            Does Falcon Consulting take credit cards?
          </h3>
          <p className="faq-block__text">
            No, currently at this time we do not accept credit cards. All funds must be wire transferred Campione Law P.A. escrow account.
          </p>
        </div>

          <div className="faq-block">
          <h3 className="faq-block__heading">
            What influences my rate of coin generation?
          </h3>
          <p className="faq-block__text">
            The level of mining difficulty relative to the coin being mined, hashes per second, and a little bit of luck.
          </p>
        </div>

          <div className="faq-block">
          <h3 className="faq-block__heading">
            What is BlockChain?
          </h3>
          <p className="faq-block__text">
            A Blockchain is a log of transactions or data that is shared and verified by everyone participating in the network.
            Simply put, it's a distributed database.
          </p>
        </div>

            <div className="faq-block">
          <h3 className="faq-block__heading">
            What are crypto currencies?
          </h3>
          <p className="faq-block__text">
            Crypto currencies are digital currencies that vary in functionality in which encryption techniques are used to control the generation
            of coins. This new form of currency operates independently from any trust or central banking system.
          </p>
        </div>

        <div className="faq-block">
          <h3 className="faq-block__heading">
            What is difficulty level?
          </h3>
          <p className="faq-block__text">
            Difficulty is a measurement of how difficult it is to find a hash or solution below a given target. Difficulty level is ever changing and can
            increase or decrease over time.
          </p>
        </div>

         <div className="faq-block">
          <h3 className="faq-block__heading">
            What is mining?
          </h3>
          <p className="faq-block__text">
            Mining is the process of collecting transaction data, verifying transactions, putting that data in a block and appending it to the block
            chain. Simply, mining is solving a very long math problem.
          </p>
        </div>

      </main>
    )
  }
}
