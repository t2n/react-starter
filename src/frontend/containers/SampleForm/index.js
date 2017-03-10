import React from 'react'

module.exports = function SampleForm (props) {
  const {
    inputValue,
    onInputChange,

    checkboxChecked,
    onCheckboxChange,

    isSubmitting,
    onSubmitClick,
  } = props;

  const submitDisabled = !inputValue || !checkboxChecked;

  return (<form>
    <input type="text"
      value={ inputValue }
      onChange={ onInputChange } />

    <input type="checkbox"
      checked={ checkboxChecked }
      onClick={ onCheckboxChange } />

    { isSubmitting ? <span>Submitting...</span> : <input type="button"
      disabled={ submitDisabled }
      onClick={ onSubmitClick } /> }
  </form>)
}
