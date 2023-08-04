let qrText = document.querySelector('qrText').value;
let imgBox = document.querySelector('imgBox');
let qrImg = document.querySelector('qrImg') 

function QRGenerater(url){
    qrImg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText;
}
