import React from 'react'
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {

  const { Header } = Layout;
  function getItem(label, key, children, type) {
    return {
    key,    
    children,
    label,
    type,
    };
  }
  const Navigate =  useNavigate()

  return (
    <>
     <Layout>
        <Header>          
          <Menu
            onClick={ ({key}) => {
              Navigate(key)
            }}
            theme="dark"
            mode="horizontal"           
            items={[
                    getItem('Home','/',null),                   
                  ]}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
      </Layout>
    </>
  )
}
