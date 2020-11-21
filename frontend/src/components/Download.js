import React from 'react'
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Myppt from '../AutoPPT-main/AutoPPT-main/something.pptx';
export default function ConvertToPPT() {
    return (
      <a href={Myppt} download target="_blank"> <button>Click here to download the Educational content</button></a>)
}
