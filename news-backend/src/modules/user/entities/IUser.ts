export interface IUser {
    id: string;
    email: string;
    name: string;
    streak: number;
    lastOpened?: Date;
    createdAt: Date;
    updatedAt: Date;
}
  