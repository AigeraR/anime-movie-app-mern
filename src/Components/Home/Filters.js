import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/outline';
import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { FaAngleDown, FaCheck } from 'react-icons/fa';


const CategoriesData = [
    { title: " Sort ByCategory" },
    { title: "Historical" },
    { title: "Fiction" },
    { title: "Science Fiction" },
    { title: "Fantasy" },
    { title: "Biography" },
    { title: "Mystery" },
    { title: "Thriller" },

]
const YearData = [
    { title: "Sort By Year" },
    { title: "1700-1800" },
    { title: "1800-1900" },
    { title: "1900-2000" },
    { title: "2000-2010" },
    { title: "2010-2020" },
    { title: "2020-2024" },
]

const TimesData = [
    { title: "Sort By Hours" },
    { title: "1-5 Hours" },
    { title: "5-10 Hours" },
    { title: "10-15 Hours" },
    { title: "15-20 Hours" },
]

const RatesData = [
    { title: "Sort By Rating" },
    { title: "1 Star" },
    { title: "2 Star" },
    { title: "3 Star" },
    { title: "4 Star" },
    { title: "5 Star" }
]

function Filters() {
    const [category, setCategory] = useState({ title: "Category" });
    const [year, setYear] = useState(YearData[0]);
    const [times, setTime] = useState(TimesData[0]);
    const [rate, setRate] = useState(RatesData[0]);

    const Filter = [
        {
            value: category,
            setValue: setCategory,
            items: CategoriesData


        },
        {
            value: year,
            setValue: setYear,
            items: YearData
        },
        {
            value: times,
            setValue: setTime,
            items: TimesData
        },
        {
            value: rate,
            setValue: setRate,
            items: RatesData
        }
    ]


    return (
        <div className='my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-4'>
            {
                Filter.map((item, index) => (
                    <Listbox key={index} value={item.value} onChange={item.setValue}>
                        <div className='relative'>
                            <Listbox.Button className='relative border-gray-800  w-full  text-white bg-main rounded-lg cursor-default border py-2 pl-6 pr-10 text-left text-mg'>
                                <span className='block truncate'>{item.value.title}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <FaAngleDown className="w-4 h-4 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>
                            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border text-dryGray border-gray-800 rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                                    {
                                        item.items.map((iterm, index) => (
                                            <Listbox.Option
                                                key={index}
                                                className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4
                                             ${active ? 'bg-subMain text-white' : 'text-main'}`} value={iterm}>
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`block truncated ${selected ? 'font-medium' : 'font-normal'}`}>
                                                            {iterm.title}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
                                                                <FaCheck className="w-5 h-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null
                                                        }
                                                    </>
                                                )}
                                            </Listbox.Option>))

                                    }
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                ))
            }

        </div>
    )
}

export default Filters