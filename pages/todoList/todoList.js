// pages/todoList/todoList.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 1,
        name: "任务1",
        status: 1,
      },
      {
        id: 2,
        name: "任务2",
        status: 1,
      },
      {
        id: 3,
        name: "任务3",
        status: 1,
      },
    ],
    addText: "",
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  setInput: function (e) {
    this.setData({
      addText: e.detail.value,
    });
  },
  addTodoHide: function () {
    this.setData({
      addShow: false, // 控制添加输入面板隐藏
      focus: false, // 失去焦点
      addText: "", // 清空值
    });
  },
  addTodo: function () {
    // 检查有没有输入
    if (!this.data.addText.trim()) {
      return;
    }
    var temp = this.data.list; // 取出list
    var addT = {
      id: new Date().getTime(), // 取当前时间
      name: this.data.addText,
      status: 1,
    };
    temp.push(addT); // 添加新的todo
    this.showCur(temp); //更新list
    this.addTodoHide();
    wx.setStorage({
      key: "list",
      data: temp,
    });
    wx.showToast({
      title: "添加成功",
      icon: "success",
      image: "",
      duration: 1500,
    });
  },
  changeStatus: function (e) {
    var _this = this;
    var item = e.currentTarget.dataset.item;
    var temp = _this.data.list;
    temp.forEach((e1) => {
      if (e1.id === item) {
        if (e1.status === 1) {
          e1.status = 0;
          _this.showCur(temp);
          wx.setStorage({
            key: "list",
            data: temp,
          });
          wx.showToast({
            title: "已完成任务",
            icon: "success",
            image: "",
            duration: 1500,
          });
        } else {
          wx.showModal({
            title: "",
            content: "该任务已完成，确定重新开始任务？",
            showCancel: true,
            cancelText: "取消",
            cancelColor: "#000000",
            confirmText: "确定",
            confirmColor: "#3CC51F",
            success: (result) => {
              if (result.confirm) {
                e1.status = 1;
                _this.showCur(temp);
                wx.setStorage({
                  key: "list",
                  data: temp,
                });
              } else {
                return console.log("不操作");
              }
            },
          });
        }
      }
    });
    console.log(item);
  },
  showCur: function (data) {
    this.setData({
      list: data,
    });
  },
});
