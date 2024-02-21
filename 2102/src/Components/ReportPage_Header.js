import { Button } from 'antd'
import { HistoryOutlined, FileAddOutlined, EditOutlined } from '@ant-design/icons'
import React from 'react'

export const ReportPage_Header = ({whichReportName}) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col' style={{ textAlign: 'left'}}>                       
            <h5><b>{whichReportName}</b></h5>                        
        </div>
        <div className='col' style={{ textAlign: 'right'}}>
          <Button className='border mx-1 text-secondary rounded-0 px-1 py-0' style={{ height: 'auto', fontSize: '12px'}}><HistoryOutlined />History</Button>
          <Button className='border mx-1 text-secondary rounded-0 px-1 py-0' style={{ height: 'auto', fontSize: '12px'}}><FileAddOutlined />Duplicate</Button>
          <Button className='border mx-1 text-secondary rounded-0 px-1 py-0' style={{ height: 'auto', fontSize: '12px'}}><EditOutlined />Customize</Button>
        </div>
      </div>
    </div>
  )
}
