// //axios插件
// import axios from 'axios';
// //是否允许跨域时携带cookie信息
// axios.defaults.withCredentials = false;
// //axios实例中配置默认的访问服务器端口
// let url = import.meta.env.VITE_HTTP; //如果项目打包时,此处为空

// //创建axios实例
// const instance = axios.create({
//   baseURL: url, // 配置公共请求路径
//   timeout: 5000, // 设置超时时间
// });

// // 请求拦截器：在发送post/get请求之前,判断是否在本地存储了token,如果有添加到headers内，后台会自己判断token是否过期
// instance.interceptors.request.use(
//   (config) => {
//     // 在发送请求之前做些什么
//     // 判断是否存在token，如果存在将每个页面header都添加token
//     if (localStorage.getItem("token")) {
//       config.headers.common["Authorization"] = "bearer" + localStorage.getItem("token");
//     }
//     return config;
//   }
// );



// //axios插件
// import axios from 'axios';
// //是否允许跨域时携带cookie信息
// axios.defaults.withCredentials = false;
// //设置token认证接口是,配置axios的默认表头配置
// let token = '';
// axios.defaults.headers.common['Authorization'] = token;
// //axios实例中配置默认的访问服务器端口

// let url = import.meta.env.VITE_HTTP; //如果项目打包时,此处为空

// let instance = axios.create({
//   //配置公共请求路径
//   baseURL: url,
// })

// //请求拦截器：在发送post/get请求之前,判断是否在本地存储了token,如果有添加到headers内，后台会自己判断token是否过期
// instance.interceptors.request.use(config => {
//   //拦截成功的操作
//   let token = localStorage.getItem('token');
//   //判断是否存在token

//   config.headers.Authorization = "bearer" + token;
//   //返回配置
//   return config;


// }, error => {
//   //拦截失败的操作
//   return Promise.reject(error);
// })
// //响应拦截器 ： 用于拦截后台的报错处理
// instance.interceptors.response.use(response => {
//   //响应成功
//   return response;
// }, error => {
//   //响应失败

//   if (error.response) {
//     //判断状态码
//     switch (error.response.status) {
//       case 401:
//         console.log('帐号或密码错误');
//         //登录失败,清除之前的token
//         localStorage.setItem('token', "");
//         //返回登录页
//         this.$router.push('/');
//         break;
//       case 403:
//         console.log('非法闯入,禁止访问');
//         break;
//       default:
//         console.log('请求错误');
//         break;
//     }
//   }
//   //返回接口提示信息
//   return Promise.reject(error.response.data);

// })

// //导出axios实例

// // export default instance



// //请求方式的封装[不需要导出axios实例]
// export let $get = (url, params) => {
//   return instance.get(url, {
//     params: params,
//   })
// }

// //post请求 封装三种类型

// //1.post请求并提交json数据的函数
// //url : 请求地址 ： data是提交的数据
// export let $postJson = (url, data) => {
//   return instance.post(url, data, {
//     headers: { 'Content-Type': 'application/json' }
//   })
// }

// //1.post文件上传
// //url : 请求地址 ： formdata是提交的数据
// export let $postUpload = (url, formdata) => {
//   return instance.post(url, formdata, {
//     headers: { 'Content-Type': 'multipart/form-data' }
//   })
// }


// //3.post请求：将提交的数据当作请求地址的参数进行提交
// //url请求地址：data提交数据
// export let $post = (url, data) => {
//   //将data的数据通过qs转换
//   let qsdata = qs.stringify(data);
//   return instance.post(url, qsdata, {
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//   })
// }














