class User {
  constructor(name, email, password, birthDate) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
    this.MIN_YEAR = 1900;
    this.MAX_YEAR = new Date();
    this.PASSWORD_MIN_LENGTH = 6;
  }
  isBirthDateValid() {
    return (
      this.birthDate.getFullYear() >= this.MIN_YEAR &&
      this.birthDate.getFullYear() <= this.MAX_YEAR.getFullYear()
    );
  }
  isBirthDateToday() {
    return (
      this.birthDate.getMonth() === new Date().getMonth() &&
      this.birthDate.getDate() === new Date().getDate()
    );
  }
  isPasswordValid() {
    return this.password.length >= this.PASSWORD_MIN_LENGTH;
  }
  getKey() {
    return {
      name: this.name,
      email: this.email,
      birthDate: this.birthDate,
    };
  }
}

module.exports = User;
