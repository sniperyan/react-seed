/**
 ** https://github.com/deadivan/ducks-modular-redux
 ** 一个模块:
 ** 必须 export default 函数名为 reducer() 的 reducer
 ** 必须 作为函数 export 它的 action creators
 ** 必须 把 action types 定义成形为 MODULE/VIEW/ACTION_TYPE 的字符串
 **/

import { combineReducers } from 'redux';
import home from './home';
import orders from './orders';
import address from './address';
import addresses from './addresses';
import coupons from './coupons';
import settings from './settings';

// Combine reducer
const reducer = combineReducers({
  home,
  orders,
  address,
  addresses,
  coupons,
  settings,
});

// Reducer
export default reducer;
