import { Box, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import Resume from "../Buttons/resume";
import ProfileButton from "../Buttons/Profile";

export default function Intro(){
  return(

    <React.Fragment>
      <CssBaseline/>
        <Box sx={{ width: '100%', height: '100%' }}>
          <div className=" relative grid grid-cols-2 gap-4 bg-white">
            <div className="p-20 bg-white flex flex-col justify-center items-start gap-8">
              <div className="name">
                <Typography variant="h4" gutterBottom>
                    Hello, 
                    <br/>
                    I am <b>Stephene</b>
                </Typography>
              </div>
              <div className="content">
                <p>
                  A software developer with hands-on experience in web development, passionate about creating innovative and user-friendly web applications while continuously expanding my skills and knowledge in the ever-evolving world of software development. 
                </p>
              </div>
              <div className="buttons flex justify-center items-center gap-4">
                <Resume />
                <ProfileButton />
              </div>
            </div>
            <div className="profileImage flex justify-center items-center bg-gray-950">
              <div className="image rounded-full bg-white glow">
              </div>
            </div>
          </div>
        </Box>
    </React.Fragment>

  )
}