function ValidateEmail1(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
console.log(mailfomat);
}
else
{
document.getElementById('errorMsg').innerHTML = "Please check your email";
document.getElementById('mailInput').style.borderColor = 'hsl(354, 100%, 66%)';
document.getElementById('errorMsg').style.color = 'hsl(354, 100%, 66%)';
}
}

function ValidateEmail2(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
console.log(mailfomat);
}
else
{
document.getElementById('errorMsg2').innerHTML = "Please check your email";
document.getElementById('mailInput2').style.borderColor = 'hsl(354, 100%, 66%)';
document.getElementById('errorMsg2').style.color = 'white';
}
}

var form = document.getElementById("myForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);
