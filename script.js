const usernameInputElem = document.getElementById('userInput')
const passwordInputElem = document.getElementById('passInput')
const leftEyeElem = document.getElementById('lefteye')
const rightEyeElem = document.getElementById('righteye')



function usernameFocusHandler() {
    leftEyeElem.style.cssText = 'top: 90px'
    rightEyeElem.style.cssText = 'top: 90px'
}



function passwordFocusHandler() {
    leftEyeElem.style.cssText = 'top: 60px'
    rightEyeElem.style.cssText = 'top: 60px'
}


function blurHandler() {
    leftEyeElem.style.cssText = 'top: 75px'
    rightEyeElem.style.cssText = 'top: 75px'
}


function changeInputHandler(event) {
    let usernameValue = usernameInputElem.value
 
    leftEyeElem.style.paddingLeft = `${usernameValue.length}px`
    rightEyeElem.style.paddingLeft = `${usernameValue.length}px`

}



function keydownHandler (e) {
    const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'];
  
    if (usernameInputElem.value.length >= 12 && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }
};
  



usernameInputElem.addEventListener('focus', usernameFocusHandler)
passwordInputElem.addEventListener('focus', passwordFocusHandler)
usernameInputElem.addEventListener('blur', blurHandler)
passwordInputElem.addEventListener('blur', blurHandler)
usernameInputElem.addEventListener('input', changeInputHandler)
usernameInputElem.addEventListener('keydown', keydownHandler)