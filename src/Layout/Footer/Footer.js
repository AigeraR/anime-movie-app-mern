import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const links = [
    {
      title: 'Company',
      links: [
        {
          name: 'Home',
          links: '/'
        },
        {
          name: 'Contact Us',
          links: '/about-us'
        },
        {
          name: 'About Us',
          links: '/about-us'
        },
        {
          name: 'Movies',
          links: '/movies'
        }
      ]
    },
    {
      title: 'Top Categories',
      links: [
        {
          name: 'Action',
          links: '#'
        },
        {
          name: 'Comedy',
          links: '#'
        },
        {
          name: 'Drama',
          links: '#'
        },
        {
          name: 'History',
          links: '#'
        }
      ]
    },
    {
      title: 'My Account',
      links: [
        {
          name: 'Dashboard',
          links: '/dashboard'
        },
        {
          name: 'My Favorites',
          links: '/favorite'
        },
        {
          name: 'Profile',
          links: '/profile'
        },
        {
          name: 'Change Password',
          links: '/change-password'
        }
      ]
    }

  ]
  return (
    <div className='bg-dry py-4 border-t-2 border-black'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
          {
            links.map((link, index) => (
              <div key={index} className='col-span-1 md:col-span-2 xl:col-span-3 pb-3.5 sm:pb-0'>
                <h3 className='text-md  lg:leading-7 font-medium mb-4  sm:mb-5 lg:mb-6 pb-0.5'>
                  {link.title}
                </h3>
                <ul className='text-sm flex flex-col space-y-3'>
                  {link.links.map((text, index) => (
                    <li key={index} className='flex items-baseline'>
                      <Link to={text.links} className='text-border inline-block w-full hover:text-subMain'>
                        {text.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 xl:col-span-3'>
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className='w-2/4 h-14 object-contain' />
            </Link>
            <p className='leading-6 text-sm text-border mt-4'>
              <span>
                Lorem 2000 Smith Rd.<br /> San Francisco, CA 94107
              </span><br />
              <span>
                Tell: (123) 456-7890
              </span><br />
              <span>
                Email: anime-moon@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
