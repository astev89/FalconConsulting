import {Component} from 'react'
import ReactDOM from 'react-dom'


export default class PortalComponent extends Component {
  constructor(props) {
    super(props)

    this.el = document.createElement('div')
    this.el.className = 'falcon-heading'
    this.root = null
  }

  componentDidMount() {
    const [modalRoot] = document.getElementById('root').getElementsByClassName('portal-root')
    modalRoot.appendChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}