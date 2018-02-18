import React, {Component} from 'react'
import PortalComponent from 'components/PortalComponent'
import MailIcon from 'images/MailIcon'
import './_team.scss'

const members = [
  {
    imageUrl: 'https://s3.amazonaws.com/cdn.falconconsulting.com/stevenProfile.JPG',
    name: 'Steven Morales', 
    title: 'CEO', 
    desc: 'Works directly with our domestic and international investors and is in charge of policy-making as well as implementation of operations.'
  },
  {
    imageUrl: 'https://s3.amazonaws.com/cdn.falconconsulting.com/AaronProfile.jpg',
    name: 'Aaron Stevens',
    title: 'Lead Software Engineer',
    desc: 'Handles network infrastructure and product development.'
  },
  {
    imageUrl: '',
    name: 'Josh Jones',
    title: 'COO',
    desc: 'In charge of hardware evaluations/optimizations, development, planning and technical analysis.'
  }
]

export default class Team extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  
  buildMemberSection = (image, name, title, desc) => (
    <section className="member">
      <div className="member-img" style={{'background-image': `linear-gradient(-50deg, rgba(14, 86, 110, 0.2) 1%, rgba(21, 32, 114, 0.4) 100%), url(${image})`}} />
      <div className="member-details">
        <p className="member-details__name">{name}</p>
        <p className="member-details__title">{title}</p> 
        <p className="member-details__desc">{desc}</p> 
        <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top" className="mailicon">
          <MailIcon />
        </a>
      </div>
    </section>
  )

  mapMemberSections = (buildFunc, memberData) => {
    return memberData.map((member) => buildFunc(member.imageUrl, member.name, member.title, member.desc))
  }

  render() {
    return (
      <main className="team">
        <PortalComponent>
          <h2 className="falcon-header__heading-2">
            About Us
          </h2>
        </PortalComponent>
        <section className="team-section">
          <p className="team-section__about">
            The Falcon Consulting team came together in early 2017. 
            We are group of tech enthusiasts, programmers and marketers that have a passion for the innovation of blockchain technology.
            Our team is excited to offer our services and knowledge to investors and enthusiasts alike.
          </p>
          <div className="team-section__members">
            {this.mapMemberSections(this.buildMemberSection, members)}
          </div>
        </section>
      </main>
    )
  }
}
