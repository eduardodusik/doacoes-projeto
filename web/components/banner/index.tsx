import {StyledBanner, StyledText} from "./style";
import {Button} from "@mui/material";
import {useRouter} from "next/router";
import Image from 'next/image'

const Banner = () => {
  const {push} = useRouter()

  return (
    <StyledBanner>
      <StyledText>Lorem ipsum </StyledText>
      <Image
        alt="Faça sua parte"
        src="/banner.jpg"
        layout='fill'
        objectFit='cover'
        objectPosition="top"
      />
    </StyledBanner>
  )
}

export default Banner