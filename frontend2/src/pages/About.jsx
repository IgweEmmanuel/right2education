import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image1 from '../assets/team1.jpeg'
import Image2 from '../assets/team2.jpeg'
import Image3 from '../assets/team3.jpeg'
import Image4 from '../assets/team5.png'
import Image5 from '../assets/mission.jpg'

const AboutPage = () => {
  //   const stats = [
  //     { label: 'Years of Experience', value: '15+' },
  //     { label: 'Projects Completed', value: '500+' },
  //     { label: 'Happy Clients', value: '200+' },
  //     { label: 'Team Members', value: '50+' },
  //   ]

  const teamMembers = [
    { name: 'Ijeoma Ogbonnaya', role: 'Director', image: Image1 },
    {
      name: 'Silvia Oghenerobor Adakpor',
      role: 'Board Secretary',
      image: Image2,
    },
    {
      name: 'Stanley Uchechukwu Nwogidi',
      role: 'Board Member',
      image: Image3,
    },
    {
      name: 'Amarachi Ogu',
      role: 'Board Member',
      image: Image4,
    },
  ]

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries in education for the less priviledge.',
    },
    { title: 'Quality', description: 'Delivering excellence in every project' },
    {
      title: 'Integrity',
      description: 'Building trust through honest partnerships',
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve greatness',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Navbar />
      <div className="bg-[#AB54DE] text-white py-24 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl">
            We're a team of passionate individuals dedicated to creating a world
            where every child, regardless of their circumstances, has access to
            quality education, empowering them to reach their full potential and
            contribute meaningfully to society.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Mission Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={Image5}
                alt="Mission"
                className="rounded-lg shadow-lg sm:w-98 mx-auto"
              />
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-6 text-center md:text-left">
                Mission: To provide access to quality education for every
                out-of-school child, regardless of their economic or social
                background, by identifying, enrolling, and supporting them in
                schools, fostering hope and opportunities for a brighter future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#AB54DE] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8">
            Let's discuss how you can add value to pupils and students who don't
            have access to education.
          </p>
          <button className="bg-white text-[#AB54DE] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
