import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { title: 'Email', value: 'Right2EducationCSF@gmail.com', icon: '✉️' },
    { title: 'Phone', value: '+234 806 1634 399', icon: '📞' },
    {
      title: 'Address',
      value: '3 Taiwo Estate off Afric road Iponri Surulere',
      icon: '📍',
    },
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-[#AB54DE] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            We'd love to hear from you. Get in touch with us.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-1 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-8">
            {/* Contact Details */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              {contactInfo.map((info, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">{info.icon}</span>
                    <h3 className="font-semibold">{info.title}</h3>
                  </div>
                  <p className="text-gray-600 ml-9">{info.value}</p>
                </div>
              ))}
            </div>

            {/* Office Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
              {officeHours.map((schedule, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-semibold">{schedule.day}</h3>
                  <p className="text-gray-600">{schedule.hours}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#AB54DE] text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactPage
