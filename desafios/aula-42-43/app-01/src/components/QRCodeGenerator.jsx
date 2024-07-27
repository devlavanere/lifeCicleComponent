import { useState } from "react"
import styled from 'styled-components'
import QRCode from 'qrcode.react'

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`
const Title = styled.h2 `
    margin-bottom: 20px;
`
const Input = styled.input `
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
`
const QRContainer = styled.div `
   display: flex;
   justify-content: center;
   align-items: center;
   width: 200px;
   height: 200px;
   border: 1px solid #ccc;
   border-radius: 5px;
`

const QRCodeGenerator = () => {
    const [code, setCode] = useState('')

    const handleInputChange = (event) => {
        setCode(event.target.value)
    }

    return (
        <Container>
            <Title>QRCode Generator</Title>
            <Input
                type="text"
                value={code}
                onChange={handleInputChange}
            />

            <QRContainer>
                {code && <QRCode value={code} size={180} />}
            </QRContainer>
        </Container>
    )
}

export default QRCodeGenerator