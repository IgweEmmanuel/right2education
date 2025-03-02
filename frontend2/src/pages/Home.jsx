import { useState, useEffect, useRef } from 'react'
import Image1 from '../assets/std2.jpg'
import Image2 from '../assets/girlchild.webp'
// import Image3 from '../assets/std1.jpg'
import Image4 from '../assets/partner2.png'
import Image5 from '../assets/emmanuel.jpeg'
import Image6 from '../assets/boniface.jpeg'
import Image7 from '../assets/person4.jpeg'
import Video from '../assets/pupils.mp4'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import {
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

// Counter Component with single animation
const AnimatedCounter = ({ end }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          let startTime
          const duration = 2000

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime
            const progress = (currentTime - startTime) / duration

            if (progress < 1) {
              setCount(Math.min(Math.floor(end * progress), end))
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [end])

  return <span ref={countRef}>{count.toLocaleString()}</span>
}

// StatCard Component
const StatCard = ({ icon: Icon, value, label }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-sm transform transition-transform hover:scale-105">
    <Icon className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
    <h4 className="font-bold text-3xl mb-2">
      <AnimatedCounter end={value} />
      {value >= 1000000 ? 'M' : '+'}
    </h4>
    <p className="text-gray-600">{label}</p>
  </div>
)

// TestimonialSlider Component
const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const slideLeft = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const slideRight = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={slideLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${
            currentIndex * (window.innerWidth <= 768 ? 100 : 100 / 3)
          }%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="px-4"
            style={{
              minWidth: window.innerWidth <= 768 ? '100%' : '33.333%',
            }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={slideRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  )
}

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({
    vision: false,
    mission: false,
    goals: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      const elements = {
        vision: document.getElementById('vision'),
        mission: document.getElementById('mission'),
        goals: document.getElementById('goals'),
      }

      Object.keys(elements).forEach((key) => {
        if (elements[key]) {
          const top = elements[key].getBoundingClientRect().top
          if (top < window.innerHeight - 100) {
            setIsVisible((prev) => ({ ...prev, [key]: true }))
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const testimonials = [
    {
      name: 'Ogenyi Emmanuel',
      role: 'Pupil',
      image: Image5,
      quote:
        '⁠Thank you Right2Education Children Support Foundation for not allowing me to remain at home',
    },
    {
      name: 'Grace Ede',
      role: 'Parent',
      image: '',
      quote:
        'Thank you Right2Education Children Support Foundation for removing shame on my face by enrolling my children in School. God bless the founder and the entire NGO.',
    },

    {
      name: 'Onyekachi Boniface',
      role: 'Pupil',
      image: Image6,
      quote:
        'Thank you Right2Education Children Support Foundation for bringing me out of the farm and enrolling into school.',
    },
    {
      name: 'Sarah Wilson',
      role: 'Volunteer Teacher',
      image: Image7,
      quote:
        'Being part of this mission has been incredibly fulfilling. The impact is real and lasting.',
    },
    // Duplicate testimonials for smooth sliding
    // {
    //   name: 'Michael Silas',
    //   role: 'Student',
    //   image: Image4,
    //   quote:
    //     'This program gave me the support and motivation I needed to pursue my dreams.',
    // },
  ]

  const stats = [
    {
      icon: GraduationCap,
      value: 1000,
      label: 'Students Supported',
    },
    {
      icon: DollarSign,
      value: 2,
      label: 'Donations Raised',
    },
    {
      icon: Users,
      value: 5000,
      label: 'Active Donors',
    },
    {
      icon: BookOpen,
      value: 50,
      label: 'Partner Schools',
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#AB54DE] to-purple-800 opacity-90"></div>
        <video
          src={Video}
          alt="Education"
          autoPlay
          loop
          muted
          style={{ filter: 'brightness(30%)' }}
          className="absolute inset-0 w-full h-full object-cover"
        ></video>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Empowering Through Education
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Building brighter futures through accessible education and support
          </p>
          <div className="space-x-4">
            <button className="text-white bg-[#AB54DE] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              <Link to="/contact">Get Involved</Link>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#AB54DE] transition-all">
              <Link to="/donate">Donate Now</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Vision, Mission, Goals Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div
              id="vision"
              className={`transform transition-all duration-1000 ${
                isVisible.vision
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#AB54DE] rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">👁️</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  A world where every child has access to quality education and
                  the opportunity to reach their full potential.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div
              id="mission"
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible.mission
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#AB54DE] rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide educational support, resources, and opportunities
                  to underserved communities through innovative programs.
                </p>
              </div>
            </div>

            {/* Goals Card */}
            <div
              id="goals"
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible.goals
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#AB54DE] rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl text-white">🎊</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Goals</h3>
                <p className="text-gray-600">
                  To empower 10,000 students annually through education,
                  mentorship, and skill development programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src={Image1}
                alt="After School Programs"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">After School Programs</h2>
              <p className="text-gray-600 mb-6">
                Our after-school programs provide a safe and nurturing
                environment where students can receive homework help,
                participate in enrichment activities, and develop important life
                skills.
              </p>
              <button className="bg-[#AB54DE] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
                <Link to="/services">Learn More</Link>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Women Empowerment</h2>
              <p className="text-gray-600 mb-6">
                Empowering girls from underserved communities through quality
                education, breaking the cycle of poverty by ensuring every girl
                has the opportunity to learn, grow, and reach her full
                potential, regardless of her family's economic circumstances.
              </p>
              <button className="bg-[#AB54DE] text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
                <Link to="/services">Learn More</Link>
              </button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={Image2}
                alt="women empowerment"
                className="rounded-lg shadow-lg h-[345px] w-[100%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What People Say
          </h2>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </div>
      {/* Partner section */}
      <div className="bg-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
          <div className="flex gap-4 justify-center">
            <img src={Image4} alt="" className="w-40 h-40" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#AB54DE] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we can make quality education accessible to every child.
            Your support makes a difference.
          </p>
          <div className="md:space-x-4 space-y-4">
            <button className="bg-white text-[#AB54DE] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              <Link to="/contact">Become a Volunteer</Link>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#AB54DE] transition-all">
              <Link to="/donate">Make a Donation</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
