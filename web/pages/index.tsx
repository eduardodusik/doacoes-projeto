import type { NextPage } from 'next'
import {Button, Container} from "@mui/material";
import Banner from "../components/banner";

const Home: NextPage = () => {
  return (
   <Container maxWidth="md">
     <Banner />
   </Container>
  )
}

export default Home
