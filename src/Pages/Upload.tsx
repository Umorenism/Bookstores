import react, { useState } from 'react'
import styled from 'styled-components';
import Header from '../Component/Static/Header';
import { Link } from 'react-router-dom';



const Upload = () => {

    const [Images, setImages] = useState("")
    const [PreviewImage, setPreviewImage] = useState("")
    const [Title, setTitle] = useState("")
    const [Summary, setSummary] = useState("")
    const [Author, setAuthor] = useState("")
    const [Category, setCategory] = useState("")


    const UploadImage = (e: any) => {
        const file = e.target.files?.[0];
        setImages(file);

        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewImage(url);
        }
    }
    return (
        <div>
            <Header />
            <Container>
                <Wrapper>
                    <ImageHold src={PreviewImage} alt='User Avater' />
                    <Button htmlFor="pic" >Upload Cover Image</Button>

                    <Input
                        type='file'
                        id='pic'
                        placeholder="Enter Title"
                        onChange={UploadImage}
                        style={{ display: 'none' }}
                    />
                    <Input placeholder="Enter Title" />

                    <Textarea placeholder="Summary....." />
                    <Input placeholder="Enter Author name" />
                    <Select>
                        <Option>Select Category</Option>
                        <Option>Comedy</Option>
                        <Option>Music</Option>
                        <Option>Romance</Option>
                    </Select>

                    <Link to="/">
                        <Button1>Submit</Button1>
                    </Link>

                </Wrapper>
            </Container>
        </div>
    )
}
export default Upload;

const Button1 = styled.div`
width:50px;
height:30px;
background-color:skyblue;
padding:10px 50px;
margin-top:10px;
border-radius:8px;
cursor:pointer;
text-decoration:none;
&:hover{
    background-color:orange;
    cursor:pointer;
    border:1px solid gray;
  }
`
const Option = styled.option`
 font-size:20px;
 
`
const Select = styled.select`
padding:10px 134px;
margin-top:10px;
width:55%;
&::placeholder{
    position:absolute;
    left:20px;
}

`

const Textarea = styled.textarea`
 width:55%;
 height:100px;
 margin-top:10px;
`

const Input = styled.input`

padding:10px 134px;
margin-top:10px;
font-size:18px;
border:1px solid green;
&::placeholder{
    position:absolute;
    left:20px;
}


`
const Button = styled.label`
background-color:black;
height:30px;
width:150px;
padding:10px 40px;
color:white;
border-radius:10px;
margin-top:8px;
cursor:pointer;
&:hover{
    background-color:orange;
    cursor:pointer;
    border:1px solid gray;
  }
 `

const ImageHold = styled.img`
  width:100%;
  height:100%;
  object-fit:contain;
  width:300px;
  height:300px;
  background-color:brown;
 `
const Wrapper = styled.div`
// background-color:cyan;
 width:50%;
 height:800px;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
 border:1px solid gray;
`
const Container = styled.div`
 height:100vh;
 width:100%;
 display:flex;
 align-items:center;
 justify-content:center;
 background-color:white;
 border-top:1px solid gray;
 flex-direction:column;
 position:relative;
 
`