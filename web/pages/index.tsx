import type {NextPage} from 'next'
import {Box, Card, CardContent, CardHeader, CardMedia, Container, Grid, Paper, Typography} from "@mui/material";
import Banner from "../components/banner";
import {eventsService} from "../services/events";
import {AppProps} from "next/app";
import {EventResponse} from "../models/events";
import {useRouter} from "next/router";

export type HomeProps = {
  data: EventResponse[]
}

const Home: NextPage<HomeProps> = ({ data }) => {
  const router = useRouter()
  const goToEvent = (eventId: string) => {
    router.push({
      pathname: '/events/[id]',
      query: { id: eventId },
    })
  }

  return (
    <>
      <Container maxWidth="xl">
        <Box pt={2}>
          <Banner/>
        </Box>
        <Box pt={2}>
          <Grid container spacing={4}>
            {data.map(item => (
              <Grid item md={3} key={item.id}>
                <Card component={Paper} style={{ cursor: 'pointer', height: '100%' }} onClick={goToEvent.bind(this, item.id)}>
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://www.canoas.rs.gov.br/wp-content/uploads/2019/03/parque-getilio-vargas-3.jpg"
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body1">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export async function getServerSideProps() {

  const { data } = await eventsService.getEvents()

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Home
