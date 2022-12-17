// function for alert box

document.getElementById('alert_1').addEventListener('click', function () {
    alert('You are into the Class of Suman !');
});

// function for confirmation box

document.getElementById('conf_1').addEventListener('click', function () {
    let result;

    if (confirm("Are You in the Suman's Class ?")) {
        result = "Yes you are in the class";
    } else {
        result = "No I am not !";
    }
    document.getElementById('result').innerHTML = result;
});

// function for prompt box 

document.getElementById('prompt_1').addEventListener('click', function () {
    let prompt_box = prompt('What is your Name ?');
    if (prompt_box != null) {
        document.getElementById('result').innerHTML = 'You have logged in !';
    }else{
        document.getElementById('result').innerHTML = 'Enter your Name !';
    }
});