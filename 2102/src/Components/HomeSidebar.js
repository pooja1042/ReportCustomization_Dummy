import { Menu, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const HomeSidebar = ({ defaultValue, sendDataToParentKEY }) => {

  const [selectedItemKEY, setSelectedItemKEY] = useState(defaultValue);
  const [selectedItemNAME, setSelectedItemNAME] = useState('Home');
  // const Navigate = useNavigate()
  const { Search } = Input; 

  const onClick = (e) => {
    console.log('click', e.key);
    setSelectedItemKEY(e.key)
    // sendDataToParent(selectedItem)
    // Navigate(e.key)
  };

  useEffect( () => {
    sendDataToParentKEY(selectedItemKEY)
    // sendDataToParentKEY(selectedItemKEY)
  })

  // console.log('item:\t', selectedItem);

  function getItem(label, key, children, type, icon) {
    return {
    key,    
    children,
    label,
    type,
    icon
    };
  }

  const reportItems = [    
    getItem('Reservation Reports', 'reservation_reports', [
      getItem('Arrival List', 'arrival_list', null, null, null),
      getItem('Cancelled Reservation', 'cancelled_reservation', null, null, null),
      getItem('Country Wise Reservation Statistics', 'country_wise_reservation', null, null, null)
    ], null, null)    
  ];

  return (
    <div>
      <div className=''>
              <span className='w-100 fw-bold'>Reports Insights</span>              
              <Menu
                className='w-100 border border-0'
                onClick={onClick}
                style={{
                  width: 256,
                }}
                mode="vertical"                
              >
                <Menu.Item key='/' name='Home'>Home</Menu.Item>                
                  <Menu.SubMenu title="Templates" className='w-100'>
                    <Search placeholder="" enterButton className='my-2 ms-2 w-75' />
                    <Menu
                      className='w-100 border border-0'
                      mode="inline"
                      onClick={onClick}
                      // openKeys={openKeys}
                      // onOpenChange={onOpenChange}                      
                      items={reportItems}
                    />
                  </Menu.SubMenu>                           
                <Menu.Item key='custome_reports' name='Custome Reports'>Custome Reports</Menu.Item>
              </Menu>
      </div>
    </div>
  )
}
