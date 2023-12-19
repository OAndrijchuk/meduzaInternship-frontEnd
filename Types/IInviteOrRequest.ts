import { ICompany, IUser, StatusType } from ".";


export interface IInviteOrRequest{
    id: number,
    description: string,
    status: StatusType,
    user: IUser,
    company: ICompany,
    createdAt: Date,
    updatedAt: Date,
}