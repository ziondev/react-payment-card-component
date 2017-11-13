import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import banksLogos from './images/banks'
import './PaymentCard.css'

const formatCardNumber = number => number.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ')

const PaymentCard = (props) => {
  const {
    bank,
    type,
    number,
    cvv,
    expiration,
    holderName,
    brand,
    flipped,
  } = props

  return (
    <div className="cardWrapper">
      <div className={classNames(
        'card',
        bank,
        type,
        { flipped },
      )}
      >
        <div className="front">
          <img src={banksLogos[bank]} alt={bank} className="logo" />
          <div className="chip">
            <div className="horizontalLine" />
            <div className="verticalLine" />
          </div>
          <div className="number">
            {formatCardNumber(number)}
          </div>
          <div className="expiration">
            {expiration}
          </div>
          <div className="holderName">
            {holderName}
          </div>
          <div className={`brand ${brand}`} />
        </div>
        <div className="back">
          <div className="cvv">
            {cvv}
          </div>
        </div>
      </div>
    </div>
  )
}

PaymentCard.propTypes = {
  bank: PropTypes.oneOf([
    'default',
    'nubank',
  ]),
  type: PropTypes.string,
  brand: PropTypes.oneOf([
    'mastercard',
    'visa',
    'hipercard',
  ]),
  number: PropTypes.string,
  cvv: PropTypes.string,
  holderName: PropTypes.string,
  expiration: PropTypes.string,
  flipped: PropTypes.bool,
}

PaymentCard.defaultProps = {
  bank: 'default',
  type: '',
  brand: 'mastercard',
  number: '•••• •••• •••• ••••',
  cvv: '•••',
  holderName: 'Nome Completo',
  expiration: 'MM/AA',
  flipped: false,
}

export default PaymentCard
