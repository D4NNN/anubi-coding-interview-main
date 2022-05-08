import {Nature} from "./nature.enum";
import User from "./user"

export default interface Transaction {
    id: string;
    nature: {
        code: Nature;
    };
    createdOn: string;
    amount: number;
    asset: string;
    user: User;
}