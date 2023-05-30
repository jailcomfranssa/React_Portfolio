import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter/>
        </div>
        <div>
            <FaFacebookF/>
        </div>
        <div>
            <BsInstagram/>
        </div>
        <div>
            <GoMarkGithub/>
        </div>
    </div>
  )
}

export default SocialMedia