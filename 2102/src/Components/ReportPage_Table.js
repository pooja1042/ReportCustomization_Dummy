import { Table } from 'antd'
import React from 'react'

export const ReportPage_Table = ({columns, dataSource}) => {
  return (
    <div className='container'>
      <div className='row' style={{ boxShadow: '0 1px 4px #888888' }}>
        <div className='col'>
          <Table columns={columns} dataSource={dataSource} pagination={false}></Table>
        </div>
      </div>
    </div>
  )
}
