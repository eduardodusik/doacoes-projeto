import {AppBar, Box, Button, Container} from "@mui/material";
import {useRouter} from "next/router";
import Link from "next/link";


const Header = () => {
  const { push } = useRouter()

  return (
    <AppBar position="sticky" style={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Box p={3} display="flex" justifyContent="space-between">
          <div/>
          <Link href="/">DoacoesUlbra</Link>
          <Link href="/create">
            <Button variant="outlined">
              Cadastrar evento
            </Button>
          </Link>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header