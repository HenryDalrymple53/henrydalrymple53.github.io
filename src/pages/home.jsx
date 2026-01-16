import { Container, Box, Button, Stack } from "@mui/material";
import { List, ListItem, ListItemText } from "@mui/material";
import { CenteredImage } from "../components/CenteredImage";
import { ResponsiveText } from "../components/ResponsiveText";
export function Home() {
  return (
    <>

      <Container maxWidth="xl">
        <Box
          sx={{
            minHeight: "80vh",
            display: "flex",
            alignItems: "center-top",
          }}
        >
          <Stack spacing={4}>

            <ResponsiveText variant="h1" component="h1" fontWeight={700}>
              Hi, I’m Henry Dalrymple
            </ResponsiveText>

            <ResponsiveText variant="h2" color="text.secondary">
              Software Developer - Robotics, sensors
            </ResponsiveText>
            <ResponsiveText variant="h2" >
              <br/>
              <br/>
              <br/>
              
            </ResponsiveText>
            <ResponsiveText variant="h3">
              In my time at Oregon State University, I have worked on:
            </ResponsiveText>

            <List>
                <ListItem disablePadding>
                    <ListItemText
                        primary={
                        <>
                            <ResponsiveText variant="h4" fontWeight={600}>
                            Intelligent Robotics
                            </ResponsiveText>
                            <ResponsiveText variant="body1" color="text.secondary">
                            Autonomous systems, perception pipelines, and advanced control schemes for rover and 6 DoF robotic arm
                            <CenteredImage
                                          src="/photos/intelligence.gif"
                                          alt="Weather image"
                                          maxWidth={500}
                              />
                            </ResponsiveText>
                        </>
                        }
                    />
                </ListItem>

                <ListItem disablePadding>
                    <ListItemText
                        primary={
                        <>
                            <ResponsiveText variant="h4" fontWeight={600}>
                            Sensor Integration
                            </ResponsiveText>
                            <ResponsiveText variant="body1" color="text.secondary">
                            Collection and comprehension of large array of sensors using diverse visualization methods
                            <CenteredImage
                                          src="/photos/sensor.gif"
                                          alt="Weather image"
                                          maxWidth={500}
                              />
                            </ResponsiveText>
                        </>
                        }
                    />
                </ListItem>


                <ListItem disablePadding>
                    <ListItemText
                        primary={
                        <>
                            <ResponsiveText variant="h4" fontWeight={600}>
                            Networks
                            </ResponsiveText>
                            <ResponsiveText variant="body1" color="text.secondary">
                            Creating robust compression and transportation pipelines for time sensitive information across distant and lossy environments
                            </ResponsiveText>
                            <CenteredImage
                                          src="/photos/comms.png"
                                          alt="Weather image"
                                          maxWidth={500}
                              />

                        </>
                        }
                    />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText
                        primary={
                        <>
                            <ResponsiveText variant="h4" fontWeight={600}>
                            UI Interfacing
                            </ResponsiveText>
                            <ResponsiveText variant="body1" color="text.secondary">
                            Creating real-time control and status communication pipelines tied with intuitive displays for best operator performance
                            </ResponsiveText>
                            <CenteredImage
                                          src="/photos/UI.png"
                                          alt="Weather image"
                                          maxWidth={500}
                              />
                        </>
                        }
                    />
                </ListItem>
                <ListItem disablePadding>
                    <ListItemText
                        primary={
                        <>
                            <ResponsiveText variant="h4" fontWeight={600}>
                            Sustainment Tooling Support
                            </ResponsiveText>
                            <ResponsiveText variant="body1" color="text.secondary">
                            Generate a variety of tools to increase quality of life and efficiency for developers and normal users
                            </ResponsiveText>
                            <CenteredImage
                                          src="/photos/tooling.png"
                                          alt="Weather image"
                                          maxWidth={500}
                              />
                        </>
                        }
                    />
                </ListItem>
                </List>
                

            
          </Stack>
        </Box>
      </Container>
    </>
  );
}
