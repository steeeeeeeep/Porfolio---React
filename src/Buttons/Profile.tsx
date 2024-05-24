import { CssBaseline } from "@mui/material";
import React from "react";


export default function Profile(){
  

  return (
    <>
      <CssBaseline />
       <a href="/profile"
        className="white-button py-5 px-6"
        style={{ textDecoration: 'none' }}>
        Profile
       </a>
    </>
  )
}