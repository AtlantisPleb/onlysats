/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { RecentPosts } from './RecentPosts'

const solutions = [
  {
    name: 'Inbox',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: AnnotationIcon,
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatAlt2Icon,
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
]
const navigation = [
  { name: 'Pricing', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'Company', href: '#' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export const Splash = () => {
  return (
    <div className='min-h-screen bg-yellow-50'>
      <header>
        <Popover className='relative bg-white'>
          <div className='flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <a href='#'>
                <span className='sr-only'>Workflow</span>
                <img
                  className='h-8 w-auto sm:h-10'
                  src='https://tailwindui.com/img/logos/workflow-mark-yellow-600.svg'
                  alt=''
                />
              </a>
            </div>
            <div className='-mr-2 -my-2 md:hidden'>
              <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <Popover.Group as='nav' className='hidden md:flex space-x-10'>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='absolute z-10 -ml-4 mt-3 transform max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2'>
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                              >
                                <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-yellow-600 text-white sm:h-12 sm:w-12'>
                                  <item.icon
                                    className='h-6 w-6'
                                    aria-hidden='true'
                                  />
                                </div>
                                <div className='ml-4'>
                                  <p className='text-base font-medium text-gray-900'>
                                    {item.name}
                                  </p>
                                  <p className='mt-1 text-sm text-gray-500'>
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-base font-medium text-gray-500 hover:text-gray-900'
                >
                  {item.name}
                </a>
              ))}
            </Popover.Group>
            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              <a
                href='#'
                className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
              >
                Sign in
              </a>
              <a
                href='#'
                className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700'
              >
                Sign up
              </a>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
            >
              <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
                <div className='pt-5 pb-6 px-5'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <img
                        className='h-8 w-auto'
                        src='https://tailwindui.com/img/logos/workflow-mark-yellow-600.svg'
                        alt='Workflow'
                      />
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500'>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='h-6 w-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <nav className='grid grid-cols-1 gap-7'>
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'
                        >
                          <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-yellow-600 text-white'>
                            <item.icon className='h-6 w-6' aria-hidden='true' />
                          </div>
                          <div className='ml-4 text-base font-medium text-gray-900'>
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className='py-6 px-5'>
                  <div className='grid grid-cols-2 gap-4'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='text-base font-medium text-gray-900 hover:text-gray-700'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className='mt-6'>
                    <a
                      href='#'
                      className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700'
                    >
                      Sign up
                    </a>
                    <p className='mt-6 text-center text-base font-medium text-gray-500'>
                      Existing customer?
                      <a href='#' className='text-gray-900'>
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}
          <div className='relative'>
            <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
              <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
                <div className='absolute inset-0'>
                  <img
                    className='h-full w-full object-cover'
                    src='/lady.jpg'
                    alt='People working on laptops'
                  />
                  <div className='absolute inset-0 bg-blue-400 mix-blend-multiply' />
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                  <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                    <span className='block text-white'>Your fans,</span>
                    <span className='block text-bitcoin'>your money.</span>
                  </h1>
                  <p className='mt-6 max-w-lg mx-auto text-center text-xl text-yellow-200 sm:max-w-3xl'>
                    Monetize your audience with Bitcoin.
                  </p>
                  {/* <p className='mt-6 max-w-lg mx-auto text-center text-xl text-yellow-200 sm:max-w-3xl'>
                    Because unstoppable connection needs unstoppable money.
                  </p> */}
                  <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                    <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                      <a
                        href='#'
                        className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-700 bg-white hover:bg-yellow-50 sm:px-8'
                      >
                        Get started
                      </a>
                      <a
                        href='#'
                        className='flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-bitcoin hover:bg-opacity-70 sm:px-8'
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* More main page content here... */}
        <RecentPosts />
      </main>
    </div>
  )
}
