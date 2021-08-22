import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useStore } from '@/helpers/store'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  const wallet = useStore((s) => s.wallet)
  const magicUser = useStore((s) => s.magicUser)
  const actions = useStore((s) => s.actions)
  const balance = wallet?.balance ?? 0
  return (
    <div style={{ zIndex: 900, position: 'absolute', width: '100%' }}>
      <Disclosure as='nav' className='font-sans bg-white shadow'>
        {({ open }) => (
          <>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='flex justify-between h-16'>
                <div className='flex'>
                  <div className='-ml-2 mr-2 flex items-center md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className='flex-shrink-0 flex items-center'>
                    <Link href='/' passHref>
                      <h1 className='font-sans text-black text-2xl cursor-pointer'>
                        Only<span className='text-bitcoin font-bold'>Sats</span>
                      </h1>
                    </Link>
                  </div>
                </div>
                {magicUser && !!wallet && (
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <Link href='/wallet'>
                        <button
                          type='button'
                          className='relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-bitcoin shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                          <i
                            aria-hidden
                            className='fak fa-satoshisymbol-solidcirtilt -ml-1 mr-2'
                          ></i>
                          <span>{balance}</span>
                        </button>
                      </Link>
                    </div>
                    <div className='hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center'>
                      <button
                        type='button'
                        className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        onClick={() => alert('You wish you had notifications!')}
                      >
                        <span className='sr-only'>View notifications</span>
                        <BellIcon className='h-6 w-6' aria-hidden='true' />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as='div' className='ml-3 relative'>
                        <div>
                          <Menu.Button className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            <span className='sr-only'>Open user menu</span>
                            <img
                              className='h-8 w-8 rounded-full'
                              src='/satoshi.png'
                              alt=''
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter='transition ease-out duration-200'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href='#'
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Your Profile
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href='#'
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Settings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href='#'
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                  onClick={actions.logout}
                                >
                                  Log out
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Disclosure.Panel className='md:hidden'>
              <div className='pt-2 pb-3 space-y-1'>
                {/* Current: "bg-indigo-50 border-bitcoin text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                {/* <a
                  href='#'
                  className='bg-indigo-50 border-bitcoin text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'
                >
                  Dashboard
                </a>
                <a
                  href='#'
                  className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'
                >
                  Team
                </a>
                <a
                  href='#'
                  className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'
                >
                  Projects
                </a>
                <a
                  href='#'
                  className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6'
                >
                  Calendar
                </a> */}
              </div>
              <div className='pt-4 pb-3 border-t border-gray-200'>
                <div className='flex items-center px-4 sm:px-6'>
                  <div className='flex-shrink-0'>
                    <img
                      className='h-10 w-10 rounded-full'
                      src='/satoshi.png'
                      alt=''
                    />
                  </div>
                  <div className='ml-3'>
                    <div className='text-base font-medium text-gray-800'>
                      real_satoshi
                    </div>
                  </div>
                  <button
                    type='button'
                    className='ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    onClick={() => alert('You wish you had notifications!')}
                  >
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>
                <div className='mt-3 space-y-1'>
                  <a
                    href='#'
                    className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'
                  >
                    Your Profile
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'
                  >
                    Settings
                  </a>
                  <a
                    href='#'
                    className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 sm:px-6'
                    onClick={actions.logout}
                  >
                    Log out
                  </a>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
