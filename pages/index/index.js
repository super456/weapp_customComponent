//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    dialogData: { //传向子组件自定义的弹窗内容：默认
      title: '温馨提示', //标题
      content: '恭喜你，学会了自定义组件咯', //内容
      cancelText: '取消', //取消按钮内容
      confirmText: '确定', //确认按钮内容,
      isShowCancelBtn: true, //是否显示“取消”按钮，默认显示
      cancelEvent: '_cancelEvent', //绑定点击取消按钮后的事件
      confirmEvent: '_confirmEvent', //绑定点击确认按钮后的事件
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    //获得dialog组件：初始化组件
    this.dialog = this.selectComponent("#dialog"); //获取子组件实例对象，这样就可以直接访问组件的任意数据和方法。 
    // 自定义初始化数据内容，会传给子组件显示（可以不设置，有默认值）
    // this.setData({
    //   dialogData: { //传向子组件自定义的弹窗内容：默认
    //     title: '温馨提示', //标题
    //     content: '恭喜你，学会了自定义组件咯', //内容
    //     cancelText: '取消', //取消按钮内容
    //     confirmText: '确定', //确认按钮内容,
    //     isShowCancelBtn: false, //是否显示“取消”按钮，默认显示
    //     cancelEvent: '_cancelEvent', //绑定点击取消按钮后的事件
    //     confirmEvent: '_confirmEvent', //绑定点击确认按钮后的事件
    //   }
    // })
  },

  // 点击显示弹窗提示
  showDialog() {
    console.log('父组件——点击显示子组件弹窗操作');
    this.dialog.showDialog(); //调用组件弹窗显示方法：showDialog()

  },

  //取消事件
  _cancelEvent(e) {
    console.log('父组件index.js——你在子组件点击“取消”按钮，在这里执行回调操作');
    console.log('父组件index.js——取消事件——获取子组件传递过来的值：', e);
  },

  //确认事件
  _confirmEvent(e) {
    console.log('父组件index.js——你在子组件点击“确认”按钮，在这里执行回调操作');
    console.log('父组件index.js——确认事件——获取子组件传递过来的值：', e);
  }

})