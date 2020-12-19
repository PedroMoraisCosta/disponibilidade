import React, { Component } from 'react'
import Container from './BookingContainer'
import { connect } from 'react-redux'
import { FetchData, Bdelete } from '.././../../redux/actions/booking'

class Booking extends Component {
  // componentDidMount () {
  //   this.props.FetchData()
  // }
  //   deleteCustomer (customer) {
  //     this.props.deleteCustomer(customer)
  //   }

  render () {
    if (this.props.isLoading) {
      return (
        <div className='alert alert-info alert-dismissible fade show'>
          <h1>Loading...</h1>
        </div>
      )
    } else if (this.props.hasErrored) {
      return (
        <div className='alert alert-danger alert-dismissible fade show'>
          <h1>Falha ao ler os dados: {this.props.errorMessage}</h1>
        </div>
      )
    } else {
      return (
        <div>
          <Container
            customers={this.props.customers}
            booking={this.props.booking}
            delete={book => {
              this.props.Bdelete(book)
            }}
          />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    customers: state.customers.data,
    booking: state.booking.data,
    hasErrored: state.booking.hasErrored,
    isLoading: state.booking.isLoading,
    errorMessage: state.booking.errorMessage
  }
}

// function loadData (booking) {
//   // wait for both retrieves to finish when server side renderings
//   const prom1 = booking.dispatch(FetchData())
//   return Promise.all([prom1])
// }

export default {
  component: connect(mapStateToProps, { FetchData, Bdelete })(Booking)
  
}