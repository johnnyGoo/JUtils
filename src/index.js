/**
 * Created by johnny on 2017/12/25.
 */

import JohnnyUtils from './johnny-utils'
// Why don't you export default?
// https://github.com/webpack/webpack/issues/3560
window.JohnnyUtils = JohnnyUtils;
export default JohnnyUtils
export {JohnnyUtils}