export class User {
  constructor(
    public id: number,
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string
  ) { }

  get fullname() {
    return this.first_name + ' ' + this.last_name
  }
}