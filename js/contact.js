window.onload = () => 
{
    let inputField = document.getElementById('userId')
    inputField.addEventListener('keyup',function (event)
        {
            console.log(event);
            if(event.keyCode===13)
            {
                retineUser();
            }
        });
    userLogIn();
}
let counter = localStorage.getItem('counter');
function Timer() 
{
    let timer = setInterval(function() 
    {
        counter++;
        localStorage.setItem('counter',counter);
        document.getElementById('timer').innerHTML = 'Timp petrecut pe site logat: ' + counter+'s';
    }, 1000);
}
function userLogIn()
{
    let loggedInUser = localStorage.getItem('user');
    console.log(loggedInUser);
    if(typeof loggedInUser === "string" && loggedInUser.length > 0)
    {
        let timer = new Timer();
        document.getElementById('userId').disabled = true;
        document.getElementById('logInButton').style.display = 'none';
        document.getElementById('knownUser').innerText = "Bine ai venit, " + loggedInUser;
        document.getElementById('logOutButton').style.display = 'block';
    }
}
function retineUser()
{
    localStorage.setItem('user',document.getElementById('userId').value);
    userLogIn();
}

function forgetUser()
{
    let counter = 0;
    localStorage.setItem('counter',counter);
    localStorage.removeItem('user');
    location.reload();
}
function ages()
{
    var x=document.getElementById("date").value;
    var y=x.split("#")
    var d1=new Date();
    var d2=new Date(y[1]+"/"+y[0]+"/"+y[2]);
    var diff = d1.getTime() - d2.getTime();
    var years=Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    var months=Math.floor(diff%(1000*60*60*24*365.25)/(1000 * 60 * 60 * 24*30));
    var days = Math.floor(diff %(1000 * 60 * 60 * 24)/(1000*60*60));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.getElementById("age").innerHTML="Vârsta dumneavoastră este: "+years+" ani "+months+" luni si "+days+" zile, "+hours +" ore "+minutes+" minute "+seconds+" secunde!";
    setTimeout(ages, 1000);
}