import { Table, Tag } from 'antd'
import React, { useEffect, useState } from 'react'

export const Home = () => {

  const [columns, setColumns] = useState([])
  const [rows, setRows] = useState([])

  useEffect( () => {
    fetchDataFromJson()
  }, [])

  const fetchDataFromJson = () => {
    fetch('./student_data.json')
      .then( (response) => { return response.json() } )
      .then( (data) => {

        // FOR COLUMNS IN ANTD TABLE FORMAT
        const cols = Object.keys(data.students[0])
        const columns = []
        cols.map( (name) => {
          columns.push({
            title: name,
            dataIndex: name,
            key: name,
          })
        })
        setColumns(columns)

        // FOR ROWS IN ANTD TABLE FORMAT
        const rows = []
        data.students.map( (row) => {
          rows.push({
            ...row,
            key:row.rno
          })
        })
        setRows(rows)
        // console.log(cols);
      })
  }

  const movingColumn = (fromIndex, toIndex) => {
    const newColumn = [...columns]
    const [movedColumn] = newColumn.splice(fromIndex, 1)
    newColumn.splice(toIndex, 0, movedColumn)
    setColumns(newColumn)
  }

  const DraggableColumn = ({key, name, old, movingColumn}) => {    
    console.log(name,"hh");
    return (
      <>
        <div>{name}</div>
        {/* {console.log(name)} */}
      </>
    )
  }

  const DraggableTable = ({column, row}) => {
    
    const updatedColumns = []
    column.map( (old, key) => {
      console.log(old.key);
      updatedColumns.push({
        ...old,
        render: ({key, old}) => {  return (
            <Tag >
              abcd
            </Tag>
          )}
      })
    })
    
    // console.log('col:\n', updatedColumns);

    return (
      <Table 
        columns={updatedColumns}       
        dataSource={row} 
      >
        {console.log(updatedColumns,"table")}
      </Table>
    )
  }
  
  console.log('col:\n', columns);
  // console.log('row:\n', rows);

  return (
    <center>
      <h4>Draggable Table Column</h4>
      <DraggableTable column={columns} row={rows} />
    </center>
  )
}
