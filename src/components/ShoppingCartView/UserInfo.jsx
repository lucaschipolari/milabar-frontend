import { Card } from 'primereact/card';
import "./userInfo.css"

const UserInfo = () => {
  return (
    <Card title="Informacion de usuario" className='user-info'>
      <p>Nombre: John Doe</p>
      <p>Email: johndoe@example.com</p>
    </Card>
  )
}
export default UserInfo