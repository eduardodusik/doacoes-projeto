import {NextPage} from "next";
import {Box, Container, TextField, Typography} from "@mui/material";
import {ReactNode, useState} from "react";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

interface IEvent {
  id?: string
  name: string
  description: string
  address: string
  city: string
  dueDate: string
  responsibleName: string
  phoneNumber: string
  createdAt: string
}

const Item = ({children}: { children: ReactNode }) => {
  return (
    <Box my={1}>
      {children}
    </Box>
  )
}

const Create: NextPage = () => {
  // const [value, setValue] = useState<Date | null>(
  //   new Date('2014-08-18T21:11:54'),
  // );
  //
  // const handleChange = (newValue: Date | null) => {
  //   setValue(newValue);
  // };
  return (
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
          <TextField label="Nome do evento" placeholder="Arrecadação de casacos em canoas..." fullWidth/>
        </Item>
        <Item>
          <TextField label="Preencha com a descrição" placeholder="Doe seu casaco guardado para alguém que precise..."
                     fullWidth/>
        </Item>
        <Item>
          <TextField label="Endereço do local de coleta" placeholder="Rua Alvorada, 220, Bairro Novo" fullWidth/>
        </Item>
        <Item>
          <TextField label="Cidade" placeholder="Canoas" fullWidth/>
        </Item>
        <Item>
          <TextField label="Nome do responsável da coleta" placeholder="Eduardo ou João" fullWidth/>
        </Item>
        {/*<Item>*/}
        {/*  <LocalizationProvider dateAdapter={AdapterDateFns}>*/}
        {/*    <DesktopDatePicker*/}
        {/*      label="Date desktop"*/}
        {/*      inputFormat="MM/dd/yyyy"*/}
        {/*      value={value}*/}
        {/*      onChange={handleChange}*/}
        {/*      renderInput={(params) => <TextField {...params} />}*/}
        {/*    />*/}
        {/*  </LocalizationProvider>*/}
        {/*</Item>*/}
        <Item>
          <TextField label="Número de contato" placeholder="(51) 99999-9999" fullWidth/>
        </Item>
      </Box>
    </Container>
  )
}

export default Create;