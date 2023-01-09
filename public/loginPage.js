const userForm = new userForm();
userForm.loginFormCallback = function(data) {
    let response = (loginResponse) => {
        if (!loginResponse.success) {
            this.setLoginErrorMessage ("Ошибка!");
        }
        else location.reload();
    }

ApiConnector.login(data, response);
}

userForm.registerFormCallback = function (data) {
    let register = (registerResponse) => {
        if (!registerResponse.success) {
            this.setRegisterErrorMessage ( "Ошибка!")
        }
        else location.reload();
    }
    ApiConnector.register(data, register);
}

