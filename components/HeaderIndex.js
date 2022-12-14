import { Stack } from '@chakra-ui/react'
import Image from 'next/image'
import ButtonNAL from "../components/Button.js"
import Iconweb from '../public/iconnal.png'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// header on index page
export default function Example() {
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
              <Stack direction='row' spacing={4} align='center'>
                <ButtonNAL text="Register" link="/register" />
                <ButtonNAL text="Login" link="/login" />
              </Stack>
            </div>
          </div>
        </div>
        <main>
        </main>
      </div>
    </>
  )
}