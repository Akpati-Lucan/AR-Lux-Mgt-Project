import React, { ReactNode } from 'react'
import FlexPayNavBar from './FlexPayNavBar/FlexPayNavBar';

interface Props {
    children: ReactNode;
}

const FlexPayLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
        <aside>
            <FlexPayNavBar />
        </aside>
        <div className='p-5'>{children}</div>
    </div>
  )
}

export default FlexPayLayout