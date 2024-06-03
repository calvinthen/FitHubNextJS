import React from 'react'
import Image from 'next/image'
import { HiPencilSquare  } from "react-icons/hi2";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useSession, signIn, signOut } from "next-auth/react"

const USER_IMAGE='https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg'
function Header() {
    const { data: session } = useSession()
    console.log("Session", session);
  return (
    <div className='flex justify-between p-3 border-b-[2px] border-[#FF3366]'>
      <img src="./Images/logo.png" width={60} alt='Fit hub logo'/>
      <div className='flex gap-4'>
        <div>
            <button className='bg-black p-2 px-3 text-white rounded-full'> 
                <span className='hidden sm:block'>
                    CREATE POST
                </span> 

                <HiPencilSquare className='sm:hidden text-[20px]'/> 
            </button>

            {!session?
                <button className='bg-white text-gray-500 p-2 px-3 border-[1px] rounded-full' onClick={()=>signIn()}> 
                    <span className='hidden sm:block'> 
                        SIGN IN 
                    </span>  

                    <HiArrowLeftOnRectangle className='sm:hidden text-[20px]'/> 
                </button>
                :
                <button className='bg-white text-gray-500 p-2 px-3 border-[1px] rounded-full' onClick={()=>signOut()}> 
                    <span className='hidden sm:block'> 
                        SIGN OUT
                    </span>  

                    <HiArrowLeftOnRectangle className='sm:hidden text-[20px]'/> 
                </button>
            }
        </div>
       
        <div>
            <Image src={session?session?.user?.image:USER_IMAGE} alt='User Image' className='rounded-full' width={40} height={40}  />
        </div>

      </div>
    
    </div>

  )
}

export default Header
