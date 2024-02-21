import React, { useEffect, useState } from 'react'
import { Card, Avatar, Table } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios'
import { ReportPage_Columns } from './ReportPage_Columns';
import { ReportPage_Header } from './ReportPage_Header';
import { ReportPage_Table } from './ReportPage_Table';

const { Meta } = Card;

export const ReportPage = ({ whichReportData, whichReportName }) => {

  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState([])

  let toShow;

  if (whichReportData === 'home') {
    toShow = <Content className='container'>
      <div className='row border-bottom p-3'>
        <div className='col'>
          <div className=''>
            <h5 style={{ textAlign: 'left' }}><b>How Reports Work?</b></h5>
            <h6 style={{ textAlign: 'left' }}>
              kjfajklds kjfajklds kjfajklds kjfajklds kjfajklds kjfajklds kjfajkldskjfajklds
              kjfajklds kjfajklds kjfajklds kjfajklds kjfajklds kjfajklds kjfajkldskjfajklds
              kjfajklds kjfajklds kjfajklds kjfajklds kjfajklds kjfajklds kjfajkldskjfajklds
              kjfajklds kjfajklds kjfajklds kjfajklds kjfajklds kjfajklds kjfajkldskjfajklds
            </h6>
          </div>
        </div>
        <div className='col'>
          <div className='border border-0' style={{ textAlign: 'center' }}>
            <Card title="" className='w-100 border border-0'>
              <iframe
                className='rounded'
                // width="100%"                  
                src="https://www.youtube.com/embed/{YOUR_VIDEO_ID}"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Card>
          </div>
        </div>
      </div>
      <div className='row p-3'>
        <div>
          <h6 style={{ textAlign: 'left' }}><b>Reports History</b></h6>
          <div className='col d-flex justify-content-center'>
            <Card
              style={{
                width: 200,
                margin: 10,
              }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
            <Card
              style={{
                width: 200,
                margin: 10,
              }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </div>
        </div>
      </div>
    </Content>
  }
  else if (whichReportData === 'arrival_list.json') {
    toShow = <Content className='container'>
      <div className='row p-3'>
        <ReportPage_Header whichReportName={whichReportName} />
      </div>
      <div className='row p-3'>
        <ReportPage_Columns columns={columns} />
      </div>
      <div className='row p-3'>        
      <ReportPage_Table columns={columns} dataSource={rows}></ReportPage_Table>
        {/* <ReportPage_Table />        */}
      </div>
    </Content>
  }
  else if (whichReportData === 'cancelled_reservation.json') {
    // toShow= whichReportData
    toShow = <Content className='container'>
      <div className='row p-3'>
        <ReportPage_Header whichReportName={whichReportName} />
      </div>
      <div className='row p-3'>
        <ReportPage_Columns columns={columns} />
      </div>
      <div className='row p-3'>        
      <ReportPage_Table columns={columns} dataSource={rows}></ReportPage_Table>       
      </div>
    </Content>
  }

  useEffect(() => {
    if (whichReportData.includes('.json')){
      console.log('from useEffect:\t', whichReportData);
      fetchDataFromJson();
    } 
  }, [whichReportData]);

  const fetchDataFromJson = async () => {
    try {
      // Make an HTTP GET request to festch the JSON data
      const response = await axios.get(`./${whichReportData}`);
      // console.log('response', response.data);
      const jsonData = response.data;
      const spiltted = whichReportData.split('.')[0]
      // console.log('split', spiltted);
      // console.log('dt:\t', jsonData[spiltted]);
      // Extract columns from the first row (assuming it's an object)
      const firstRow = jsonData[spiltted][0];
      // console.log('firstRow:\t', firstRow);
      const jsonColumns = Object.keys(firstRow);
      const columns = []
      jsonColumns.map((name) => {
        columns.push({
          title: name,
          dataIndex: name,
          key: name,
        })
      })
      setColumns(columns);

      // Set rows as the entire data
     // FOR ROWS IN ANTD TABLE FORMAT
        const rows = []
        jsonData[spiltted].map( (row) => {
          rows.push({
            ...row,
            key:row.rno
          })
        })
        setRows(rows)
      // console.log('rows:\t', rows);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // console.log('cols:', columns, '\trows:', rows);

  return (
    <>
      {toShow}
    </>
  )
}
