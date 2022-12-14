import { useToast } from '@chakra-ui/react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { AiFillCaretDown } from "react-icons/ai";
import Iconweb from '../public/iconnal.png';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// header inside the website after login (image profile)
export default function Example() {
  const [userID, setuserID] = useState('')
  const toast = useToast()
  const [name, setName] = useState('')
  const [url, setURL] = useState('')
  const router = useRouter();

  useEffect(() => {
    if (sessionStorage.getItem('token') !== null) {
      setName(sessionStorage.getItem('name'))
      setURL(sessionStorage.getItem('urlimage'))
      setuserID(sessionStorage.getItem('usernumberID'))
    }
    else {
      router.push('/')
      toast({
        title: 'Cannot access the website',
        description: "Please log in to use the website",
        status: 'error',
        duration: 5000
      })
    }

  }, [])

  const onLogout = () => {
    sessionStorage.clear();
    router.push('/')
  }

  return (
    <>
      <div className="bg-header sticky top-0 z-50">
        <div className="mx-auto">
          <div className="flex h-20 pt-4 pb-4 pr-8 pl-2 items-center justify-between">
            <div onClick={scrollToTop} className="mt-1 flex items-center">
              <Image
                src={Iconweb}
                alt="Picture"
                width={100}
                height={80}
              />
              <span className="text-lg font-medium text-xl text-white">
                Nap A Learn
              </span>
            </div>
            <div className="ml-4 flex items-center ml-6">
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex mt-2 max-w-xs items-center rounded-full bg-gray-800 text-sm hover:ring-2 hover:ring-light-lighter ">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src={url} alt="" />
                    <span key="{user.name}" className="ml-3 mr-3 text-lg text-white font-medium text-l">
                      {name}
                    </span>
                    <AiFillCaretDown color="white" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:bg-primary-100 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={`/profile/${userID}`}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-black-700 hover:bg-light-lighter'
                          )}
                        >
                          Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item onClick={() => onLogout()}>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-black-700 hover:bg-light-lighter'
                          )}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}