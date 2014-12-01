window.API_PATH = 'api.php';

$(document).ready(function()
{
    //intialize the app start
    
    var url = window.API_PATH+'/?json=true'
    
    $.get(url,function(jsonObj)
    {
        console.log(jsonObj);
        
    }, 'json');
});