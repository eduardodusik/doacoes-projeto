import type {NextPage} from 'next'
import {Box, Container} from "@mui/material";
import Banner from "../components/banner";

const Home: NextPage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box pt={2}>
          <Banner/>
        </Box>
      </Container>
    </>
  )
}

export default Home
