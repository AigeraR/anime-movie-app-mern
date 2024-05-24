import React from 'react';
import Layout from '../Layout/Layout';
import Head from '../Components/Home/Head';

const AboutUs = () => {
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-5'>
        <Head title="About Us" />
        <div className='xl:py-20 py-18 px-4'>
          <div className=' items-center'>
            <div>
              <h3 className='text-xl lg:text-3xl mb-1 font-semibold'>
                Welcome to <span className='text-subMain'>Anime Movie App</span>
              </h3>
            </div>

            <div className='mt-4 text-sm leading-8 text-text grid grid-flow-row xl:grid-cols-2 gap-2 xl:gap-16 items-center'>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>

                <div className='grid md:grid-cols-2 gap-6 mt-3 '>
                  
                    <div className='p-8  bg-dry rounded-lg'>
                      <span className='text-3xl block font-extrabold'>
                        10K
                      </span>
                      <h4 className='text-lg font-semibold my-2'>
                        Listed Anime
                      </h4>
                      <span className="mb-0 text-text leading-7 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and
                      </span>
                    </div>
                    <div className='p-8  bg-dry rounded-lg'>
                      <span className='text-3xl block font-extrabold'>
                        9K+
                      </span>
                      <h4 className='text-lg font-semibold my-2'>
                        Lovery Users
                      </h4>
                      <span className="mb-0 text-text leading-7 text-sm">
                        Completely free, without registration! Lorem Ipsum is simply
                      </span>
                  </div>
                </div>
              </div>
              <div>
                <img src="/images/about2.jpg" alt="about-us" className='w-full  xl:block hidden h-header rounded-lg object-cover' />
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>

  )
}

export default AboutUs
