import { Person } from '../person/person';

export class Account {
    idAccount: number;
    person: Person;
    balance: number;
    dailyWithdrawalLimit: number;
    activeAccount: boolean;
    accountType: number;
    creationDate: Date;

    /**
     * name
     */
    public date() {
        return this.creationDate.toTimeString;
    }
}
