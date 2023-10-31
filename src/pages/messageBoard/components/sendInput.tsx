import React, { useState } from 'react'
import { Publish } from '../style'
import { Button, Input, message } from 'antd'
import Emoji from '@/components/Emoji'
const { TextArea } = Input
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { add } from '@/store/reducers/messageBoard'

export default function sendInput() {
  const [messageApi, contextHolder] = message.useMessage()

  const discussInit = {
    name: '',
    comments: ''
  }

  const [discuss, discussState] = useState(discussInit)

  const dispatch = useDispatch()

  const saveQuery = (value: string, key: string) => {
    discussState({ ...discuss, [key]: value })
  }

  const sendMessage = () => {
    if (!discuss.name) {
      return messageApi.info('请输入您的姓名')
    }
    if (!discuss.comments) {
      return messageApi.info('请输入留言信息')
    }

    const params = {
      ...discuss,
      id: nanoid(),
      time: new Date().toLocaleString().replace(/\//gi, '-'),
      agree: 0
    }

    dispatch(add(params))

    messageApi.success('添加成功')
    discussState(discussInit)
  }

  return (
    <Publish>
      {contextHolder}
      <h3>我要发表看法</h3>
      <div className="publish-comment flex align_items">
        <Input
          value={discuss.name}
          placeholder="请输入您的姓名"
          style={{ width: 300 }}
          onChange={(e) => saveQuery(e.target.value, 'name')}
        />
        <span>«-必填</span>
      </div>
      <div className="publish-comment">
        <TextArea
          value={discuss.comments}
          placeholder="请输入留言信息"
          autoSize={{ minRows: 4 }}
          onChange={(e) => saveQuery(e.target.value, 'comments')}
        />
      </div>
      <div className="publish-operate">
        <Emoji onEmoji={(e: string) => saveQuery(discuss.comments + e, 'comments')} />
        <Button type="primary" onClick={sendMessage}>
          发布
        </Button>
      </div>
    </Publish>
  )
}
