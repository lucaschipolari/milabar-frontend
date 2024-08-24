import React from 'react';
import { PanelMenu } from 'primereact/panelmenu';

const Menu = ({ onSelectSection }) => {
  const items = [
    {
      label: 'Mis datos',
      icon: 'pi pi-user',
      command: () => onSelectSection('datos')
    },
    {
      label: 'Mis métodos de pago',
      icon: 'pi pi-credit-card',
      command: () => onSelectSection('metodos')
    },
    {
      label: 'Mis pedidos',
      icon: 'pi pi-shopping-cart',
      command: () => onSelectSection('pedidos')
    },
    {
      label: 'Mis favoritos',
      icon: 'pi pi-star',
      command: () => onSelectSection('favoritos')
    }
  ];

  return (
    <PanelMenu model={items} className="w-full md:w-20rem" />
  );
}

export default Menu;
