import {NextPage} from "next";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import {ReactNode, useCallback, useState} from "react";
import {Formik, useFormik} from "formik";
import MuiPhoneNumber from "material-ui-phone-number";
import {CreateEventPayload} from "../../models/events";
import {eventsService} from "../../services/events";

const Item = ({children}: { children: ReactNode }) => {
  return (
    <Box my={1}>
      {children}
    </Box>
  )
}


const INITIAL_VALUES: CreateEventPayload = {
  description: '',
  phoneNumber: '',
  responsibleName: '',
  address: '',
  city: '',
  name: ''
}

const Create: NextPage = () => {
  const { handleSubmit, handleChange, values, setFieldValue, isSubmitting, setSubmitting } = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (values) => {
      createEvent(values)
    },
  });


  const createEvent = useCallback(async (values: CreateEventPayload) => {
    try {
      await eventsService.createEvent(values)
    } catch (err) {
      console.log(err)
    } finally {
      setSubmitting(false)
    }
  }, [setSubmitting])


  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="md">
        <Box pb={2} display="flex" alignItems="flex-start" flexDirection="column">
          <Typography variant="h4" fontWeight="bold">
            Novo ponto de coleta
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            Preencha as informações do local de coleta de doação.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Item>
            <TextField
              name="name"
              onChange={handleChange}
              value={values.name}
              label="Nome do evento" placeholder="Arrecadação de casacos em canoas..." fullWidth/>
          </Item>
          <Item>
            <TextField
              name="description"
              onChange={handleChange}
              value={values.description}
              label="Preencha com a descrição" placeholder="Doe seu casaco guardado para alguém que precise..."
                       fullWidth/>
          </Item>
          <Item>
            <TextField
              name="address"
              onChange={handleChange}
              value={values.address}
              label="Endereço do local de coleta" placeholder="Rua Alvorada, 220, Bairro Novo" fullWidth/>
          </Item>
          <Item>
            <TextField
              name="city"
              onChange={handleChange}
              value={values.city}
              label="Cidade" placeholder="Canoas" fullWidth/>
          </Item>
          <Item>
            <TextField
              name="responsibleName"
              onChange={handleChange}
              value={values.responsibleName}
              label="Nome do responsável da coleta" placeholder="Eduardo ou João" fullWidth/>
          </Item>
          <Item>
            <MuiPhoneNumber
              name="phoneNumber"
              defaultCountry="br"
              onChange={(newValue) => setFieldValue('phoneNumber', newValue)}
              value={values.phoneNumber}
              label="Número de contato" placeholder="(51) 99999-9999" fullWidth/>
          </Item>
          <Box display="flex" justifyContent="flex-end" pt={2}>
            <Button disabled={isSubmitting} type="submit" variant="contained" color="secondary" size="large">
              Enviar
            </Button>
          </Box>
        </Box>
      </Container>
    </form>
  )
}

export default Create;