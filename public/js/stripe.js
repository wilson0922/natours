import axios from 'axios'
import { showAlert } from './alert'
const Stripe = require('stripe')
const stripe = Stripe(
  'pk_test_51N60JzCKQnZMBL36F2mHQmTiuK1jDJTFklP6REPVNSD4e5q5mAAXqHsDPwGnZQr0IJd4d82q7s5X7iokObb1Hmcs00p9tdsbOj'
)

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    )
    console.log(session)
    // 2) Create checjout form + charge credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // })
    window.location.assign(session.data.session.url)
  } catch (err) {
    console.log(err)
    showAlert('error', err)
  }
}
