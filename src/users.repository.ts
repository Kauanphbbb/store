export class UsersRepository {
  private users = [];

  async saveUser(user) {
    this.users.push(user);
    return user;
  }

  async listUsers() {
    return this.users;
  }
}
