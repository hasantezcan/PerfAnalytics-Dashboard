import { useState } from 'react'
import { Table, Tooltip } from 'antd'
import moment from 'moment'

import { getClippedText } from '~/util/text.utils'
import { Metric } from '~/models/Metric'

import './style.css'

interface EntriesWidgetProps {
  metrics: Metric[]
}

function EntriesWidget({ metrics }: EntriesWidgetProps) {
  const [expandedRowKeys, setExpandedRowKeys] = useState([])
  const [expandedRowEntries, setExpandedRowEntries] = useState([])

  const onTableRowExpand = (expanded: any, record: any) => {
    const keys = []

    if (expanded) {
      keys.push(record._id)
    }

    setExpandedRowEntries(record.Entries)
    setExpandedRowKeys(keys as any)
  }

  const expandedRowRender = () => {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        ellipsis: {
          showTitle: false
        },
        render: (name: any) => (
          <Tooltip placement="topLeft" title={name}>
            {name}
          </Tooltip>
        )
      },
      {
        title: 'Initiator Type',
        dataIndex: 'initiatorType',
        key: 'initiatorType'
      },
      {
        title: 'Response End',
        dataIndex: 'responseEnd',
        key: 'responseEnd',
        ellipsis: true
      },
      {
        title: 'Transfer Size',
        dataIndex: 'transferSize',
        key: 'transferSize',
        render: (transferSize: any) => `${transferSize} B`
      },
      {
        title: 'Time',
        dataIndex: 'createdAt',
        key: 'createdAt',
        render: (createdAt: any) => moment(createdAt).format('HH:mm:ss')
      }
    ]

    return (
      <Table
        columns={columns}
        dataSource={expandedRowEntries}
        pagination={false}
      />
    )
  }

  const columns = [
    {
      title: 'Url',
      dataIndex: 'URL',
      key: 'URL',
      ellipsis: {
        showTitle: false
      },
      render: (URL: any) => (
        <Tooltip placement="topLeft" title={URL}>
          {URL}
        </Tooltip>
      ),
      sorter: (a: any, b: any) => a.URL.length - b.URL.length
    },
    {
      title: 'UserAgent',
      dataIndex: 'UserAgent',
      key: 'UserAgent',
      ellipsis: {
        showTitle: false
      },
      render: (UserAgent: any) => (
        <Tooltip placement="topLeft" title={UserAgent}>
          {UserAgent}
        </Tooltip>
      )
    },
    {
      title: 'FCP',
      dataIndex: 'FCP',
      key: 'FCP',
      ellipsis: true,
      render: (FCP: any) => getClippedText(FCP.toString(), 9)
    },
    {
      title: 'TTFB',
      dataIndex: 'TTFB',
      key: 'TTFB',
      ellipsis: true,
      render: (TTFB: any) => getClippedText(TTFB.toString(), 9)
    },
    {
      title: 'DomLoad',
      dataIndex: 'DomLoad',
      key: 'DomLoad',
      ellipsis: true,
      render: (DomLoad: any) => getClippedText(DomLoad.toString(), 9)
    },
    {
      title: 'WindowLoad',
      dataIndex: 'WindowLoad',
      key: 'WindowLoad',
      ellipsis: true,
      render: (WindowLoad: any) => getClippedText(WindowLoad.toString(), 9)
    },
    {
      title: 'Time',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt: any) => moment(createdAt).format('HH:mm:ss')
    }
  ]

  return (
    <Table
      rowKey="_id"
      className="table-striped-rows"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={metrics}
      expandedRowKeys={expandedRowKeys}
      onExpand={onTableRowExpand}
      scroll={{ y: 400, x: 1024 }}
    />
  )
}

export default EntriesWidget
