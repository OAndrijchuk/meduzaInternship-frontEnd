import { IInviteOrRequest, IUser } from "."

export interface ICompany{
    id: number,
    logo:string,
    companyName: string,
    description: string,
    createdAt: Date,
    updatedAt: Date,
    owner: IUser,
    invitations: Array<IInviteOrRequest>,
    candidates:  Array<IInviteOrRequest>,
    employee: Array<IUser>,
}