import React, {Component} from 'react'
import PortalComponent from 'components/PortalComponent'

import './_offer.scss'

export default class Offer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <main className="offer">
        <PortalComponent>
          <h2 className="falcon-header__heading-2">
            Our Offer
          </h2>
          <p className="falcon-header__subtext">
            Why you should invest with Falcon Consulting 
          </p>
        </PortalComponent>

        <div className="offer-block">
          <h3 className="offer-block__heading">
            Our Unique Approach
          </h3> 
          <hr/>
          <p className="offer-block__text">
            At Falcon Consulting our approach to investing in mining is different from traditional tactics. Other cloud mining solutions want you to 
            rent the hardware that you never get to see, and have to base so much of the decision on blind trust. At Falcon Consulting we use your investment 
            to purchase hardware that belongs to YOU! 

            We offer a generous buy back program, in purchasing the hardware back from you. First round investors will recieve 75% of 
            their investment returned back to them buy the end of their contract. We have chosen this business plan to better insure a safer investment 
            model for our investors.
            
            {/*This inludes */}
          </p> 
        </div> 


        <div className="offer-block">
          <h3 className="offer-block__heading">
            Your Mining Profitabliity  
          </h3> 
          <hr/>
          <p className="offer-block__text">
          We are 100% committed to delivering a VERY profitable investment to all of our customers. The hardware you purchase through us is absolutely 
          top of the line which ensures consistency for the duration of your contract. All of the details regarding the hardware are presented to our 
          investors upon meeting with our team.

          HERE is OUR ESTIMATED HASHING POWER PER PLAN:
            <ul> 
              <li> Tier 1 $15,000
                700 MH/s
              </li>
              <li> Tier 2 $100,000
                5,700 MH/s
              </li>
              <li> Tier 3 $250,000
                14,000 MH/s
              </li>
            </ul>
          we always encourage our customers to do their own research and use <a href="https://www.cryptocompare.com/mining/calculator/eth"> mining profitability calculators to determine ROI </a>
          </p> 

        </div> 
       
        <div className="offer-block">
          <h3 className="offer-block__heading">
            Mining With Us Is Easy
          </h3> 
          <hr/>
          <p className="offer-block__text">
          When you enter into a contract with us you can forget about all the headaches that come with setting up and maintaining your hardware; we 
          take care of everything for you. No worrying about loud, hot machines running up your energy bill or learning the complexities of mining 
          software. Falcon Consulting has you covered!

          Falcon Consulting also provides real time data on your hardware including solutions per second, temperatures, amount you have mined, etc. In addition to that, we cover all of your maintenance
          and repair costs at no additional expense to you and even offer a buy back program on your purchased hardware to help you hit your R.O.I even
          faster! 
          </p> 
        </div> 


        <div className="offer-block">
          <h3 className="offer-block__heading">
            We Support Altcoin Mining
          </h3> 
          <hr/>
          <p className="offer-block__text">
            There is immense value associated with the altcoin cryptocurrency market. As such, we understand that it is likely that our customers
            will want to get involved. That is why we offer a means to pivot bewteen the most profitable currencies to maximize profitablity.
          </p> 
        </div> 

        <div className="offer-block">
          <h3 className="offer-block__heading">
            Our Promise To You
          </h3>
          <hr/>
          <p className="offer-block__text">
            Most of our initial investors have worked with one of our tem members in the past and have trusted our expertise to give them results. 
            This same foundation of trust is the pillar of Falcon Consulting. 
            We value each and every one of our investors and stay 100% committed to complete transparency with them. 
            If you feel that you need further explanation of mining or blockchain technology, 
            the impressive value attached to it or how it will revolutionize the future, 
            our team will be more than happy to consult you in person or virtually through Google Hangouts.
          </p> 
        </div>

      </main>
    )
  }
}
