import React from 'react'
import './search-page.scss'

import {Redirect} from 'react-router-dom'

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      desired_value: 5000,
      desired_time: 30,
      file: '',
    }
  }

  getValueOptions = () => {
    return [
      {label: 'R$ 3.000,00', value: 3000},
      {label: 'R$ 5.000,00', value: 5000},
      {label: 'R$ 7.000,00', value: 7000},
      {label: 'R$ 10.000,00', value: 10000},
    ]
  }

  getTimeOptions = () => {
    return [{label: '30 Dias', value: 30}, {label: '45 Dias', value: 45}, {label: '60 Dias', value: 60}]
  }

  onChange = ({target}) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  onUpload = () => {}

  onProceed = () => {
    this.setState({proceed: true})
  }

  render() {
    return (
      <div className="page__search">

       Teste
      </div>
    )
  }
}

export default SearchPage
