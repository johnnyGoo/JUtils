/**
 * 微信分享
 */
import jsonp from 'jsonp'

let JohnnyUtils = {};
JohnnyUtils.Data = {};
JohnnyUtils.Cookie = {};
JohnnyUtils.String = {};
JohnnyUtils.Css = {};
JohnnyUtils.Time = {};
JohnnyUtils.Math = {};


/** 绑定事件到dom元素，返回解除绑定的函数
 * @param dom:Element
 * @param event:String
 * @param callback:Function
 * @param useCapture:Boolean 指定事件是否在捕获或冒泡阶段执行
 * @return:Function 解除绑定的函数
 */

JohnnyUtils.bindEvent = function (dom, event, callback, useCapture) {
    function remove() {
        dom.removeEventListener(event, icc, useCapture)
    }

    function icc(e) {
        if (callback(e) === true) {
            remove();
        }
    }

    dom.addEventListener(event, icc, useCapture);
    return remove;
};
/*
 * 动态加载 js
 * @src:String js地址
 * @callback:Function js加载成功后的回调函数
 * */
JohnnyUtils.getScript = function (src, callback) {
    let head = document.getElementsByTagName("head")[0] || document.documentElement;
    let script = document.createElement("script");
    script.async = "true";
    script.src = src;
    let done = false;
    script.onload = script.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            done = true;
            try {
                callback(script);
            } catch (err) {
                throw (new Error('Script load Error:' + src))
            }
            script.onload = script.onreadystatechange = null;
        }
    };
    head.insertBefore(script, head.firstChild);
};
/*
 * 动态加载 css
 * @src:String css地址
 * @callback:Function css加载成功后的回调函数
 * */
JohnnyUtils.getCss = function (src, callback) {
    let head = document.getElementsByTagName("head")[0] || document.documentElement;
    let script = document.createElement("link");
    script.async = "true";
    script.href = src;
    script.rel = 'stylesheet';
    script.type = 'text/css';
    let done = false;
    script.onload = script.onreadystatechange = function () {
        if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
            done = true;
            try {
                callback(script);
            } catch (err) {
                throw (new Error('Css load Error:' + src))
            }
            script.onload = script.onreadystatechange = null;
        }
    };

    head.insertBefore(script, head.firstChild);
};
//是否数组
JohnnyUtils.Data.isObject = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Object]';
};

//是否数组
JohnnyUtils.Data.isNumber = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Number]';
};

//是否数组
JohnnyUtils.Data.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};
//是否字符串
JohnnyUtils.Data.isString = function (arg) {
    return Object.prototype.toString.call(arg) === '[object String]';
};
//字符串转对象
JohnnyUtils.Data.stringToObject = function (str) {
    let obj = {};
    let node;
    let arrSource = decodeURI(str).split("&");
    let i = 0;
    while (i < arrSource.length) {
        if (arrSource[i].indexOf("=") > 0) {
            node = arrSource[i].split("=");
            obj[node[0]] = node[1];
        } else {
            obj[arrSource[i]] = undefined;
        }
        i++;
    }
    return obj;
}
//对象转字符串
JohnnyUtils.Data.objectToString = function (obj) {
    let str = '';
    for (let i in obj) {
        str += i + '=' + obj[i + ''] + '&';
    }
    str = str.substr(0, str.length - 1);
    return str;
};

//获取Cookie
JohnnyUtils.Cookie.get = function (name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return decodeURI(arr[2]);
    else
        return null;
};
//获取Cookie
JohnnyUtils.Cookie.set = function (name, value, time) {
    let strsec = JohnnyUtils.Time.sec(time);
    let exp = new Date();
    exp.setTime(exp.getTime() + strsec * 1);
    document.cookie = name + "=" + encodeURI(value) + ";expires=" + exp.toGMTString();
};
//删除Cookie
JohnnyUtils.Cookie.del = function (name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }

};
//字符串转换毫秒
JohnnyUtils.Time.sec = function (str) {
    let str1 = str.substring(0, str.length - 1) * 1;
    let str2 = str.substring(str.length - 1, str.length);
    switch (str2) {
        case 's':
            return str1 * 1000;
            break;
        case 'm':
            return str1 * 60000;
            break;
        case 'h':
            return str1 * 3600000;
            break;
        case 'd':
            return str1 * 3600000 * 24;
            break;

    }

};

//字符串替换
JohnnyUtils.String.replace = function (str, match, replace_str) {
    return str.replace(new RegExp(match, 'gm'), replace_str);
};

JohnnyUtils.Math.degreeRadian = function (degree) {
    return degree / 180 * Math.PI;
};
JohnnyUtils.Math.radianDegree = function (radian) {
    return radian / Math.PI * 180;
};


//矩形函数


JohnnyUtils.Rect = function (x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
};
JohnnyUtils.Rect.prototype.fixInRec = function (recBig) {
    let rec = this;
    let obj = {width: 0, height: 0};
    let rad = rec.width / rec.height;
    let radbig = recBig.width / recBig.height;
    if (rad > radbig) {
        obj.width = recBig.width;
        obj.height = obj.width / rad;
    } else {
        obj.height = recBig.height;
        obj.width = obj.height * rad;
    }
    obj.x = (recBig.width - obj.width) / 2;
    obj.y = (recBig.height - obj.height) / 2;
    obj.scale = obj.width / rec.width;
    return obj;
};
JohnnyUtils.Rect.prototype.fillInRec = function (recBig) {
    let rec = this;
    let obj = {width: 0, height: 0};
    let rad = rec.width / rec.height;
    let radbig = recBig.width / recBig.height;
    if (rad < radbig) {
        obj.width = recBig.width;
        obj.height = obj.width / rad;
    } else {
        obj.height = recBig.height;
        obj.width = obj.height * rad;
    }
    obj.x = (recBig.width - obj.width) / 2;
    obj.y = (recBig.height - obj.height) / 2;
    obj.scale = obj.width / rec.width;
    return obj;
};


// eval
JohnnyUtils.eval = function (v) {
    let eval_str = ('(' + v + ')');
    return new Function('return ' + eval_str)();
};
//简易模版引擎
JohnnyUtils.nano = function (template, data) {
    return template.replace(/\{([\w\.]*)\}/g, function (str, key) {
        let keys = key.split("."), v = data[keys.shift()];
        for (let i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
        return (typeof v !== "undefined" && v !== null) ? v : "";
    });
};
/*
 * 为css加入浏览器前缀
 * */
JohnnyUtils.Css.fixCss = function (name, attr) {
    let cssObj = {};
    if (!attr || attr === '') {
        return cssObj;
    }
    cssObj[name] = attr;
    cssObj['-webkit-' + name] = attr;
    cssObj['-moz-' + name] = attr;
    cssObj['-ms-' + name] = attr;
    cssObj['-o-' + name] = attr;
    return cssObj;
};
JohnnyUtils.Css.css = function (el, obj) {
    if (el && obj) {
        for (let i in obj) {
            if (el.style) {
                el.style[i] = obj[i];
            }
        }
    }
};

JohnnyUtils.jsonp = function (url, params, callback, error,timeout) {
    jsonp(url, {param: JohnnyUtils.Data.objectToString(params) + '&callback',timeout:timeout||60000,prefix:'__jsonp_'}, (err, data) => {
        if (err && error) {
            error(err)
        } else {
            callback(data)
        }
    })
};
window.JohnnyUtils = JohnnyUtils;
export default JohnnyUtils