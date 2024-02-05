import React, { useEffect, useState } from 'react'
import { Layout, Checkbox, Button, Table, ConfigProvider, Form } from 'antd'
import axios from 'axios'
import { Content } from 'antd/es/layout/layout';
import './style.css'

export const Home = () => {

  const { Sider } = Layout;

  const [dataR, setDataR] = useState([])
  const [dataRColumns, setDataRCoumns] = useState([])
  const [dataRRows, setDataRRows] = useState([])

  const [columns, setColumns] = useState([])
  const [checkedValues, setCheckedValues] = useState({});
   const uniqueColumns = new Set();

  useEffect( () => {
    getAllReservations()
    getColumnsName()
  },[])

  const getAllReservations = async() => {
    try{
      const result = await axios.get('http://localhost:3030/GetAllReservations')
      setDataR(result.data)

      const cols = []
      Object.keys(result.data[0]).map( (nm) => {
        cols.push({
          title: nm,
          dataIndex: nm,
          key: nm,
        })
        setDataRCoumns(cols)

        const rows = []
        result.data.map((old, key) => {
          rows.push({
            ...old,
            key: key
          })
        })
        setDataRRows(rows)
      // console.log("cols:\t", result.data);
      })

    }catch(error){
      console.log("Error:\n", error.message);
      alert('Somthing Went Wrong!!!')
    }
  }


  const getColumnsName = async() => {
    try{
      const result = await axios.get('http://localhost:3030/FetchAllColumns')
      setColumns(result.data)
    }catch(error){
      console.log("Error:\n", error);
      alert('Somthing Went Wrong!!!')
    }
  }
  
   const handleCheckboxChange = (tableName, selectedColumns) => {
    setCheckedValues({
      ...checkedValues,
      [tableName]: selectedColumns,
    });    
  };

  // const sendServer = async() => {
  //   try{
  //     const result = await axios.post('http://localhost:3030/FetchMe', checkedValues)
  //     // const result = await axios.get(urlWithParams)
  //     console.log(result.data);
  //   }catch(error){
  //     console.log("Exception:\n", error);
  //   }
  // }

  // console.log("Result:\n", checkedValues);

  return (
    <>
    <Layout hasSider>
      <Sider        
        breakpoint="lg"
        collapsedWidth="0"        
      >
        <div className="demo-logo-vertical text-white">
          <h5>Select Data</h5>
          <Form>
            {
              columns.map(({ tableName, columns }) => {
                // Remove duplicate columns before rendering checkboxes
                const uniqueColumnsForTable = columns.filter(column => !uniqueColumns.has(column));

                // Add unique columns to the Set
                columns.forEach(column => uniqueColumns.add(column));

                return (
                  <div key={tableName}>
                    <div className=''>
                      {/* <ConfigProvider theme={{ color: 'red'}}> */}
                        <Checkbox.Group    
                        className='custom-checkbox'                                                            
                          options={uniqueColumnsForTable}                                        
                          value={uniqueColumnsForTable}
                          onChange={(selectedColumns) => handleCheckboxChange(tableName, selectedColumns)}
                        />
                      {/* </ConfigProvider> */}
                    </div>
                  </div>
                );
              })
            }
          </Form>
        </div>        
      </Sider>
      <Content>
        <div className='m-5 bg-danger-subtle border'>
          {/* <Button htmlType='submit' onClick={ () => sendServer()}>Submit</Button> */}
          <Table columns={dataRColumns} dataSource={dataRRows}></Table>
        </div>
      </Content>
    </Layout>
    </>
  )
}
