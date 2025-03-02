const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Right2Education Children
              <br />
              Support Foundation
            </h3>
            <p className="mb-4">
              We arm the next generation who can't afford education with access
              to quality education.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/right2education_childsupport?igsh=MWhjMWVndThqY3p1MQ=="
                target="_blank"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                'After-School Support',
                'Women Empowerment',
                'STEM Programs',
                'Literacy Initiative',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <form className="space-y-4" action="/contact">
              {/* <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-gray-500"
              /> */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              © {currentYear} RIGHT2EDUCATION CHILDREN SUPPORT FOUNDATION. All
              rights reserved.
            </div>
            {/* <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div> */}
            {/* <div className="flex justify-center align-center h-10 w-10 rounded-lg bg-white text-20 text-center text-purple">
              b
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
