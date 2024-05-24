import { ThemeProvider } from "@emotion/react";
import { Avatar, Box, Card, CardContent, Container, createTheme, CssBaseline, Divider, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";


export default function Profile(){
  
  const intro = (
    <>
      <Box display="flex" alignItems="center" flexDirection="column" mb={2}>
        <Avatar
          src="../../Images/profile.jpg"
          alt="Profile"
          className="shadow-lg shadow-gray-500 mb-5"
          sx={{ width: 300, height: 300, mr: 2 , border: "4px solid #fff"}}
        />
        <Typography variant="h4"><b>Stephene Dave Dorado</b></Typography>
        <Typography variant="h6">Software Developer</Typography>
      </Box>
      <Divider />
      <Box my={2} display="flex" justifyContent="center" alignItems="center">
        <Typography variant="body1" width="50%" textAlign="center">
          Hi! I'm Stephene, a web developer with a passion for creating amazing software applications. 
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h6">Contact Information</Typography>
        <Typography variant="body2">Email: dstephene14@gmail.com</Typography>
        <Typography variant="body2">Phone: (+63) 9108250813</Typography>
        <Typography variant="body2">Linkedin: <a href="https://www.linkedin.com/in/stephene-dave-dorado-857a21299/" className="text-blue-600">LinkedIn</a></Typography>
      </Box>
    </>
  )

  const about = (
    <>
      <Box display="flex" alignItems="start" flexDirection="column">
        <div className="title mb-3">
          <Typography variant="h3"><b>About Me</b></Typography>
        </div>
        <div className="content">
          <Box my={5}>
            <Typography variant="body1" textAlign='start'>
              <p>A software developer with hands-on experience in web development, passionate about creating innovative and user-friendly web applications while continuously expanding my skills and knowledge in the ever-evolving world of software development. With a solid foundation in full-stack development, I am dedicated to actively contributing to the achievements of innovative and forward-thinking teams</p>
            </Typography>
          </Box>
          <Box display="flex" alignItems="start" flexDirection="column" my={5}>
            <Typography variant="h5">
              What are my skills ?
            </Typography>
            <Typography variant="body1">
              My skills include proficiency in various technologies and tools, including but not limited to:
            </Typography>
            <Box width='100%' display='flex' flexDirection='row' alignItems="center" justifyContent='center' flexWrap="wrap" gap='30px' padding='20px' mt={5}>
          
              <i className="dev devicon-html5-plain colored"></i>
            
              <i className="dev devicon-css3-plain colored"></i>
            
              <i className="dev devicon-tailwindcss-original colored"></i>
            
              <i className="dev devicon-react-original colored"></i>
            
              <i className="dev devicon-csharp-plain colored"></i>
            
              <i className="dev devicon-php-plain colored"></i>
                
              <i className="dev devicon-github-original"></i>
          
            </Box>
          </Box>
        </div>
      </Box>
    </>
  )

 const services = ({ title, content }: { title: string; content: string; })  => (
    <>
      <Card>
        <CardContent className="shadow-lg shadow-gray-950 bg-gray-200" >
          <Box display="flex" alignItems="center" flexDirection="column" mb={2}>
            <div className="title">
              <Typography variant="h6" mb={2}>
                {title}
              </Typography>
            </div>
            <div className="content">
              <Typography variant="body1">
                {content}
              </Typography>
            </div>
          </Box>
        </CardContent>
      </Card>
    </>
  )

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

  return (
    <>
      <Container maxWidth="lg" sx={{background: "#8080805e"}}>
        <Item>
          <div className="mb-10">
            {intro}
          </div>
          <div className="bg-gray-950 text-white p-10">
            {about}
          </div>
          <div className="services my-10 mx-4">
            <Box>
              <Typography variant="h3" textAlign={"start"} px={5}>
                <b>Services</b>
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4} my={2}>
                {services({ 
                    title: 'Web Development', 
                    content: 'Unlock the potential of your online presence with our expert web development services. From sleek designs to seamless functionality, we specialize in crafting tailored digital solutions that elevate your brand.' 
                  })}
              </Grid>
              <Grid item xs={12} md={4} my={2}>
                {services({ 
                    title: 'Desktop Development', 
                    content: 'Deliver robust, high-performance applications that streamline your operations and enhance productivity. Whether you need a custom software solution or an upgrade to an existing system, I ensure a seamless and efficient development process from concept to deployment.' 
                  })}
              </Grid>
              <Grid item xs={12} md={4} my={2}>
                {services({ 
                    title: 'User-Interface Design', 
                    content: "Design interfaces that not only look great but also function flawlessly. Whether you're developing a new application or refining an existing one, I ensure that your UI is tailored to meet the needs of your users and aligns perfectly with your brand."
                  })}
              </Grid>
            </Grid>
          </div>
        </Item>
      </Container>
    </>
  )
}