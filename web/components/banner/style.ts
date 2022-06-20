import styled from "styled-components";

const StyledBanner = styled.div`
  background-image: url("static/banner.jpg");
  min-height: 50vh;
  background-size: cover;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 1rem;
`

const StyledText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px #000000;
`

export { StyledBanner, StyledText }