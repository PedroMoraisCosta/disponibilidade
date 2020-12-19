import React, { Component } from 'react'
import BookingRec from '../booking/BookingRec'

class HomeCalendar extends Component {
  delete = book => {
    return this.props.delete(book)
  }

  render () {
    const itemComponents = this.props.booking.map(Rec => {
      return (
        <BookingRec
          key={Rec.id}
          book={Rec}
          customers={this.props.customers}
          delete={book => {
            return this.props.delete(book)
          }}
        />
      )
    })

    return (
      <div className='events-customers-list container-fluid js-list-view active'>
        {itemComponents.length ? (
          itemComponents
        ) : (
          <div className='emptyList'>
            <p>Sem marcacoes para este dia</p>
          </div>
        )}
      </div>
    )
  }
}

export default HomeCalendar