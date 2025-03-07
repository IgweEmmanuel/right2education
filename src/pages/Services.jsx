import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image1 from '../assets/person2.png'
import Image2 from '../assets/person4.jpeg'
import Image3 from '../assets/person5.jpg'
import ImpactVid from '../assets/impactvid2.mp4'

const ServicesPage = () => {
  const programs = [
    {
      title: 'After-School Support',
      description: 'Free tutoring and homework help for students.',
      features: [
        'One-on-one tutoring sessions',
        'Homework assistance',
        'Study skills development',
        'Safe learning environment',
      ],
      icon: '📚',
    },
    {
      title: 'Women Empowerment',
      description:
        'We nurture talent, build confidence, and open doors to opportunities for women from all backgrounds.',
      features: [
        'Professional skill development',
        'Leadership and confidence building',
        'Financial literacy training',
        'Career mentorship programs',
      ],
      icon: '💻',
    },
    {
      title: 'STEM Programs',
      description: 'Hands-on science and technology education for young minds.',
      features: [
        'Science experiments',
        'Coding workshops',
        'Robotics projects',
        'Math enrichment',
      ],
      icon: '🔬',
    },
    {
      title: 'Literacy Initiative',
      description: 'Reading and writing programs for all age groups.',
      features: [
        'Reading clubs',
        'Writing workshops',
        'ESL support',
        'Book distribution',
      ],
      icon: '📖',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent',
      content:
        "The after-school program has made such a difference in my daughter's confidence and grades.",
      image: Image1,
    },
    {
      name: 'Adewale Ogunleye',
      role: 'Student, Age 16',
      content:
        "The STEM program opened my eyes to new career possibilities. I'm now planning to study engineering.",
      image: Image2,
    },
    {
      name: 'Ebuka John',
      role: 'Program Graduate',
      content:
        'Thanks to the literacy program, I can now help my children with their homework and feel confident at work.',
      image: Image3,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <div className="bg-[#AB54DE] text-white py-24 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-2xl">
            Empowering through education: Creating opportunities and building
            brighter futures for all.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <span className="text-4xl mb-4 block">{program.icon}</span>
              <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
              <p className="text-gray-600 mb-6">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Stories Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Impact Stories</h2>
        <div className="flex justify-center">
          <video
            src={ImpactVid}
            controls
            autoPlay
            loop
            muted
            className="w-[100%] h-[80%]"
          ></video>
        </div>
        {/* <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Volunteer CTA Section */}
      <div className="bg-[#AB54DE] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-xl mb-8">
            Join our volunteer team and help transform lives through education
          </p>
          <div className="space-x-4">
            <button className="bg-white text-[#AB54DE] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Link to="/contact">Volunteer Now</Link>
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#AB54DE] transition-colors">
              <Link to="/donate">Donate</Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ServicesPage
