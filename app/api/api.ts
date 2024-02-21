import axios, { AxiosResponse } from "axios";
import { Drug, DrugResponse } from "../../assets/models/drug.model";

// const apiUrl = "http://10.202.249.136:8080"; // tide
const apiUrl = "http://192.168.137.109:8080"; // hotel

const handleApiError = (error: any): Error => {
  console.error("API Error:", error);
  return {
    code: "API_ERROR",
    message: "An error occurred while calling the API. Please try again later.",
  };
};

interface Error {
  code: string;
  message: string;
}

export async function getCountryDrugNames(countryCode: string): Promise<string[]> {
  const response: AxiosResponse<string[]> = await axios.get(`${apiUrl}/dictionary/tradeNames`, {
    params: { countryCode },
  });
  return response.data;
}

export async function getAlternativeDrugList(
  name: string,
  destinationCountryCode: string,
  sourceCountryCode: string,
  translationCountryCode: string = "POL"
): Promise<DrugResponse> {
  const response: AxiosResponse<DrugResponse> = await axios.post(
    `${apiUrl}/find?name=${name}&destinationCountryCode=${destinationCountryCode}&translationCountryCode=${translationCountryCode}&sourceCountryCode=${sourceCountryCode}`,
    {
      params: { name, destinationCountryCode, sourceCountryCode },
    }
  );
  return response.data;
}
