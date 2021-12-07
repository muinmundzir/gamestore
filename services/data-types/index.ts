export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number
}

export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail:string;
  category: CategoryTypes
}

export interface BanksTypes {
  _id: string;
  name: string;
  bankName: string;
  accountNumber: string;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BanksTypes[]
}

export interface NominalTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface JWTPayloadTypes {
  player: UserTypes;
  iat: string;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface HistoryVoucherTopupTypes {
  category: string;
  coinQuantity: string;
  coinName: string;
  gameName: string;
  price: number;
  thumbnail: string;
}

export interface HistoryPaymentTypes {
  name: string;
  bankName: string;
  accountNumber: string;
  type: string;
}

export interface HistoryTransactionTypes {
  _id: string;
  historyVoucherTopup: HistoryVoucherTopupTypes;
  value: number;
  status: string;
  accountUser: string;
  tax: number;
  historyPayment: HistoryPaymentTypes;
  name: string;
}

export interface CategoryTransactionHistoryTypes {
  _id: string;
  name: string;
  value: number;
}
