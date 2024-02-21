import { Button } from 'antd'
import React, { useState } from 'react'

export const ReportPage_Columns = ({ columns }) => {

  const [visibleColumns, setVisibleColumns] = useState(columns)
  const [checkedState, setCheckedState] = useState(columns.map(() => true))

  const btnColumnsHandler = (e) => {
    const columnIndex = columns.findIndex(column => column.key === e);
    if (columnIndex !== -1) {
      setVisibleColumns(prevColumns => prevColumns.filter(column => column.key !== e));
      const newCheckedState = [...checkedState];
      newCheckedState[columnIndex] = false;
      setCheckedState(newCheckedState);
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <p style={{ textAlign: 'left' }} className='text-secondary'><b>Reports Columns:</b></p>
        <div className='col border d-flex' style={{ boxShadow: '0 1px 4px #888888' }}>
          <div className='container m-1 d-flex flex-wrap justify-content-center'>              
          {
            Array.isArray(columns)
            && columns.map((column, key) => (
              <div className='col-3 my-1 mx-1 border text-left px-1 text-center' key={key} style={{ width: ''}}>
                <span className='mx-1' style={{ textAlign: 'left'}}>{column.key}</span>
                {/* <span style={{ textAlign: 'right'}}>
                  <Button className='bg-secondary-subtle border border-0 text-danger' name='name' htmlType='submit' onClick={() => btnColumnsHandler(column.key)}>X</Button>
                </span> */}
              </div>
            ))
          }              
          </div>
        </div>
      </div>
    </div>
  )
}
