export const checkPhone = (phone) => {
    let phoneReg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
    if (phoneReg.test(phone)) {
      return true
    } else {
      return false
    }
  }
  
export const checkName = (name) => {
    if (new RegExp('^[\u4e00-\u9fa5]{2,5}$').test(name)) {
      if (name == '姓名') {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
}

export const checkEmail = (val) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
}

// 添加一个密码验证
// 匹配6-20位的任何字类字符，包括下划线。与“[A-Za-z0-9_]”等效
export const passWord = (val) => {
    return /^(\w){6,20}$/.test(val)
}