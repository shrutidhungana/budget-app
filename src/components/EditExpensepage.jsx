import React from 'react'
import { connect } from 'react-redux'

const EditExpensepage = (props) => {
  return (
      <div>
          EditExpensepage with the id of {props.match.params.id}
      </div>
  )
}



export default connect() (EditExpensepage)