export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(navigator.userAgent) || window.innerWidth < 768
  }
  
export const isWeixin = () => {
    return navigator.userAgent.match(/MicroMessenger/i)
}

function isIphoneX () {
    return /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 375 && window.screen.height === 812
  }
function  isIPhoneXSMax () {
    return /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 3 && window.screen.width === 414 && window.screen.height === 896
}
function isIPhoneXR () {
    return /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && window.devicePixelRatio === 2 && window.screen.width === 414 && window.screen.height === 896
}
function isWeixin () {
    return /MicroMessenger/gi.test(window.navigator.userAgent)
}