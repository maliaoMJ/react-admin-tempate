import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Button = styled.div`
  width: 180px;
  height: 40px;
  background: red;
  color: #fff;
  text-align: center;
  line-height: 40px;
`
class Analyse extends React.Component {
  render() {
    return (
      <div>
        <Button>styledComponents</Button>
      </div>
    )
  }
}

export default connect()(withRouter(Analyse))
