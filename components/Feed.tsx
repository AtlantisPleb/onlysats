import Image from 'next/image'
import img from './ck1p.png'
import Link from 'next/link'

export const Feed = () => {
  return (
    <Link href='/video/ck-metaverse-1' passHref>
      <div
        style={{ maxWidth: 500 }}
        className='shadow-xl cursor-pointer flex flex-col rounded-lg overflow-hidden border-2 border-white'
      >
        <div className='flex-shrink-0 bg-black'>
          <div style={IMGCONTAINER}>
            <Image
              className='h-48 w-full object-cover object-center'
              src={img}
              alt=''
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>

        <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
          <div className='flex-1'>
            <div className='block mt-1'>
              <p className='text-xl font-semibold text-gray-900'>
                Chris and Kiki Build a Metaverse, Episode 1
              </p>
              <div className='mt-1 flex space-x-1 text-sm text-gray-900'>
                <time dateTime='2021-08-01'>5 sats / minute - PG-13</time>
              </div>
              <p className='mt-4 text-base text-gray-900'>
                You heard it here first. Metaverse. We're making one. Something
                something VR. Bad memes added in post.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export const IMGCONTAINER: any = {
  width: '100%',
  height: 250,
  position: 'relative',
}
