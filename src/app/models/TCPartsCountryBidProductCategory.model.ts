import {TCParts} from "./TCParts.model";
import {Country} from "./Country.model";
import {Bid} from "./Bid.model";
import {ProductCategory} from "./ProductCategory.model";

export class TCPartsCountryBidProductCategory {
  constructor(
    private TCParts?: TCParts,
    private Country?: Country,
    private Bid?: Bid,
    private ProductCategory?: ProductCategory
  ) {
  }
}
