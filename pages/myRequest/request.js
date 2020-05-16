// pages/myRequest/request.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userList: [],
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
  /**
   * 请求数据
   */
  enter: function () {
    var that = this;
    wx.request({
      url: "https://api.github.com/users/RRapids",

      success: function (res) {
        that.setData({ userList: res.data });
        console.log(res.data); // 服务器回包信息
      },
    });
  },
});
