export class Bid {
  constructor(
    private id?: number,
  private name?: string,
  private  customerName?:string,
  private  opportunityType?:string,
  private  opportunityMargin?:number,
  private  contractStart?:Date,
  private  ContractDuration?:number,
  private  pricingModel?:string,
  private  scopeQuery?:string,
  private  bidAndTendersRead?:Date,
  private  additionalContent?:string,
  private  attachements?:File
  ) {
  }
}
