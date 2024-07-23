import axios from "axios"

function UpdateUser() {
    
    const userData = {
        name: 'João',
        job: 'Fazer raiva'
    }

    const sendRequest = () => {

        axios.put('https://reqres.in/api/users/2', userData)
        .then(response => {
            console.log('Dados do usuário atualizado:', response.data)
            alert('Usuário atualizado: ' + JSON.stringify(response.data))
        })
        .catch(error => {
            console.error('Erro ao atualizar usuários:', error)
            alert('Erro ao atualizar dados do usuário.')
        })

    }
    
    return (
        <button onClick={sendRequest}>Atualizar dados</button>
    )
}

export default UpdateUser