import react from 'react'
import styled from 'styled-components'
import pic from '../../asset/about-banner.png'
import { FiSearch } from 'react-icons/fi'
import { Button } from 'react-scroll'

const Cart = () => {
    return (
        <Container>
            <CadHolder>
                <Cad>
                    <Bn> text</Bn>
                    <Img src={pic} alt="" />
                    <Cir>
                        <P bcc="green">N</P>
                        <H2>Napoloan Hill</H2>
                        <Icon>
                            <FiSearch />
                            <T>13</T>
                        </Icon>
                    </Cir>
                </Cad>
                <Cad>
                    <Bn>Order</Bn>
                    <Img src={pic} alt="" />
                    <Cir>
                        <P bcc="#800080">J</P>
                        <H2>James Clear</H2>
                        <Icon>
                            <FiSearch />
                            <T>2</T>
                        </Icon>
                    </Cir>
                </Cad>

                <Cad>
                    <Bn>comedy</Bn>
                    <Img src={pic} alt="" />
                    <Cir>
                        <P bcc="green">K</P>
                        <H2>Kelvin Hart</H2>
                        <Icon>
                            <FiSearch />
                            <T>4</T>
                        </Icon>
                    </Cir>
                </Cad>
                <Cad>
                    <Bn>Novels</Bn>
                    <Img src={pic} alt="" />
                    <Cir>
                        <P bcc="black">N</P>
                        <H2>Clip Thom</H2>
                        <Icon>
                            <FiSearch />
                            <T>1</T>
                        </Icon>
                    </Cir>
                </Cad>
            </CadHolder>
            <CadHolder>
                <Cad>
                    <Bn>storage</Bn>
                    <Img src={pic} alt="" />
                    <Cir>
                        <P bcc="orange">N</P>
                        <H2>Napoloan Hill</H2>
                        <Icon>
                            <FiSearch />
                            <T>13</T>
                        </Icon>
                    </Cir>
                </Cad>
                <Cad>
                    <Bn>office</Bn>
                    <Img src={pic} alt="" />
                    <Cir>
                        <P bcc="green">J</P>
                        <H2>James Clear</H2>
                        <Icon>
                            <FiSearch />
                            <T>2</T>
                        </Icon>
                    </Cir>
                </Cad>

                <Cad>
                    <Bn>Hrm</Bn>
                    <Img src={pic} alt="" />
                    <Cir>
                        <P bcc="black">K</P>
                        <H2>Kelvin Hart</H2>
                        <Icon>
                            <FiSearch />
                            <T>4</T>
                        </Icon>
                    </Cir>
                </Cad>
                <Cad>
                    <Bn>Finance</Bn>
                    <Img src={pic} alt="" />
                    <Cir>
                        <P bcc="#800080">N</P>
                        <H2>Clip Thom</H2>
                        <Icon>
                            <FiSearch />
                            <T>1</T>
                        </Icon>
                    </Cir>
                </Cad>
            </CadHolder>

        </Container>
    )
}
export default Cart;
const Bn = styled.div`
height:20px;
width:50px;
padding:10px 30px;
background-color:black;
display:flex;
border-radius:10px;
align-items:center;
justify-content:center;
position:absolute;
top:5px;
left:10px;
color:white;
&:hover{
    background-color:orange;
}
`
const Cadd = styled.div`

`
const T = styled.div`
 font-size:25px;
 font-weight:400;
`
const Icon = styled.div`
height:50px;
width:80px;
// background-color:red;
margin-left:100px;
display:flex;
padding-left:70px;
align-items:center;
justify-content:center;
gap:5px;

`
const H2 = styled.div`
  font-weight:500;
  font-size:16px;
  gap:10px;
`
const P = styled.div<{ bcc: string }>`
  height:50px;
  width:50px;
  border-radius:50px;
  background-color:${({ bcc }) => bcc};
  display:flex;
  align-items:center;
 justify-content:center;
 
 
`
const Cir = styled.div`
  height:200px;
  width:100%;
  background-color:gray;
  display:flex;
  align-items:center;
  gap:1px solid gray;
//  justify-content:center;
&:hover{
    background-color:orange;
}
`
const Img = styled.img`
 width:400px;
 height:200px; 
 object-fit:contain;
 &:hover{
    background-color:orange;
}

`
const Cad = styled.div`
 width:100%;
 height:100%;
//  background-color:black;
 gap:2px solid gray;
 color:white;
 display:flex;
 align-items:center;
 justify-content:space-between;
 flex-direction:column;
 border:1px solid gray;
 position:relative;

 
`
const CadHolder = styled.div`
height:300px;
width:90%;
background-color:white;
display:flex;
gap:10px;
margin-bottom:30px;

`

const Container = styled.div`
 height:100vh;
 width:100%;
 background-color:white;
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction:column;
 margin-top:10px;
`