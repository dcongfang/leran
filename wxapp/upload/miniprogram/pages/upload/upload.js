const app = getApp();
Page({
  data: {
    files: []
  },
  chooseImage () {
    let that = this
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        that.setData({
          files: that.data.files.concat(res.tempFilePaths[0])
        })
        const filePath = res.tempFilePaths[0]
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)
        wx.cloud.uploadFile({
          cloudPath,
          filePath, // 文件路径
          success: res => {
            // get resource ID
            // console.log(res.fileID)
            console.log('上传成功', res)
          },
          fail: err => {
            // handle error
          }
        })
      }
    })
  },
  previewImage(e) {
    // console.log(e)
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files
    })
  }
})