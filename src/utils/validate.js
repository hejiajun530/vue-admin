// 过滤特殊字符
export function stripscript(s) {
  var pattern = new RegExp("[`~!@#$^%&*()=|':;,\\[\\].<>/?~！@#￥……&*（ ）——“”【】、&;：；？`]");
  var rs = "";
  for (var i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, '');
  }
  return rs;
}

// 过滤特殊字符 不包括@
export function stripscriptEmail(s) {
  var pattern = new RegExp("[`~!#$^%&*()=|':;,\\[\\].<>/?~！#￥……&*（ ）——“”【】、&;：；？`]");
  var rs = "";
  for (var i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, '');
  }
  return rs;
}

// 验证邮箱
export function validateEmail (value) {
  let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]/;
  if (!reg.test(value)) {
    return true;
  } else {
    return false;
  }
}

// 验证密码
export function validatePass (value) {
  let reg = /^(?!\D+$)(?![^a-zA-Z]+&)\S{6,20}/;
  if (!reg.test(value)) {
    return true;
  } else {
    return false;
  }
}

// 验证验证码
export function validateVCode (value) {
  let reg = /^[a-z0-9]{6}$/;
  if (!reg.test(value)) {
    return true;
  } else {
    return false;
  }
}