const userForm = new UserForm();
userForm.loginFormCallback = function(data) {
    let response = (loginResponse) => {
        if (!loginResponse.success) {
            this.setLoginErrorMessage (loginResponse.error);
        }
        else location.reload();
    }

ApiConnector.login(data, response);
}

userForm.registerFormCallback = function (data) {
    let register = (registerResponse) => {
        if (!registerResponse.success) {
            this.setRegisterErrorMessage ( registerResponse.error)
        }
        else location.reload();
    }
    ApiConnector.register(data, register);
}

