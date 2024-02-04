import { Address } from "./addres.model";
import { LessDays } from "./lessDays.model";

export class Student {
    constructor() {
        this.isActive = true;
        this.id = 0;
        this.address=new Address();
    }
    id: number;
    firstName: string;
    lastName: string;
    address: Address;
    phone: string;
    isActive: boolean;
    averageMarks: number;
    dateLeave: Date;
    course?: number;
    lassDays?:LessDays[]
}
/**
 *
 */
/**
 *
 */
