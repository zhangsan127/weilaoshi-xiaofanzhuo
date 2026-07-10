# 卫老师品质小饭桌 - 微信小程序

## 使用步骤

### 1. 注册小程序账号
前往 https://mp.weixin.qq.com/ 注册「微信小程序」账号（个人或企业均可）。

### 2. 获取 AppID
登录小程序后台 → 开发 → 开发管理 → 开发设置 → 复制 AppID。

### 3. 替换 AppID
打开 `project.config.json`，将 `"appid": "请替换为你的小程序AppID"` 替换为你的真实 AppID。

### 4. 下载开发者工具
https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

### 5. 导入项目
打开微信开发者工具 → 导入项目 → 选择 `xiaofanzhuo-miniapp` 文件夹 → 填入 AppID。

### 6. 预览与上传
- 点击「预览」可在手机微信中扫码查看效果
- 点击「上传」提交审核，审核通过后即可发布

## 注意事项

### 图片优化
项目 images 文件夹共 25 张图，总大小约 5MB。如果超出小程序包大小限制（主包 2MB），可以：
1. 进一步压缩图片（推荐 TinyPNG）
2. 将图片上传到云存储（如微信云开发、阿里云 OSS），然后修改代码中的图片路径为 HTTPS URL

### 地理位置
地图坐标目前是民航小区的大概位置（34.2437, 108.9200），建议替换为实际经纬度。可以在腾讯地图拾取器中获取精确坐标：https://lbs.qq.com/getPoint/

### 小程序类目
提交审核时需选择「生活服务 > 家政服务」或「教育 > 培训机构」类目（视具体情况可能需要营业执照）。

## 项目结构
```
xiaofanzhuo-miniapp/
├── app.json          # 全局配置
├── app.wxss          # 全局样式
├── app.js            # 应用入口
├── project.config.json # 项目配置（含 AppID）
├── sitemap.json      # 搜索配置
├── pages/
│   └── index/
│       ├── index.wxml  # 主页面
│       ├── index.wxss  # 主页面样式
│       └── index.js    # 主页面逻辑
├── images/
│   ├── 二维码.jpg
│   ├── food/          # 21 张菜品图
│   └── environment/   # 3 张聚餐图
└── README.md
```

## 功能特性
- 🍱 菜品轮播（自动播放，无限循环）
- 📞 一键拨号
- 💬 复制微信号
- 🗺️ 地图导航
- 📤 分享给朋友 / 朋友圈
- 🔝 返回顶部
- 📌 底部固定联系栏
