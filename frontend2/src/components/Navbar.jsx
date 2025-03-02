// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsOpen(!isOpen)
//   }

//   const menuItems = ['Home', 'About', 'Services', 'Contact']

//   return (
//     <nav className="w-full bg-white shadow-lg">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo/Brand */}
//           <div className="flex-shrink-0">
//             <span className="text-xl font-bold text-gray-800">Logo</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             {menuItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500 p-2 rounded-md"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`${
//             isOpen ? 'max-h-screen' : 'max-h-0'
//           } overflow-hidden md:hidden transition-[max-height] duration-300 ease-in-out`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {menuItems.map((item) => (
//               <a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuItems = ['Home', 'About', 'Services', 'Contact']

  return (
    <nav className="w-full bg-[#AB54DE] text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">
              <a href="/">RIGHT2EDUCATION</a>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden flex md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase()}`}
                className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white p-2 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden transition-all duration-200 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase()}`}
                className="block text-white hover:text-yellow-400 hover:bg-white px-3 py-2 rounded-md text-center font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default ResponsiveNav
