import styled from "styled-components";

const StyledBanner = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  position: absolute;
  z-index: 999;
`

export { StyledBanner, StyledText }