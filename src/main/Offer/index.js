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
            At Falcon Consulting we take an approach to investing in mining that has not been done before.
            Unlike other cloud mining solutions where the investor simply rents hardware that he/she never sees and has to base
            so much of the decision on blind trust, we use your investment to purchase hardware that belongs to YOU! Throughout the duration
            of your contract (which does not begin until your hardware arrives at our facility and is set up for you) you have 24 / 7 access 
            to a personal web dashboard that displays all of the statistics of your hardware in real time.
            This inludes solutions per second, temperatures, amount you have mined, etc. In addition to that, we cover all of your maintenance
            and repair costs at no additional expense to you and even offer a buy back program on your purchased hardware to help you hit your R.O.I even
            faster!
          </p> 
        </div> 


        <div className="offer-block">
          <h3 className="offer-block__heading">
            Your Mining Profitabliity  
          </h3> 
          <hr/>
          <p className="offer-block__text">
            We are 100% committed to delivering a profitable investment to all of our customers. The hardware you purchase through us is absolutely 
            top of the line which ensures a longer profitablity for the duration of your contract. All of the details regarding the hardware are 
            presented to our investors upon meeting with our team.
          </p> 
        </div> 
       
        <div className="offer-block">
          <h3 className="offer-block__heading">
            Mining With Us Is Easy
          </h3> 
          <hr/>
          <p className="offer-block__text">
            When you enter into a contract with us you can forget about all the headaches that come with setting up and maintenancing 
            mining rigs; we take care of everything for you. No worrying about loud, hot machines running up your energy bill or learning the
            complexities mining software. We even offer a personal web panel that you can use to keep track of all your hardware stats and 
            mined currency. 
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
            our team will be more than happy to consult you in person or virtually through Google.
          </p> 
        </div>

      </main>
    )
  }
}
