import React from 'react'
import PortalComponent from 'components/PortalComponent'

import './_plans.scss'

function buildTier(tier, tierName, cost, returnVal) {
  return (
    <section className="falcon-plans__tier">
      <span className="falcon-plans__tier-limited">
        Limited space available
      </span>
      <div className="falcon-plans__tier-heading">
        <h1>{tier}</h1>
        <p>{tierName}</p>
      </div>
      <ul className="falcon-plans__tier-pricing">
        <li className="price">
          {cost}
        </li>
        <li className="detail">
          {returnVal}
        </li>
        <li className="detail">
          2 Year Mining Contract *
        </li>
        <li className="detail">
          (Mining begins after investor hardware has been purchased)
        </li>
        <li className="detail">No maintenance fees</li>
      </ul>
      <a className="falcon-plans__tier-link" href="#contract">Plan Details</a>
    </section>
  )
}

export default function Plans() {
  return (
    <main className="falcon-plans">
      <PortalComponent>
        <h2 className="falcon-header__heading-2">
          Our Plans
        </h2>
        <p className="falcon-header__subtext">
          Our plans range from Tier 1 to Tier 4.
          <br/> All plans include a 6 month buy back period.
        </p>
      </PortalComponent>
      {buildTier('Tier 1', 'Small', '$15,000', '@ 25% return of respective revenue')}
      {buildTier('Tier 2', 'Substantial', '$75,000', '@ 30% return of respective revenue')}
      {buildTier('Tier 3', 'Large', '$200,000', '@ 35% return of respective revenue')}
      {buildTier('Tier 4', 'X Large', 'Email For Details', 'Custom respective return')}
      <div className="contract" id="contract">
        <p className="contract-header">
          Contract Information
         
          <br/> no maintenance fees
          <br/> no hardware setup
          <br/> no excessive energy bill
          <br/> no out of control heating problems
          <br/> customer owns all the hardware for the duration of the contract. By the end of the your 2 year contract falcon consulting will
          purchased your hardware back from you at 75% cost. 
        </p>
      </div>
    </main>
  )
}
