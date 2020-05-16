Page({
  data: {
    goods: [
      {
        id: 1,
        name: "香蕉",
        detail: "好吃",
        image: "../../assets/timg.jpg",
      },
      {
        id: 2,
        name: "苹果",
        detail: "好吃",
        image: "../../assets/apple.jpg",
      },
      {
        id: 3,
        name: "橘子",
        detail: "好吃",
        image: "../../assets/orange.jpg",
      },
    ],
  },
  onMyEvent: function (e) {
    e.detail;
    console.log(e.detail);
    wx.navigateTo({
      url: "../../pages/detail/detail?item=" + JSON.stringify(e.detail),
    });
  },
});
