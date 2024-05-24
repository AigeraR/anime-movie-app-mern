import React from 'react';
import Layout from '../Layout/Layout';
import Head from '../Components/Home/Head';
import { FiMail, FiPhoneCall, FiMapPin } from 'react-icons/fi';
const ContactUs = () => {
  const ContactData = [
    {
      id: 1,
      title: 'Email us',
      info: 'Interactiverly get in touch with us',
      icon: FiMail,
      contact: 'Hqf7W@example.com'

    }, {
      id: 2,
      title: 'Call us',
      info: 'Interactiverly get in touch with',
      icon: FiPhoneCall,
      contact: '1234567890'
    }, {
      id: 3,
      title: 'Location',
      info: 'Lorem ipsum dolor sit amet',
      icon: FiMapPin,
      contact: ''
    }
  ]
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-5'>
        <Head title="Contact Us" />
        <div className='grid mg:grid-cols-2 gap-6 lg:mt-20 mt-20 lg:grid-cols-3 xl:gap-8'>
          {
            ContactData.map((item) => (
              <div key={item.id} className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'>
                <span className='flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl'>
                  <item.icon />
                </span>
                <h5 className='text-xl font-semibold mb-2'>
                  {item.title}
                </h5>
                <p className='text-text mb-0 text-sm leading-7'>
                  <a href={`mailto:{item.contact}`} className='text-blue-600'>{item.contact}</a>
                </p>{' '}
                {item.info}
                  
              </div>
            ))
          }

        </div>
      </div>
    </Layout>

  )
}

export default ContactUs
