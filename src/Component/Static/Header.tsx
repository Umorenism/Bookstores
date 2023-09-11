import react, { useState } from 'react'
import styled from 'styled-components';
import pic from '../../asset/logo.fee874adf31c8eb1115b.jpg'
import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'



const Header = () => {
  const [scrollTop, setScrollTop] = useState(false)
  const HeaderChange = () => {
    if (scrollTop && window.pageYOffset > 100) {
      setScrollTop(true)
    } else if (scrollTop && window.pageYOffset <= 70) {
      setScrollTop(true)
    }
    const Scroll = () => {
      window.scroll({ top: 0, behavior: "smooth" })
    }
    window.addEventListener("scroll", HeaderChange)
  }
  return (
    <div>

      <Container>

        <Image>
          <Logo src={pic} />
          <Text>Bookstore</Text>
        </Image>

        <End>
          <Search>
            <FiSearch />
          </Search>
          <NavLink to="/Upload-book" style={{ textDecoration: "none" }}>
            <Button>Uploads Book</Button>
          </NavLink>
        </End>

      </Container>

    </div>
  )
}
export default Header;



const Button = styled.button`
height:50px;
width:150px;
background-color:#EA4C89;
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
border-radius:10px;
color:white;
font-weight:500;
&:hover{
  background-color:orange;
  cursor:pointer;
  border:1px solid gray;
}
`


const Search = styled.div`
 font-size:25px;
 margin:10px;
 color:gray;
 font-weight:500;
`


const End = styled.div`
display:flex;
align-items:center;
justify-content:center;

`
const Text = styled.div`
font-size:30px;
font-weight:600;
margin-left:10px;

`


const Logo = styled.img`
height:100%;
width:100%;
object-fit:contain;
cursor:pointer;
padding-left:20px;

`

const Image = styled.div`
height:50px;
width:200px;
// background-color:purple;
display:flex;
align-items:center;
justify-content:center;
`

const Container = styled.div`
 height:100px;
 width:100%;
 background-color:white;
 display:flex;
 justify-content:space-between;
 gap:10px;
 align-items:center;
`
