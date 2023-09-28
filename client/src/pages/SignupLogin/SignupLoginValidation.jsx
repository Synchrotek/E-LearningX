const Validation = (values) => {
    let error = {};

    if (values.name === "") {
        error.name = "Name should not be empty";
    } else {
        error.name = "";
    }

    if (values.phNo === "") {
        error.phNo = "Contact no. should not be empty";
    } else {
        error.phNo = "";
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else {
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else {
        error.password = "";
    }

    if (values.password !== values.c_password) {
        error.c_password = "This must be same as Password";
    } else {
        error.c_password = "";
    }

    return error;
};

export default Validation;