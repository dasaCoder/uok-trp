export class Request {
  constructor(
    public id: number ,
    public title: string ,
    public name: string ,
    public faculty: string,
    public department: string,
    public destination: string,
    public start_date_time: string,
    public end_date_time: string,
    public duration: string,
    public numOfPassangers: number,
    public email: string,
    public password: string
  ) {}
}
