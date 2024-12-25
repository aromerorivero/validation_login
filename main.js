class UserData {
    name;
    password;

    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getPassword() {
        return this.password;
    }

    setPassword(value) {
        this.password = value;
    } 

    isComplete() {
        return this.name !== "" && this.password !== "";
    }
}

document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const user = new UserData(usernameInput.value, passwordInput.value);

    if (user.isComplete()) {
        console.log("Bienvenido", user.getName());
    } else if (user.name !== "" && user.password === "") {
        console.log("Es necesario introducir la contraseña.");
    } else if (user.name === "" && user.password !== "") {
        console.log("Es necesario introducir el usuario.");
    } else {
        console.log("Campos incompletos.");
    }


});
