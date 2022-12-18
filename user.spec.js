const User = require("./user");
const assert = require("assert");

const user = new User(
  "Anderson Pereira",
  "andy2903.alp@gmail.com",
  "123456",
  new Date(1985, 2, 22)
);
const user2 = new User(
  "Jose do Egito",
  "josedoegito@gmail.com",
  "123456",
  new Date(1985, 2, 22)
);

const writeConsole = (message, data='.') => console.log(`${message} ${JSON.stringify(data)}`);

shoudlVerifyFieldsUser = () => {
  testFields = (user, fields) => {
    for (let field in user) {
      writeConsole(`Verificando campo ${field}, user: ${user[field]} mock:${fields[0][field]}`);
        assert.deepStrictEqual(user[field], fields[0][field]);
    }
  };

  testFields(user.getKey(), [
    {
      name: "Anderson Pereira",
      email: "andy2903.alp@gmail.com",
      birthDate: new Date(1985, 2, 22),
    },
  ]);
};

shoudlVerifyisBirthDateValid = () => {
    testisBirthDateValid = (user, isValid) => {
        writeConsole(`Verificando se a data de nascimento é válida`, isValid);
        assert.deepStrictEqual(user.isBirthDateValid(), isValid);
    }
    testisBirthDateValid(user, true);
}
shouldVerifyisBirthDateToday = () => {
    testisBirthDateToday = (user, isToday) => {
        writeConsole(`Verificando se a data de nascimento é hoje`, isToday);
        assert.deepStrictEqual(user.isBirthDateToday(), isToday);
    }
    user.birthDate = new Date();
    user2.birthDate = new Date();
    testisBirthDateToday(user, true);
    testisBirthDateToday(user2, true);
    user2.birthDate = new Date(1985, 2, 22);
    testisBirthDateToday(user2, false);
}

shouldVerifyisPasswordValid = () => {
    testisPasswordValid = (user, isValid) => {
        writeConsole(`Verificando se a senha é válida`, isValid);
        assert.deepStrictEqual(user.isPasswordValid(), isValid);
    }
    testisPasswordValid(user, true);
    user.password = "12345";
    testisPasswordValid(user, false);
}

shoudlVerifyFieldsUser();
shoudlVerifyisBirthDateValid()
shouldVerifyisBirthDateToday()
shouldVerifyisPasswordValid()
