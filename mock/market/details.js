// https://github.com/Marak/faker.js/wiki
var faker = require('faker')
module.exports = function() {
  return {
    code: 200,
    data: {
      entity: {
        detailSmarketSkuBeanList: [{
          "outSkuTotalPrice": 9999,
          "skuId": "001",
          "skuName": "sku名称003",
        }, {
          "outSkuTotalPrice": 0,
          "skuId": "13153",
          "skuName": "sku名称003",
        }, {
          "outSkuTotalPrice": 0,
          "skuId": "13153",
          "skuName": "sku名称003",
        }, ],
        desc: "商品详情商品详情商品详情",
        id: "00001",
        imgs: ["https://img1.qdingnet.com/image-37e73979-b92c-4f2b-a2fc-e89af0051bea.png", "https://img1.qdingnet.com/image-37e73979-b92c-4f2b-a2fc-e89af0051bea.png", "https://img1.qdingnet.com/image-37e73979-b92c-4f2b-a2fc-e89af0051bea.png"],
        outShopMobile: "18000000000",
        shopName: "家乐福超市",
        title: "大闸蟹",
        promotionMap: {
          "001": [{
            "brandIds": "",
            "brandLogic": "",
            "brandNames": "",
            "cityIds": "",
            "cityLogic": "",
            "cityNames": "",
            "conditionId": 0,
            "conditionTypeId": 0,
            "counterId": 0,
            "counterParams": "",
            "couponIds": "",
            "createAt": 0,
            "createBy": "",
            "desc": "",
            "detail": "促销详情",
            "discountCostProvider": "促销价格",
            "discountCostType": 0,
            "displayImg": "",
            "endTime": 0,
            "id": "",
            "isAdd": 0,
            "isDel": 0,
            "isExclusive": 0,
            "isLock": 0,
            "isRefundall": 0,
            "isUseCoupon": 0,
            "label": "促销标签",
            "limitStrategy": 0,
            "maxValidEnd": 0,
            "name": "促销名称",
            "originalSkus": "",
            "priority": 0,
            "productIds": "",
            "productLogic": "",
            "productNames": "",
            "projectIds": "",
            "projectLogic": "",
            "projectNames": "",
            "promotionConditionJson": "",
            "promotionConditionList": [],
            "promotionGrouponPrice": null,
            "promotionGrouponPrices": [],
            "promotionPriceCount": null,
            "promotionRuleTemplate": null,
            "promotionValidPeriodJson": "",
            "promotionValidPeriodList": [],
            "provideIds": "",
            "provideLogic": "",
            "provideNames": "",
            "rateTimes": 0,
            "rateType": 0,
            "realWareIds": "",
            "recheck": false,
            "ruleId": 0,
            "ruleParams": "",
            "shareType": 0,
            "startTime": 0,
            "status": 0,
            "stockLimitCounts": "",
            "stockRealtimeCounts": "",
            "type": 0,
            "updateAt": 0,
            "updateBy": "",
            "wareIds": "",
            "wareLimitCounts": "",
            "wareLogic": "",
            "wareNames": "",
            "warecategoryIds": "",
            "warecategoryLogic": "",
            "warecategoryNames": ""
          }, ],
        },
      },
      message: "商品详情查询成功",
      toast: "vvv",
    },
  };
};
