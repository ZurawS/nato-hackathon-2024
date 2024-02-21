import { CommonDrug } from "./drug.model";

export interface infoToSend  {
    name: string;
    id: string;
    additionalInfo: string;
    drugs: string[];
}