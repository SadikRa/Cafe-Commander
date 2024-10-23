import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useState } from 'react';

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer}>Toggle Drawer</button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{ backgroundColor: '#4A5568' }} 
      >
        <h2>Cafe Commander Dashboard</h2>
        <ul>
          <li>Orders</li>
          <li>Menu Management</li>
          <li>Chef's Specials</li>
          <li>Reports</li>
        </ul>
      </Drawer>
    </>
  );
};


export default DashBoard;