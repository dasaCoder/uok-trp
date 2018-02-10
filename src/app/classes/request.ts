export class Request {
  constructor(
    public id: number ,
    public title: string ,
    public name: string ,
    public faculty: string,
    public department: string,
    public destination: string,
    public dateTime: string,
    public numOfPassangers: number,
    public email: string,
    public password: string
  ) {}
}
