import React from 'react'

import Component from './index.js'

module.exports = React.createClass({
  getInitialState() {
    return {
      inputValue: '',
      checkboxChecked: false,
      isSubmitting: false,
    }
  },

  handleCheckboxChange() {
    const checkboxChecked = !this.state.checkboxChecked;

    this.setState({
      checkboxChecked,
    })
  },

  handleInputChange(event) {
    // strip non-digit characters
    const inputValue = event.target.value.replace(/\D/g, '');

    this.setState({
      inputValue,
    })
  },

  handleSubmitClick() {
    this.setState({
      isSubmitting: true,
    })
  },

  render: function () {
    return <Component {...this.state}
      onSubmitClick={ this.handleSubmitClick }
      onInputChange={ this.handleInputChange }
      onCheckboxChange={ this.handleCheckboxChange } />
  }
})
