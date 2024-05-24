import { Box, Card, CardContent, CardHeader, Divider, Tooltip, Typography } from "@mui/material";
import DownloadResume from "../Buttons/DowloadResume";

const CardHeaderContent = (
  <>
  <div className="flex flex-col justify-center items-center pb-10">
    <Typography fontFamily="Times New Roman" variant="h3" sx={{ textTransform: 'uppercase' }}>
      <b >Stephene Dave Dorado</b>
    </Typography>
    <Typography fontFamily="Times New Roman" variant="h6">
      <b>Software Developer</b>
    </Typography>
    <Typography fontFamily="Times New Roman" variant="subtitle1" className="flex flex-row justify-center gap-3">
      <p>Banga, South Cotabato, Philippines</p> • 
      <p>dstephene14@gmail.com</p> •
      <p> +639108250813</p> •
      <a href="https://www.linkedin.com/in/stephene-dave-dorado-857a21299/" className="text-blue-600">LinkedIn</a>
    </Typography>
  </div>
  <Divider sx={{border: "1px solid black"}}/>
  </>
)

export default function Resume(){

  return(
    <>
      <Box className="flex justify-center p-5 bg-gray-200" sx={{width: '100%'}}>
        <div className="fixed" style={{right: "2%", bottom: "5%"}}>
          <Tooltip title="Download">
            <DownloadResume />
          </Tooltip>
        </div>
        <Card variant="outlined"  sx={{ minWidth: 275, maxWidth: 816, padding: 2 }} className=" shadow-lg shadow-black">
          <CardHeader 
            title={(CardHeaderContent)}>
              
          </CardHeader>
          <CardContent>
            <div  className="Resume">
              <div id="Summary" className="py-3">
                <Typography fontFamily="Times New Roman" variant="h5" sx={{ textTransform: 'uppercase'}}>
                  <b>Profile Summary</b>
                </Typography>
                <Typography fontFamily="Times New Roman" variant="body1">
                  A software developer with hands-on experience in web development, passionate about creating innovative and user-friendly web applications while continuously expanding my skills and knowledge in the ever -evolving world of software development. With a solid foundation in full-stack development, I am dedicated to actively contributing to the achievements of innovative and forward-thinking teams.
                </Typography>
              </div>
              <div id="Experience" className="pt-5 pb-3">
                <Typography fontFamily="Times New Roman" variant="h5" sx={{ textTransform: 'uppercase'}}>
                  <b>Professional Experience</b>
                </Typography>
                <div className="py-3">
                  <Typography fontFamily="Times New Roman" variant="h6" sx={{ textTransform: 'uppercase'}}>
                    <b>.NET FULLSTACK DEVELOPER</b>
                  </Typography>
                  <Typography fontFamily="Times New Roman" variant="body2">
                    <p>CADJPro | www.cadjpro.com </p>
                    <i>August 2023 – March 2024</i>
                  </Typography>
                  <Typography fontFamily="Times New Roman" variant="body1">
                    <ul>
                      <li> Implemented backend CRUD features using .NET framework, integrating Domain-Driven Design (DDD) architecture and Test-Driven Development (TDD) for robust and scalable solutions.</li>
                      <li>Applied user-friendly and responsive User-Interface using MudBlazor.</li>
                      <li>Write unit tests and integration tests for the domain service layer and endpoints to ensure correct functionality.</li>
                      <li>Performed manual testing to identify feature issues, bugs, and validate the software's overall functionality.</li>
                      <li>Practiced Git for version control, facilitate code reviews, and fostering collaboration within the team.</li>
                      <li>Participated in daily scrum meetings to provide updates on task progress and discuss any impediments.</li>
                    </ul>
                  </Typography>
                </div>
                <div className="py-3">
                  <Typography fontFamily="Times New Roman" variant="h6" sx={{ textTransform: 'uppercase'}}>
                    <b>SOFTWARE DEVELOPER INTERN</b>
                  </Typography>
                  <Typography fontFamily="Times New Roman" variant="body2">
                    <p>RAPIDSIGNAL ELECTRONICS, San Isidro, General Santos City, Philippines</p>
                    <i>March 2023 - June 2023</i>
                  </Typography>
                  <Typography fontFamily="Times New Roman" variant="body1">
                    <ul>
                      <li> Implement unit and end-to-end testing for software application, utilizing the Jest Testing Framework.</li>
                      <li>Conducted manual testing of a software application to assess its functionalities and identify issues or bugs.</li>
                      <li>Participated in the development of landing pages, leveraging JavaScript and its associated frameworks which is React.Js to create dynamic and engaging user interfaces.</li>
                      <li>Utilized Git for version control and collaborated on feature branches through GitHub.</li>
                    </ul>
                  </Typography>
                </div>
                <div className="py-3">
                  <Typography fontFamily="Times New Roman" variant="h6" sx={{ textTransform: 'uppercase'}}>
                    <b>PHP WEB DEVELOPER</b>
                  </Typography>
                  <Typography fontFamily="Times New Roman" variant="body2">
                    <p>Undergraduate Capstone Project, Mindanao State University - General Santos City, Philippines</p>
                    <i>March 2022 – June 2023</i>
                  </Typography>
                  <Typography fontFamily="Times New Roman" variant="body1">
                    <ul>
                      <li> Collaborated with team members for planning, designing, implementing, and testing features.</li>
                      <li>Developed a Web-based Home Service Application utilizing PHP, MYSql and JavaScript.</li>
                      <li>Utilized Git for version control and Github for hosting repositories.</li>
                      <li>Conducted beta-testing for the end-users (customers and skilled workers).</li>
                    </ul>
                  </Typography>
                </div>
              </div>
              <div id="Education" className="pt-5 pb-3">
                <Typography fontFamily="Times New Roman" variant="h6" sx={{ textTransform: 'uppercase'}}>
                  <b>Professional Experience</b>
                </Typography>
                <div>
                  <div className="py-3">
                    <Typography fontFamily="Times New Roman" variant="body1" sx={{ textTransform: 'uppercase'}}>
                      <b>BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY</b>
                    </Typography>
                    <Typography fontFamily="Times New Roman" variant="body2">
                      <p>Mindanao State University - General Santos, Barangay Fatima, General Santos City, Philippines</p>
                      <i>August 2019 - July 2023</i>
                    </Typography>
                  </div>
                </div>
                <div>
                  <div className="py-3">
                    <Typography fontFamily="Times New Roman" variant="body1" sx={{ textTransform: 'uppercase'}}>
                      <b>COMPUTER SYSTEM SERVICES - TVL - ICT STRAND</b>
                    </Typography>
                    <Typography fontFamily="Times New Roman" variant="body2">
                      <p>Concepcion National High School, Barangay Concepcion, Koronadal City, South Cotabato </p>
                      <p>Award: With Honors</p>
                      <i>June 2017 - March 2019</i>
                    </Typography>
                  </div>
                </div>
              </div>
              <div id="Trainings" className="pt-5 pb-3">
                <Typography fontFamily="Times New Roman" variant="h6" sx={{ textTransform: 'uppercase'}}>
                  <b>TRAININGS AND SEMINARS ATTENDED</b>
                </Typography>
                <div>
                  <div className="py-3">
                    <Typography fontFamily="Times New Roman" variant="body1">
                      <b>Participated in Campus Developers Connect 2023 at KCC Convention Center, General Santos City</b>
                    </Typography>
                    <Typography fontFamily="Times New Roman" variant="body2">
                      <i>May 12, 2023</i>
                    </Typography>
                  </div>
                </div>
                <div>
                  <div className="py-3">
                    <Typography fontFamily="Times New Roman" variant="body1">
                      <b>Participated in Startup 102 Workshop of DICT Region XII and Mainland BARMM via ZOOM</b>
                    </Typography>
                    <Typography fontFamily="Times New Roman" variant="body2">
                      <i>November 5, 2022</i>
                    </Typography>
                  </div>
                </div>
                <div>
                  <div className="py-3">
                    <Typography fontFamily="Times New Roman" variant="body1">
                      <b>Completed the Python Programming Essentials Training of DICT-Luzon Cluster 3 via ZOOM</b>
                    </Typography>
                    <Typography fontFamily="Times New Roman" variant="body2">
                      <i>June 14-25 2021</i>
                    </Typography>
                  </div>
                </div>
                <div>
                  <div className="py-3">
                    <Typography fontFamily="Times New Roman" variant="body1">
                      <b>Training of Trainers on Web Content Management using WordPress via ZOOM </b>
                    </Typography>
                    <Typography fontFamily="Times New Roman" variant="body2">
                      <i>December 5-9, 2022</i>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>
    </>
  )

}