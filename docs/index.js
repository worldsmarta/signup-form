function validateForm() {
    let returnval = true

    // fname validation
    let fname = document.getElementById('fname')
    let fname_err = document.getElementById('fname_err')
    let f_er = document.getElementById('f_er')
    if (fname.value.length == 0) {
        fname_err.innerHTML = 'First Name cannot be empty'
        f_er.style.display = 'inline'
        fname.style.border = '1px solid red'
        returnval = false
    }
    else {
        fname_err.innerHTML = ''
        f_er.style.display = 'none'
        fname.style.border = ''
    }

    // lname validation
    let lname = document.getElementById('lname')
    let lname_err = document.getElementById('lname_err')
    let l_er = document.getElementById('l_er')

    if (lname.value.length == 0) {
        lname_err.innerHTML = 'Last Name cannot be empty'
        l_er.style.display = 'inline'
        lname.style.border = '1px solid red'
        returnval = false
    }
    else {
        lname_err.innerHTML = ''
        lname.style.border = ''
        l_er.style.display = 'none'
    }

    // email validation
    let email = document.getElementById('email')
    let email_err = document.getElementById('email_err')
    let e_er = document.getElementById('e_er')

    if (email.value.length == 0) {
        email_err.innerHTML = 'Email cannot be empty'
        e_er.style.display = 'inline'
        email.style.border = '1px solid red'
        returnval = false
    }
    else {
        email_err.innerHTML = ''
        email.style.border = ''
        e_er.style.display = 'none'
    }

    //password validation
    let pass = document.getElementById('pass')
    let pass_err = document.getElementById('pass_err')
    let p_er = document.getElementById('p_er')
    var uc = /[A-Z]/g
    var lc = /[a-z]/g
    var n = /[0-9]/g
    var sp = /[#?!@$%^&*-]/g

    if (pass.value.length == 0) {
        pass_err.innerHTML = ' password cannot be empty'
        p_er.style.display = 'inline'
        pass.style.border = '1px solid red'
        returnval = false
    }
    else if (pass.value.length < 8) {
        pass_err.innerHTML = ' enter password atleast 8 characters long'
        p_er.style.display = 'inline'
        pass.style.border = '1px solid red'
        returnval = false
    }
    else {
        if (!(pass.value.match(uc))) {
            pass_err.innerHTML = ' atleast one uppercase letter'
            p_er.style.display = 'inline'
            pass.style.border = '1px solid red'
            returnval = false
        }
        else if (!(pass.value.match(lc))) {
            pass_err.innerHTML = ' atleast one lowercase letter'
            p_er.style.display = 'inline'
            pass.style.border = '1px solid red'
            returnval = false
        }

        else if (!(pass.value.match(n))) {
            pass_err.innerHTML = ' atleast one digit'
            p_er.style.display = 'inline'
            pass.style.border = '1px solid red'
            returnval = false
        }

        else if (!(pass.value.match(sp))) {
            pass_err.innerHTML = ' atleast one special character'
            p_er.style.display = 'inline'
            pass.style.border = '1px solid red'
            returnval = false
        }

        else {
            pass_err.innerHTML = ''
            p_er.style.display = 'none'
            pass.style.border = ''

        }
    }
    return returnval
}

function Toggle() {
    var temp = document.getElementById("pass");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
}

function reset() {
    document.getElementById('myform').reset()
}

