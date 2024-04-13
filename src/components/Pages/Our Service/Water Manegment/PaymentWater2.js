import React from 'react'

export default function PaymentWater2() {
  return (
    <div className="container mt-5">
    <div className="border p-4 rounded">
      <h2>Water Payment Gateway</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cardHolderName">Card Holder Name</label>
          <input
            type="text"
            className="form-control"
            id="cardHolderName"
            name="cardHolderName"
            value={paymentDetails.cardHolderName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              className="form-control"
              id="expiryDate"
              name="expiryDate"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="col">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              className="form-control"
              id="cvv"
              name="cvv"
              value={paymentDetails.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Make Payment</button>
      </form>
      <p className="mt-3">
        Return to form? <Link to="/waterreportform">Click here</Link>.
      </p>
    </div>
  </div>
  )
}
