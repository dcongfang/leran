const app = getApp();
Page({
  data: {
    files: [],
    fileID: []
  },
  chooseImage () {
    let that = this
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // console.log(res)
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        })
        for (let i = 0; i < res.tempFilePaths.length; i ++) {
          const filePath = res.tempFilePaths[i]
          // let a = filePath.lastIndexOf('.')
          let b = filePath.lastIndexOf('.', filePath.length - 7)
          let c = filePath.substring(b + 1)
          const cloudPath = c
          wx.cloud.uploadFile({
            cloudPath,
            filePath, // 文件路径
            success: res => {
              // get resource ID
              // console.log(res.fileID)
              console.log('上传成功', res)
              this.setData({
                fileID: this.data.fileID.push(res.fileID)
              })
            },
            fail: err => {
              // handle error
            }
          })
        }
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