import {Box, Container, Typography} from "@mui/material";
import {GetServerSideProps, NextPage} from "next";
import {EventResponse} from "../../models/events";
import {eventsService} from "../../services/events";

export type EventPageProps = {
  data: EventResponse
}

const EventPage: NextPage<EventPageProps> = ({data}) => {
  console.log(data)
  return (
    <Container maxWidth="lg">
      <Typography variant="h4">
        {data.name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {data.description}
      </Typography>

      <Box display="flex" flexDirection="column" pt={4}>
        <Typography variant="h6">
          Local de coleta
        </Typography>
        <Box pt={2}>
          <Typography variant="body1" color="textSecondary">
            Endereço: {data.address}, Cidade: {data.city}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" pt={4}>
        <Typography variant="h6">
          Informações de contato
        </Typography>
        <Box pt={2}>
          <Typography variant="body1" color="textSecondary">
            Responsável: {data.responsibleName}, Telefone: {data.phoneNumber}
          </Typography>
        </Box>
      </Box>

    </Container>
  )
}


type Params = {
  id: string
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps<Params> = async ({params}) => {

  const {data} = await eventsService.getEvent(params?.id as string)

  return {
    props: {data}, // will be passed to the page component as props
  }
}

export default EventPage
