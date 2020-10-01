import React from 'react';
import './styles/Page.css'

export default function Page(props) {
  return(
    <div className='page'>
      {props.children}
    </div>
  )
}