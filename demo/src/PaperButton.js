import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PaperButton.css'

export default class PaperButton extends Component {

  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    tool: PropTypes.string.isRequired,
  }

  handleClick = () => {
    this.props.onClick(this.props.tool)
  }

  render() {
    const { active, children, tool, ...rest } = this.props
    const className = `PaperButton ${active?'PaperButton-active':''}`
    return (
      <button {...rest} className={className} onClick={this.handleClick}>
        {children}
      </button>
    )
  }

}
