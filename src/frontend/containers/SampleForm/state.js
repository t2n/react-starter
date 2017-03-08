import React from 'react'

import Component from './index.js'

module.exports = React.createClass({
  getInitialState() {
    return {
      inputValue: '',
      submitDisabled: true,
      checkboxChecked: false,
      isSubmitting: false,
    }
  },

  handleCheckboxChange() {
    const checkboxChecked = !this.state.checkboxChecked;
    const submitDisabled = !this.state.inputValue || !checkboxChecked;

    this.setState({
      submitDisabled,
      checkboxChecked,
    })
  },

  handleInputChange(event) {
    // strip non-digit characters
    const inputValue = event.target.value.replace(/\D/g, '');
    const submitDisabled = !inputValue || !this.state.checkboxChecked;

    this.setState({
      inputValue,
      submitDisabled,
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
