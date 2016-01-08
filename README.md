# QA assist

## Description

Script to help out with filling in form input fields with test data
## Usage

Copy paste the bookmarklet and add it as the url of a bookmark in your browser.
To start it simply click the bookmark when you are on the webpage you want to use it on.

Keymap: 
* n: Random name
* c: Random creditcard number
* p: Random phone number
* a: Random address
* e: Radom email
* z: Random zip code
* t: Random town
* s: Random street
* i: Random string

## Bookmarklet

javascript:!function(){function n(n,t){return n+t}function t(n,t){return Math.floor(Math.random()*(t-n)+n)}function e(n,s){return n--,s=s?s:"",!n||1>n?s+String.fromCharCode(t(33,999)):(s+=String.fromCharCode(t(33,999)),e(n,s))}function s(u){var d,l;switch(u.keyCode){case 73:d=e(10);break;case 27:return alert("Thank you for using QA-assist!"),void document.removeEventListener("keyup",s);case 69:console.log("email"),d=n("test",o++)+"@ticnet.se";break;case 78:console.log("name"),d=n("test",i++);break;case 67:console.log("creditcard"),d=t(1e15,1e16);break;case 65:console.log("address"),d=n("test address",a++);break;case 83:console.log("street"),d=n("test street",c++);break;case 84:console.log("town"),d=n("test town",r++);break;case 80:console.log("phone"),d="070"+t(1e6,9999999);break;case 90:console.log("zip code"),d=getRandomNumber(1e4,99999);break;default:return void console.log(u.keyCode+" is not mapped")}console.log(d),l=document.activeElement,l&&(l.value=d)}var o=0,i=0,r=0,c=0,a=0;instructions="Welcome to QA assist!",instructions+="\n",instructions+="Focus any input field and press the desired key.",instructions+="\n",instructions+="Keymap: ",instructions+="\n",instructions+="n: Random name",instructions+="\n",instructions+="c: Random creditcard number",instructions+="\n",instructions+="p: Random phone number",instructions+="\n",instructions+="a: Random address",instructions+="\n",instructions+="e: Radom email",instructions+="\n",instructions+="z: Random zip code",instructions+="\n",instructions+="t: Random town",instructions+="\n",instructions+="s: Random street",instructions+="\n",instructions+="i: Random string",alert(instructions),document.addEventListener("keyup",s)}();
