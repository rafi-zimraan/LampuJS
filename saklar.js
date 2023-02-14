function saklar(action, inbox) {
    let toggle = document.getElementById("default-toggle");  

    if (toggle.Checked) {
        console.log('Di nyalakan');
    }else {
        console.log('Di matikan');
    }

    // console.log('tessss', toggle.Checked);

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");


    if (action == "on") {
        if (inbox == 1 ) {
            lampu1.src = "images/On.avif";
        }
        if (inbox == 2 ) {
            lampu2.src = "images/On.avif";
        }
        if (inbox == 3 ) {
            lampu3.src = "images/On.avif";
        }
    }
    if (action == "off") {
        if (inbox == 1 ) {
            lampu1.src = "images/off.avif";
        }
        if (inbox == 2 ) {
            lampu2.src = "images/off.avif";
        }
        if (inbox == 3 ) {
            lampu3.src = "images/off.avif";
        }
    }
}