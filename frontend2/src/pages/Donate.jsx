import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PaystackPop from '@paystack/inline-js'

const Donate = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const paywithpaystack = (e) => {
    e.preventDefault()
    const handler = new PaystackPop()
    handler.newTransaction({
      key: 'pk_live_00ef1cbb0be1ce915a23988ba55bc1cd1d0694fc',
      amount: amount * 100,
      email: email,
      phone: phoneNumber,
      // onSuccess(transaction) {
      //   let message = `Payment complete! Reference: ${transaction.reference}`
      //   alert(message)
      // },
      // onCancel() {
      //   alert('Payment cancelled')
      // },
    })
    setAmount('')
    setName('')
    setEmail('')
    setPhoneNumber('')
  }

  const style = {
    input:
      'block w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none',
    button:
      'block w-full px-4 py-2 bg-[#AB54DE] text-white rounded-md hover:bg-yellow-300 hover:text-[#AB54DE]',
  }

  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="grid justify-center align-center w-screen h-full pt-[120px] pb-10">
        <h1 className="text-center text-black text-[27px] my-4 font-[600]">
          Make Your Donation Here
        </h1>
        <div className="max-w-md max-auto my-4 w-screen">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <input
              type="text"
              value={name}
              placeholder="Full Name"
              className={style.input}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              value={email}
              placeholder="Email"
              className={style.input}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex">
              {' '}
              <span className="mr-[-50px] z-10 px-2 py-2">NGN</span>
              <input
                type="number"
                value={amount}
                placeholder="Amount"
                className={`pl-[48px] ${style.input}`}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>

            <input
              type="text"
              value={phoneNumber}
              placeholder="Phone Number (optional)"
              className={style.input}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              className={style.button}
              onClick={(e) => paywithpaystack(e)}
            >
              {' '}
              Donate
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Donate
