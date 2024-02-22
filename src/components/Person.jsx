import React from 'react';
import defaultImage from '../assets/MemberPhotos/Default-PFP.png';
import { FaLinkedin } from 'react-icons/fa';

function Person(props) {
  //Props: props.img, props.name, props.role, props.linkedin
  return (
    <div className='person'>
      {props.img ? (
        <img src={props.img} className='' height='192px' width='192px' />
      ) : (
        <img
          src={defaultImage}
          className='img-fluid'
          height='192px'
          width='192px'
        />
      )}
      <div className='pt-3' style={{ fontSize: '22.5px' }}>
        {props.name}
      </div>
      <div className='font-weight-light'>{props.role}</div>
      <div>
        {props.linkedin ? (
          <a
            href={props.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            alt='Linkedin'
          >
            <FaLinkedin className='cursor-pointer' size={28} />
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Person;
