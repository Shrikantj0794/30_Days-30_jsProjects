const apikey = "YdRnHaJJ86gucfzPeH8Fxw==VLWNPsuNLWTZ6GVW";
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=";
var category = 'happiness'

async function getquote(apiUrl){
    const response = await fetch(apiUrl +category + `&X-Api-Key=${apikey}`);
    var data = await response.json();

    console.log(data);
}
getquote(apiUrl)

// var category = 'happiness'
// .ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });
// ajax();