// https://github.com/Marak/faker.js/wiki
var faker = require('faker')
module.exports = function() {
  return {
    "code": 200,
    "data": {

      "list": [{
        "platformSkuId": 111,
        "roomTypeName": "三人间", //房间类型名称
        "otherPrice": 1000, //单房差
        "specPeopleVal": "成人",
        "attach": "",
        "sellPrice": 233, //销售价格
        "stock": 1, //总库存
      }, {
        "platformSkuId": 122,
        "roomTypeName": "三人间", //房间类型名称
        "otherPrice": 1000, //单房差
        "specPeopleVal": "成人11",
        "attach": "成人:1,儿童:1,房间数:1",
        "sellPrice": 233, //销售价格
        "stock": 1, //总库存
      }, {
        "platformSkuId": 123,
        "roomTypeName": "三人间", //房间类型名称
        "otherPrice": 1000, //单房差
        "specPeopleVal": "儿童1",
        "attach": "成人:1,儿童:1,房间数:4",
        "sellPrice": 233, //销售价格
        "stock": 1, //总库存
      }, {
        "platformSkuId": 124,
        "roomTypeName": "三人间", //房间类型名称
        "otherPrice": 1000, //单房差
        "specPeopleVal": "儿童2",
        "attach": "成人:1,儿童:4,房间数:1",
        "sellPrice": 233, //销售价格
        "stock": 1, //总库存
      }],

      "message": "查询成功"
    }
  }
}
