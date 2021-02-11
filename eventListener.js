var btnObj = document.getElementById('btnObjective');
var btnSkill = document.getElementById("btnSkill");
var btnInterest = document.getElementById("btnInterest");
var btnExperience = document.getElementById("btnExperience");
var content = document.getElementById("content");
var innerTxt = document.getElementById('name');
console.log("inner: ", innerTxt);

btnObj.addEventListener('click', function() {
    content.style.flexDirection='Row'
    content.style.justifyContent='Space-Between'
    content.style.alignItems='Center'
    content.style.margin='15px'
    content.style.flexWrap='Wrap'
    content.style.height='500px'
});

btnSkill.addEventListener('click', function() {
    content.style.backgroundColor='Lightgray'
    btnSkill.innerHTML = "This Button has been Changed"
});

btnInterest.addEventListener('click', function() {
    innerTxt.innerText = 'JUSTIN J ELDER - Not my real Resume'
    
});

btnExperience.addEventListener('click', function() {
    document.location.reload();
});