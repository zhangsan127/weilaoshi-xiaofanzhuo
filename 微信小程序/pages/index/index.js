const CDN = 'https://xiaofanzhuo.vercel.app/小饭桌广告素材'

Page({
  data: {
    phone: '13402940381',
    address: '西安市碑林区白庙路民航小区',
    showBackTop: false,
    foodImages: [
      CDN + '/冬瓜烩肉丸.jpg',
      CDN + '/双椒鸡面.jpg',
      CDN + '/土豆烧牛肉.jpg',
      CDN + '/宫保鸡丁.jpg',
      CDN + '/干煸豆角.jpg',
      CDN + '/手撕包菜.jpg',
      CDN + '/炒杏鲍菇.jpg',
      CDN + '/玉米炖排骨.jpg',
      CDN + '/糯米丸子.jpg',
      CDN + '/红烧排骨.jpg',
      CDN + '/红烧鸡腿.jpg',
      CDN + '/西兰花炒虾仁.jpg',
      CDN + '/西红柿炒鸡蛋.jpg',
      CDN + '/辣椒炒肉.jpg',
      CDN + '/韩式烤肉.jpg',
      CDN + '/饺子.jpg',
      CDN + '/香干肉丝.jpg'
    ]
  },

  onLoad() {
    // 页面加载
  },

  onPageScroll(e) {
    // 控制返回顶部按钮显隐
    const show = e.scrollTop > 400;
    if (show !== this.data.showBackTop) {
      this.setData({ showBackTop: show });
    }
  },

  // 拨打电话
  callPhone() {
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    });
  },

  // 复制微信号
  copyWechat() {
    wx.setClipboardData({
      data: this.data.phone,
      success() {
        wx.showToast({
          title: '微信号已复制',
          icon: 'success'
        });
      }
    });
  },

  // 打开地图导航
  openMap() {
    wx.openLocation({
      // 民航小区坐标（百度/高德坐标）
      latitude: 34.2437,
      longitude: 108.9200,
      name: '卫老师品质小饭桌',
      address: this.data.address,
      scale: 16
    });
  },

  // 滚动到价格方案
  scrollToPricing() {
    wx.pageScrollTo({
      selector: '#pricing',
      duration: 300
    });
  },

  // 返回顶部
  scrollToTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  },

  // 分享给朋友
  onShareAppMessage() {
    return {
      title: '卫老师品质小饭桌 - 家的味道，妈妈般的守护',
      path: '/pages/index/index',
      imageUrl: CDN + '/红烧排骨.jpg'
    };
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: '卫老师品质小饭桌 - 十余年口碑，西工大附中旁品质托管',
      imageUrl: CDN + '/红烧排骨.jpg'
    };
  }
})
