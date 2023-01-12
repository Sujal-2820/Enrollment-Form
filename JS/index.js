var submit = document.querySelector(".submit");
var form = document.getElementById("form");
var display = document.querySelector(".display");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    data();
});

form.addEventListener("reset", () => {
    form.reset();
});


function data(){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var email = document.createElement("div");
    var id = document.createElement("div");
    var course = document.createElement("div");
    var gender = document.createElement("div");
    var skills = document.createElement("div");
    var img = document.createElement("img");

    //for form elements
    name.innerHTML = "NAME: " + form.elements[0].value;
    id.innerHTML = "ID: " + form.elements[1].value;
    course.innerHTML = "COURSE: " + form.elements[2].value;
    email.innerHTML = "EMAIL: " + form.elements[3].value;
    

    //for image-gender
    if(form.elements[4].checked == true){
        gender.innerHTML = "GENDER: " + form.elements[4].value;
        img.src = "images/boy.png";
    }
    if(form.elements[5]. checked == true){
        gender.innerHTML = "GENDER: " + form.elements[5].value;
        img.src = "images/girl.png";
    }

    //for form skills
    if(form.elements[6].checked){
        skills.innerHTML = "SKILLS: " + form.elements[6].value;
    }
    if(form.elements[7].checked){
        skills.innerHTML = "SKILLS: " + form.elements[7].value;
    }
    if(form.elements[8].checked){
        skills.innerHTML = "SKILLS: " + form.elements[8].value;
    }
    if(form.elements[6].checked && form.elements[7].checked){
        skills.innerHTML = "SKILLS: " + form.elements[6].value + ", " + form.elements[7].value;
    }
    if(form.elements[6].checked && form.elements[8].checked){
        skills.innerHTML = "SKILLS: " + form.elements[6].value + ", " + form.elements[8].value;
    }
    if(form.elements[7].checked && form.elements[8].checked){
        skills.innerHTML = "SKILLS: " + form.elements[7].value + ", " + form.elements[8].value;
    }
    if(form.elements[6].checked && form.elements[7].checked && form.elements[8].checked){
        skills.innerHTML = "SKILLS: " + form.elements[6].value + ", " + form.elements[7].value + ", " + form.elements[8].value;
    }

    div1.appendChild(name);
    div1.appendChild(id);
    div1.appendChild(course);
    div1.appendChild(email);
    div1.appendChild(gender);
    div1.appendChild(skills);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("display");
}
