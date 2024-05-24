import { Box, CssBaseline, Link } from "@mui/material";
import React from "react";


export default function resume(){

  return (
    <React.Fragment>
      <CssBaseline />
       <a href="/resume"
        className="black-button text-white p-5"
        style={{ textDecoration: 'none', color: '#fff' }}>
        Resume
       </a>
    </React.Fragment>
  )
}