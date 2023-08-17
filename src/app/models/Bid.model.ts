import {Role} from "./Role.model";

export interface Bid {
  id?: number;
  name: string;
  customerName: string;
  opportunityType: string;
  opportunityMargin: number;
  contractStart: string;
  contractDuration: number;
  pricingModel: string;
  scopeQuery: string;
  bidAndTendersRead: string;
  additionalContent: string;
  status: string;
  country: { id: number };
  tcParts: { id: number };
  productCategory: { id: number };
  user: { id: number };
}
