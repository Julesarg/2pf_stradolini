export class Course {
  constructor(
    public id: number,
    public name: string,
    public duration: string,
    public price: number,
    public modality: string,
    public inscriptions: string,
    public detailsIcon: boolean,
    public detailsText: string,
    public img: any
  ) { }
}