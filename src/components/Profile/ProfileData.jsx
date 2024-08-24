import React from 'react';
import ShowData from "./ShowData";

const ProfileData = ({ section, user }) => {
  const renderContent = () => {
    switch (section) {
      case 'datos':
        return <ShowData user={user} handleEdit={()=>handleEdit(user)} />;
      case 'metodos':
        return <div>Mostrar todos los métodos de pago del usuario</div>;
      case 'pedidos':
        return <div>Mostrar todos los pedidos del usuario</div>;
      case 'favoritos':
        return <div>Mostrar todos los favoritos del usuario</div>;
      default:
        return <div>Selecciona una sección</div>;
    }
  };

  return (
    <div className="bg-light p-4">
      {renderContent()}
    </div>
  );
}

export default ProfileData;
