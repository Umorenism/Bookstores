import react from 'react'
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi'
import vid from "../../asset/video.mp4"


const Hero = () => {
  return (

    <Container>
      <Video src={vid} autoPlay loop muted />
      <Text>
        <Wrap>
          <Button>
            <Btn>Romance</Btn>
            <Btn>Romance</Btn>
            <Btn>Comdy</Btn>
            <Btn>Comedy</Btn>
            <Btn>Comedy</Btn>
            <Btn>Comedy</Btn>
            <Btn>Comedy</Btn>
            <Btn>Comedy</Btn>
            <Btn>Comedy</Btn>
            <Btn>Comedy</Btn>
            <Btn>Comedy</Btn>
            <Btn>Comedy</Btn>
          </Button>
          <H1>Explore the world’s leading Books
            and Autors</H1>
          <P>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</P>

          <SearchHolder>
            <FiSearch />
            <Input placeholder='Search by Author Name' />
          </SearchHolder>
        </Wrap>
      </Text>
    </Container>
  )
}
export default Hero;
const Text = styled.div`
height:70vh;
width:100%;
position:absolute; 
`
const Wrap = styled.div`
  height:100%;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
const Video = styled.video`
height:80vh;
width:100%;
object-fit:cover;
position:absolute;
overflow:hidden;
`

const Input = styled.input`
display: flex;
flex:1;
outline:none;
border:none;
margin-left:10px;
font-size:20px;


`
const SearchHolder = styled.div`
  height:50px;
  width:30%;
  border-radius:50px;
  background-color:white;
  margin-top:30px;
  padding:10px 20px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:20px;
  
`;
const P = styled.div`
font-size:20px;
font-weight:200;
width:40%;
text-align:center;
color:white;
margin-top:20px;

`
const H1 = styled.div`
font-size:40px;
font-weight:700;
width:30%;
text-align:center;
color:white;
margin-top:30px;

`
const Btn = styled.div`
  height:20px;
  width:50px;
  padding:20px 40px;
  background-color:black;
  color:white;
  border-radius:50px;
  font-weight:600;
  &:hover{
    background-color:orange;
    cursor:pointer;
    border:1px solid gray;
  }
`
const Button = styled.div`
//  background-color:white;
 height:100px;
 width:95%;
 display:flex;
 justify-content:space-around;
 align-items:center;
 
`
const Container = styled.div`
 height:80vh;
 width:100%;
 background-color:skyblue;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 
`