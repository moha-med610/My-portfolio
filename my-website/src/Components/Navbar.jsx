import { useState} from 'react';
import { Menu , X } from 'lucide-react'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const logo1 = `<`
    const logo2 = ` Mohamed`
    const logo3 = `Khaled`
    const logo4 = ` />`

 const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

    return (
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0'>
        <div className='max-w-7xl mx-auto flex h-14 items-center'>
            <div className='md:mr-4 flex justify-between w-full'>
                <a href="#" onClick={handleLinkClick} className='mr-6 flex items-center space-x-2'>
                    <h1 className='text-2xl'>{logo1}</h1><h1 className='text-2xl text-red-600 font-semibold'>{logo2}</h1><h1 className='text-2xl text-gray-400 font-semibold'>{logo3}</h1><h1 className='text-2xl'>{logo4}</h1>
                </a>
                <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                    <a href="#about" className='transition-colors text-gray-300 hover:text-gray-500'>About</a>
                    <a href="#projects" className='transition-colors text-gray-300 hover:text-gray-500  '>Projects</a>
                    <a href="#contact" className='transition-colors text-gray-300 hover:text-gray-500  '>Contact</a>
                </nav>
            </div>
            <button className='inline-flex items-center justify-center rounded-md md:hidden'
            onClick={()=> setMobileMenuOpen(!mobileMenuOpen)}>
                <span className='sr-only'>open main menu</span>
                {mobileMenuOpen ? (
                    <X className='h-6 w-6'  aria-hidden="true" />
                ):(
                    <Menu className='h-6 w-6' aria-hidden="true" />
                )}
            </button>
        </div>
        {mobileMenuOpen && (
            <div className='md:hidden'>
                <div className='space-y-1 px-2 pb-3 pt-2'>
                    <a href="#about" onClick={handleLinkClick} className='block rounded-2xl px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-50 hover:bg-opacity-20 hover:text-black'>About</a>
                    <a href="#projects" onClick={handleLinkClick} className='block rounded-2xl px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-50 hover:bg-opacity-20 hover:text-black'>Projects</a>
                    <a href="#contact" onClick={handleLinkClick} className='block rounded-2xl px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-50 hover:bg-opacity-20 hover:text-black'>Contact</a>
                </div>
            </div>
        )}
      </header>
  )
}

export default Navbar
