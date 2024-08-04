export default function convertImageToBase64(file , object , key = "images") {
    let strConvert = "";
    const reader = new FileReader();
    reader.onload = function(event) {
        const base64String = event.target.result.split(',')[1]; // Remove data URL part
        document.getElementById('result').innerText = base64String;
        console.log(base64String);
      };
      reader.readAsDataURL(file); 
if(object){
    object[key] = strConvert
}
}