// 每次发起请求的时候，都会先调用这个函数，在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (option) {
    // 在发起真正的Ajax请求之前，统一拼接  请求的根路径
    option.url = "http://ajax.frontend.itheima.net" + option.url;
})
