import React, { useState } from 'react'
import { Badge, Button, Drawer, Layout, Menu, Input } from 'antd'
import { InfoCircleOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import './Style/style.css'
import { HomeSidebar } from './HomeSidebar';
import { ReportPage } from './ReportPage';

const { Header } = Layout
const { Search } = Input;  

export const Navigation = () => {

  const [open, setOpen] = useState(false);
  const [dataFromChildKEY, setDataFromChildKEY] = useState('');
  // const [dataFromChildNAME, setDataFromChildNAME] = useState('');
  const [placement] = useState('left');

  const Navigate = useNavigate()

  let whichToDisplay;

  function getItem(label, key, children, type, icon) {
    return {
    key,    
    children,
    label,
    type,
    icon
    };
  }
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleDataFromChildKEY = (key) => {
    setDataFromChildKEY(key);
  };
  // const handleDataFromChildNAME = (nm) => {
  //   setDataFromChildNAME(nm);
  // };
  // const showReportDetails = () => {
    switch(dataFromChildKEY)
    {
      case '/':
        whichToDisplay = <ReportPage whichReportData='home' whichReportName=''/>
        break;
      
      case 'arrival_list':
        whichToDisplay = <ReportPage whichReportData='arrival_list.json' whichReportName='Arrival List'/>
        break;

      case 'cancelled_reservation':
        whichToDisplay = <ReportPage whichReportData='cancelled_reservation.json'  whichReportName='Cancelled Reservation'/>
        break;
        
      case 'country_wise_reservation':
        whichToDisplay = <ReportPage whichReportData='country_wise_reservation' whichReportName='Country Wise Reservation Statistics'/>
        break;
      
      case 'custome_reports':
        whichToDisplay = <ReportPage whichReportData='custome_reports' whichReportName='Custome Reports'/>
        break;

      default: whichToDisplay = <ReportPage whichReportData='home' whichReportName=''/>
    }
  // }

  return (
    <div>
      <Layout>

        <Header className='container-fluid bg-white mb-4'>
          <div className='row nav-border-shadow'>
            <div className='col d-flex bg-white'>
              <div className='bg-white'>
                <Button className='border border-0' onClick={showDrawer}>
                <MenuFoldOutlined/>
                </Button>
                <Drawer
                  title="Basic Drawer"
                  placement={placement}
                  closable={false}
                  onClose={onClose}
                  open={open}
                  key={placement}
                >
                  <Menu
                    onClick={({ key }) => {
                      Navigate(key)
                    }}
                    mode="vertical"
                    items={[
                      getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                      getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                      getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                      getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                      getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                      getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                      getItem(null, '/', null, null, <Badge count={5} size='small'><img alt='Add' src="/images/calendar_blank.png" height="20" className='' /></Badge>),
                      getItem(null, '/', [
                        getItem('child1', '/', null, null, null),
                        getItem('child2', '/', null, null, null),
                        getItem('child3', '/', null, null, null)
                      ], null, <img alt='Add' src="/images/building.webp" height="30" className='' />),
                    ]}
                    style={{
                      flex: 1,
                      minWidth: 0,
                      background: 'none'
                    }}
                  />
                </Drawer>
              </div>
              <div className='bg-white'>
                <img 
                  className='img-fluid'
                  src="https://static.ipms247.com/oem_images/frontoffice/eZee_Absolute_1.png" 
                  alt="LOGO" 
                />
              </div>
              <div className='bg-white'>
                <Search placeholder="Quick Search" enterButton className='my-3 w-75' />            
                <InfoCircleOutlined
                  className='text-primary'
                  style={{ marginLeft: '8px' }}
                />
              </div>              
            </div>  
            <div className='col-5 d-flex bg-white'>
              <div className='bg-white'>
                <Menu  
                  className='border border-0'                      
                  onClick = { ( {key} ) => {
                    Navigate(key)
                  }}            
                  mode="horizontal"            
                  items={[
                    getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                    getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                    getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                    getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                    getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                    getItem(null, '/', null, null, <img alt='Add' src="/images/calendar_blank.png" height="20" className='' />),
                    getItem(null, '/', null, null, <Badge count={5} size='small'><img alt='Add' src="/images/calendar_blank.png" height="20" className='' /></Badge>),                                    
                  ]}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: 'none'
                  }}
                /> 
              </div>
              <div className='bg-white border-start border-dark-subtle my-1'>                
                <Menu    
                  className='border border-0'                   
                  onClick = { ( {key} ) => {
                    Navigate(key)
                  }}            
                  mode="horizontal"            
                  items={[                               
                    getItem(null, '/', [
                      getItem('child1', '/', null, null, null),
                      getItem('child2', '/', null, null, null),
                      getItem('child3', '/', null, null, null)
                    ], null, <img alt='Add' src="/images/building.webp" height="30" className='' />),
                  ]}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background: 'none'
                  }}
                /> 
              </div>
            </div>          
          </div>
        </Header>

        <Layout className='py-2'>
          <div className='container-fluid'>
            <div className='row mx-2 bg-white'>
              <div className='col-2 border p-2'>
                <HomeSidebar defaultValue='/' sendDataToParentKEY={handleDataFromChildKEY} />
              </div>
              <div className='col border p-2'>
                {/* {showReportDetails} */}
                {whichToDisplay}
              </div>
            </div>
          </div>
        </Layout>

      </Layout>
    </div>
  )
}
