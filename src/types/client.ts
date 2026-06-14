export type RiskProfile = 'Conservative' | 'Moderate' | 'Aggressive'

export type Currency = 'INR' | 'USD'

export interface AumAmount {
  amount: number
  currency: Currency
}

export interface ClientReturns {
  oneMonth: number
  ytd: number
}

export interface ClientSummary {
  id: string
  name: string
  aum: AumAmount
  returns: ClientReturns
  riskProfile: RiskProfile
  requiresRebalance: boolean
}

export type ClientSortField = 'aum' | 'return1m' | 'returnYtd' | 'riskProfile'

export type ClientFilterValue = RiskProfile | 'all'
