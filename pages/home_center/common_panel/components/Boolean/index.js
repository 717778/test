// pages/home_center/common_panel/components/Boolean/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isChecked:Boolean,
    dpCode: String,
    dpName: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    time: (new Date()).toString(),

 
 
  },

  /**
   * 组件的方法列表
   */
  ch(e){
    this.setData({
      view_tx:"已点击按钮"
    })
  },
  methods: {
    onChange: async function() {
      const { isChecked, dpCode } = this.properties
      this.triggerEvent('sendDp', { dpCode, value: !isChecked })
    }
  }
})
