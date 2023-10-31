import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { message } from 'antd'
// import type { userInfoType, LoginType } from '@/types/user'
import { userList } from '@/common/user-data'

// 创建异步操作的 thunk 函数
export const Login = createAsyncThunk('login', async (loginInfo: LoginType) => {
  const res = await new Promise<userInfoType>((resolve) => {
    const getInfo = userList.find((item) => item.username === loginInfo.username)

    if (!getInfo) {
      return message.error('用户名不存在')
    }
    if (loginInfo.password !== getInfo.password) {
      return message.error('密码错误')
    }

    setTimeout(() => {
      return resolve(getInfo)
    }, 500)
  })

  return res
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: localStorage.getItem('username') || '',
    token: localStorage.getItem('token') || ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {})
      .addCase(Login.fulfilled, (state, action: PayloadAction<userInfoType>) => {
        message.success('登录成功')
        state.username = action.payload.username
        state.token = action.payload.token
        localStorage.setItem('username', action.payload.username)
        localStorage.setItem('token', action.payload.token)

        setTimeout(() => {
          location.href = '/'
        }, 800)
      })
      .addCase(Login.rejected, (state, action) => {})
  }
})

export const {} = userSlice.actions
export default userSlice.reducer
