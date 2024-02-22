import { CommonDrug } from "./drug.model";

export interface infoToSend  {
    name: string;
    id: string;
    additionalInfo: string;
    drugsIds: string[];
}

export interface infoToSendDTO {
    id: string;
    additionalInfo: string;
    name: string;
    translationCountryCode: string; //app set language
    drugs: string[];
}

export interface infoToSendResponse {
    id: string;
}