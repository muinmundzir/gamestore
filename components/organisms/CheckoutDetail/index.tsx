import { useState, useEffect } from 'react';
import NumberFormat from 'react-number-format';

export default function CheckoutDetail() {
  const [checkoutItem, setCheckoutItem] = useState({
    verifyID: '',
    nominalItem: {
      coinName: '',
      price: 0,
      coinQuantity: 0,
      _id: '',
    },
    paymentItem: {
      payment: {
        type: '',
        _id: '',
      },
      bank: {
        bankName: '',
        name: '',
        accountNumber: '',
        _id: '',
      },
    },
    bankName: '',
  });

  useEffect(() => {
    const dataItem = localStorage.getItem('data-topup');
    const data = JSON.parse(dataItem!);
    setCheckoutItem(data);
  }, []);

  const itemPrice = checkoutItem.nominalItem.price;
  const itemTax = itemPrice * (10 / 100);
  const priceTotal = itemPrice + itemTax;

  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID
          <span
            className="purchase-details"
          >
            {checkoutItem.verifyID}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID
          <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item
          <span className="purchase-details">
            {checkoutItem.nominalItem.coinQuantity}
            {' '}
            {checkoutItem.nominalItem.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price
          <span className="purchase-details">
            <NumberFormat
              value={itemPrice}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%)
          <span className="purchase-details">
            <NumberFormat
              value={itemTax}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total
          <span className="purchase-details color-palette-4">
            <NumberFormat
              value={priceTotal}
              prefix="Rp. "
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name
          <span className="purchase-details">
            {checkoutItem.bankName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type
          <span className="payment-details">{checkoutItem.paymentItem.payment.type}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name
          <span className="payment-details">{checkoutItem.paymentItem.bank.bankName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name
          <span className="payment-details">
            {checkoutItem.paymentItem.bank.name}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number
          <span className="payment-details">
            {checkoutItem.paymentItem.bank.accountNumber}
          </span>
        </p>
      </div>
    </>
  );
}
