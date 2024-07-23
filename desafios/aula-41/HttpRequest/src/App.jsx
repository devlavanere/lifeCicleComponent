import Header from "./components/Header"
import GetUser from "./components/GetUser"
import UserForm from "./components/UserForm"
import UpdateUser from "./components/UpdateUser"
import DeleteUser from "./components/DeleteUser"
import './App.css'

function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container-request">
          <UserForm />
          <GetUser />
          <UpdateUser />
          <DeleteUser />
      </div>
    </>
  )
}




export default App
