import styled from 'styled-components';

// Estilos do componente
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 5rem;
  border: 2px solid #333;
  width: 30vw;
  height: 40vh;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0f0f0;
`

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
`

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 15px;
`

const Button = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`

// Componente Login
const Login = () => {
  // Renderização da tela de login
  return (
    <Container>
      <Title>LOGIN</Title>
      <form>
        <DataContainer>
          <Label htmlFor="username">Usuário:</Label>
          <Input
            type="text"
            id="username"
            placeholder="Digite seu usuário"
          />
          <Label htmlFor="password">Senha:</Label>
          <Input
            type="password"
            id="password"
            placeholder="Digite sua senha"
          />
        </DataContainer>
        <Button type="submit">Entrar</Button>
      </form>
    </Container>
  )
}

export default Login