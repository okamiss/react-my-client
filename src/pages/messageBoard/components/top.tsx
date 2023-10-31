import React from 'react'
import { Content } from '../style'
import { Empty, Button, Modal, Popconfirm } from 'antd'
import { LikeOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { agree, del } from '@/store/reducers/messageBoard'

import type { messageBoardData } from '@/types/messageBoard'

export default function top() {
  const dataList = useSelector((state: RootState) => state.messageBoard.dataList)
  const dispatch = useDispatch()

  const agreeMsg = (item: messageBoardData) => {
    dispatch(agree(item))
  }

  const delMsg = (item: messageBoardData) => {
    dispatch(del(item))
  }

  return (
    <Content>
      <h3>留言信息（{dataList.length}）条</h3>
      {dataList.length ? (
        dataList.map((item: messageBoardData) => (
          <div className="content-item" key={item.id}>
            <div className="content-top">
              {item.name}
              <span>{item.time}</span>
            </div>
            <div className="content-comments">{item.comments}</div>
            <div className="content-topic">
              <div className="comment-topic-agree" onClick={() => agreeMsg(item)}>
                <LikeOutlined />
                赞同
                {item.agree ? <i>{item.agree}</i> : ''}
              </div>

              <Popconfirm
                placement="bottom"
                title="提示"
                description="确认删除该条吗?"
                onConfirm={() => delMsg(item)}
                okText="是"
                cancelText="否"
              >
                <Button danger type="text">
                  删除
                </Button>
              </Popconfirm>
            </div>
          </div>
        ))
      ) : (
        <Empty description="暂无留言" />
      )}
    </Content>
  )
}
