function getSettings(){
    var instanceId = document.getElementById('idInstance1').value;
    var apiTokenInstance = document.getElementById('apiTokenInstance').value;

    let trimmedInstanceId = instanceId.slice(0, 4);
    
    let apiUrl = "https://" + trimmedInstanceId + ".api.greenapi.com";

    let url = apiUrl + "/waInstance" + instanceId + "/getSettings/" + apiTokenInstance;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error: ' + response.status);
            }
            return response.json(); // Парсим ответ в формате JSON
        })
        .then(data => {
            console.log('Received data:', data);
            let response = document.getElementById('response');
            stringed_data = JSON.stringify(data);
            response.value = formatJSON(stringed_data)
            //alert('Post title: ' + data.title);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function getStateInstance(){
    var instanceId = document.getElementById('idInstance1').value;
    var apiTokenInstance = document.getElementById('apiTokenInstance').value;

    let trimmedInstanceId = instanceId.slice(0, 4);

    let apiUrl = "https://" + trimmedInstanceId + ".api.greenapi.com";

    let url = apiUrl + "/waInstance" + instanceId + "/getStateInstance/" + apiTokenInstance;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network error: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Received data:', data);
            let response = document.getElementById('response');
            stringed_data = JSON.stringify(data);
            response.value = formatJSON(stringed_data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function formatJSON(text){
    formatted = text.replace("{", "{\n")
    formatted = formatted.replaceAll(",", ",\n")
    formatted = formatted.replace("}", "\n}")

    return formatted
}