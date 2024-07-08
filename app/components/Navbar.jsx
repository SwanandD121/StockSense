import { Button } from '@/components/ui/button'
import { BarChartIcon } from '@radix-ui/react-icons'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='w-full h-12 bg-neutral-200 shadow mb-4 px-10'>
            <div className='h-full flex items-center justify-between'>
                <div className='text-3xl'>
                    <BarChartIcon/>
                    {/* Logo image */}
                </div>
                <div className='h-full flex gap-4 items-center justify-center'>
                    <div>
                        {/* dark mode button */}
                    </div>
                    <Button variant="secondary">Theme</Button>
                    <Button>Contact</Button>
                    <Button variant="outline">Upgrade</Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar