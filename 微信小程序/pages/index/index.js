var CDN = 'https://www.wlspzxfz.xyz/%E5%B0%8F%E9%A5%AD%E6%A1%8C%E5%B9%BF%E5%91%8A%E7%B4%A0%E6%9D%90'

Page({
  data: {
    phone: '13402940381',
    address: '西安市碑林区白庙路民航小区',
    showBackTop: false,
    foodImages: [
      CDN + '/%E5%86%AC%E7%93%9C%E7%83%A9%E8%82%89%E4%B8%B8.jpg',
      CDN + '/%E5%8F%8C%E6%A4%92%E9%B8%A1%E9%9D%A2.jpg',
      CDN + '/%E5%9C%9F%E8%B1%86%E7%83%A7%E7%89%9B%E8%82%89.jpg',
      CDN + '/%E5%AE%AB%E4%BF%9D%E9%B8%A1%E4%B8%81.jpg',
      CDN + '/%E5%B9%B2%E7%85%B8%E8%B1%86%E8%A7%92.jpg',
      CDN + '/%E6%89%8B%E6%92%95%E5%8C%85%E8%8F%9C.jpg',
      CDN + '/%E7%82%92%E6%9D%8F%E9%B2%8D%E8%8F%87.jpg',
      CDN + '/%E7%8E%89%E7%B1%B3%E7%82%96%E6%8E%92%E9%AA%A8.jpg',
      CDN + '/%E7%B3%AF%E7%B1%B3%E4%B8%B8%E5%AD%90.jpg',
      CDN + '/%E7%BA%A2%E7%83%A7%E6%8E%92%E9%AA%A8.jpg',
      CDN + '/%E7%BA%A2%E7%83%A7%E9%B8%A1%E8%85%BF.jpg',
      CDN + '/%E8%A5%BF%E5%85%B0%E8%8A%B1%E7%82%92%E8%99%BE%E4%BB%81.jpg',
      CDN + '/%E8%A5%BF%E7%BA%A2%E6%9F%BF%E7%82%92%E9%B8%A1%E8%9B%8B.jpg',
      CDN + '/%E8%BE%A3%E6%A4%92%E7%82%92%E8%82%89.jpg',
      CDN + '/%E9%9F%A9%E5%BC%8F%E7%83%A4%E8%82%89.jpg',
      CDN + '/%E9%A5%BA%E5%AD%90.jpg',
      CDN + '/%E9%A6%99%E5%B9%B2%E8%82%89%E4%B8%9D.jpg'
    ],
    galleryImages: [
      CDN + '/%E7%8E%AF%E5%A2%83/%E8%81%9A%E9%A4%901.jpg',
      CDN + '/%E7%8E%AF%E5%A2%83/%E8%81%9A%E9%A4%902.jpg',
      CDN + '/%E7%8E%AF%E5%A2%83/%E8%81%9A%E9%A4%903.jpg',
      CDN + '/%E7%8E%AF%E5%A2%83/%E8%81%9A%E9%A4%904.jpg',
      CDN + '/%E7%8E%AF%E5%A2%83/%E8%81%9A%E9%A4%905.jpg',
      CDN + '/%E7%8E%AF%E5%A2%83/%E8%81%9A%E9%A4%906.jpg'
    ],
    qrImage: CDN + '/%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg'
  },

  onLoad: function () {
    // 页面加载
  },

  onPageScroll: function (e) {
    var show = e.scrollTop > 400
    if (show !== this.data.showBackTop) {
      this.setData({ showBackTop: show })
    }
  },

  callPhone: function () {
    wx.makePhoneCall({ phoneNumber: this.data.phone })
  },

  copyWechat: function () {
    var that = this
    wx.setClipboardData({
      data: this.data.phone,
      success: function () {
        wx.showToast({ title: '微信号已复制', icon: 'success' })
      }
    })
  },

  openMap: function () {
    wx.openLocation({
      latitude: 34.2437,
      longitude: 108.9200,
      name: '卫老师品质小饭桌',
      address: this.data.address,
      scale: 16
    })
  },

  scrollToPricing: function () {
    wx.pageScrollTo({ selector: '#pricing', duration: 300 })
  },

  scrollToTop: function () {
    wx.pageScrollTo({ scrollTop: 0, duration: 300 })
  },

  onShareAppMessage: function () {
    return {
      title: '卫老师品质小饭桌 - 家的味道，妈妈般的守护',
      path: '/pages/index/index',
      imageUrl: CDN + '/%E7%BA%A2%E7%83%A7%E6%8E%92%E9%AA%A8.jpg'
    }
  },

  onShareTimeline: function () {
    return {
      title: '卫老师品质小饭桌 - 十余年口碑，西工大附中旁品质托管',
      imageUrl: CDN + '/%E7%BA%A2%E7%83%A7%E6%8E%92%E9%AA%A8.jpg'
    }
  }
})
