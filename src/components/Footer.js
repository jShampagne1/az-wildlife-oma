import React from 'react'
import styled from 'styled-components'
import { 
  FaArrowRight, 
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare 
} from 'react-icons/fa'

const Footer = () => (
  <StyledFooter>
    <StyledDiv>
      <StyledP>
        Looking for information on licenses,recreation and AZGFD news? Visit our main site <FaArrowRight style={{paddingLeft: 5}}/><br/>
        Copyright @ 2018, Arizona Game and Fish Department. All rights reserved . Privacy Policy
        <FaArrowRight style={{paddingLeft: 5}}/>
      </StyledP>
    </StyledDiv>
    <LogoBox>
      <a href="www.facebook.com"><FaFacebookSquare style={{ color: 'rgb(167, 92, 46)'}} /></a>
      <a href="www.twitter.com"><FaTwitterSquare style={{ color: 'rgb(167, 92, 46)'}} /></a>
      <a href="www.youtube.com"><FaYoutubeSquare style={{ color: 'rgb(167, 92, 46)'}} /></a>
    </LogoBox>
  </StyledFooter>
    
)

const StyledFooter = styled.div`
  width: 98%;
  margin-left: 1%;
  height: 100px;
  z-index: -1;
  flex: row;
`
const StyledDiv = styled.div`
  flex: column;
  float: left;
`

const StyledP = styled.p`
  color: rgb(167, 92, 46);
  padding-top: 1rem;
  font-size: 1rem;
`
const LogoBox = styled.div`
  color: rgb(167, 92, 46);
  font-size: 2rem;
  float: left;
  flex: column;
  padding-left: 30%;
  padding-top: 1.4rem;
`

export default Footer