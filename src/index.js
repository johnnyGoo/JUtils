/**
 * Created by johnny on 2017/12/25.
 */

import JohnnyUtils from './johnny-utils'
// Why don't you export default?
// https://github.com/webpack/webpack/issues/3560
if(!window.SMART){
    window.SMART={}
}
window.SMART.Utils = JohnnyUtils;
export default JohnnyUtils
export {JohnnyUtils}