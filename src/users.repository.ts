export class UsersRepository {
  private users = [];

  async saveUser(user) {
    this.users.push(user);
    console.log(this.users);
  }
}
