import React, { ReactNode } from 'react'
import FlexPayNavBar from './FlexPayNavBar';

interface Props {
    children: ReactNode;
}

const FlexPayLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
        <aside>
            <FlexPayNavBar />
        </aside>
        <div>{children}</div>
    </div>
  )
}

export default FlexPayLayout