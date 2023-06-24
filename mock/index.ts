import mockJS from 'mockjs';

const usersList = mockJS.mock({
  "data|100": [{
    "id|+1": 1,
    "name": "@cname",
    "age|18-28": 20,
    // 头像
    "avatar": "@image('200x200', '#50B347', '#FFF', 'Mock.js')",
    // 时间
    "date": "@date('yyyy-MM-dd')",
    // 省份
    "province": "@province",
    // 城市
    "city": "@city",
    // 区
    "region": "@region",
    // 地址
    "address": "@county(true)",
  }]
})

module.exports = [
  {
    method: 'get',
    url: '/api/users',
    response: ({ body }) => {
      return {
        code: 200,
        msg: 'success',
        data: usersList
      }
    }
  }
]