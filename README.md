### Usage

window.SMART.Utils

```
npm install johnny-utils --save
```
```javascript
import JohnnyUtils from 'johnny-utils'
```


### methods:
```
JohnnyUtils.extend()
JohnnyUtils.bindEvent()
JohnnyUtils.getScript()
JohnnyUtils.getCss()
JohnnyUtils.bindEvent()
JohnnyUtils.eval()
JohnnyUtils.nano()
JohnnyUtils.Data.isObject()
JohnnyUtils.Data.isNumber()
JohnnyUtils.Data.isArray()
JohnnyUtils.Data.isString()
JohnnyUtils.Data.isObject()
JohnnyUtils.Cookie.get()
JohnnyUtils.Cookie.set()
JohnnyUtils.Cookie.del()
JohnnyUtils.Time.sec()
JohnnyUtils.Time.now()
JohnnyUtils.String.replace()
JohnnyUtils.Math.degreeRadian()
JohnnyUtils.Math.radianDegree()
JohnnyUtils.Css.fixCss()
JohnnyUtils.Css.css()
JohnnyUtils.jsonp()
JohnnyUtils.md5()

let rect=new JohnnyUtils.Rect()  
rect.fixInRec()
rect.fillInRec()

md5

Calculate the (hex-encoded) MD5 hash of a given string value:

var hash = md5("value"); // "2063c1608d6e0baf80249c42e2be5804"
Calculate the (hex-encoded) HMAC-MD5 hash of a given string value and key:

var hash = md5("value", "key"); // "01433efd5f16327ea4b31144572c67f6"
Calculate the raw MD5 hash of a given string value:

var hash = md5("value", null, true);
Calculate the raw HMAC-MD5 hash of a given string value and key:

var hash = md5("value", "key", true);

```