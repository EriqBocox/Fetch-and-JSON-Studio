// TODO: add code here
window.addEventListener('load', function(){
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
        response.json().then(function(json){
            const container = document.getElementById('container');


            json.sort(function(b,a){
                return(a.hoursInSpace-b.hoursInSpace);
            });


            for(index=0; index<json.length; index++){
                let color = (json[index].active) ? 'green' : 'red';

                container.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[index].firstName} ${json[index].lastName}</h3>
                            <ul>    
                                <li>Hours in Space: ${json[index].hoursInSpace}</li>
                                <li style="color:${color}">Active: ${json[index].active}</li>
                                <li>Skills: ${json[index].skills}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${json[index].picture}">
                    </div>
                `;
            };       
        });
    });
});
