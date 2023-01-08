export class Student {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public email: string,
    public gender: string,
    public edit: boolean,
    public deleteOption: boolean

  ) { }
}