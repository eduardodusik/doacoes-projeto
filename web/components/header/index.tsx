import {AppBar, Box, Button, Container} from "@mui/material";
import {useRouter} from "next/router";
import Link from "next/link";
import { LogoStyled } from './style'

const Header = () => {
  const { push } = useRouter()

  return (
    <AppBar position="sticky" style={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Box p={3} display="flex" justifyContent="space-between">

          <LogoStyled >
            <Link href="/">
              DoacoesUlbra
            </Link>
          </LogoStyled>

          <Link href="/create">
            <Button variant="outlined">
              Novo ponto de coleta
            </Button>
          </Link>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header