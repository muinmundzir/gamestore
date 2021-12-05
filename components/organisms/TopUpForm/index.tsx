import { useState } from 'react';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { BanksTypes, NominalTypes, PaymentTypes } from '../../../services/data-types';
import NominalItem from './NominalItem';
import PaymentItem from './PaymentItem';

interface TopUpFormProps {
  nominals: NominalTypes[];
  payments: PaymentTypes[];
}

export default function TopUpForm(props: TopUpFormProps) {
  const router = useRouter();
  const [verifyID, setVerifyID] = useState('');
  const [bankName, setBankName] = useState('');
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  const { nominals, payments } = props;

  const onNominalItemChange = (data: NominalTypes) => {
    setNominalItem(data);
  };

  const onPaymentItemChange = (payment: PaymentTypes, bank: BanksTypes) => {
    const data = {
      payment, bank,
    };
    setPaymentItem(data);
  };

  const onSubmit = () => {
    localStorage.setItem('nominal-item', nominalItem);
    localStorage.setItem('payment-item', paymentItem);
    if (verifyID === '' || bankName === '' || nominalItem === {} || paymentItem === {}) {
      toast.error('Please fill all required data');
    } else {
      const data = {
        verifyID,
        bankName,
        nominalItem,
        paymentItem,
      };
      localStorage.setItem('data-topup', JSON.stringify(data));
      router.push('/checkout');
    }
  };

  return (
    <>
      <form action="./checkout.html" method="POST">
        <div className="pt-md-50 pt-30">
          <div className="">
            <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">
              Verify
              ID
            </label>
            <input
              type="text"
              className="form-control rounded-pill text-lg"
              id="ID"
              name="ID"
              value={verifyID}
              onChange={(event) => setVerifyID(event.target.value)}
              aria-describedby="verifyID"
              placeholder="Enter your ID"
            />
          </div>
        </div>
        <div className="pt-md-50 pb-md-50 pt-30 pb-20">
          <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
          <div className="row justify-content-between">
            {nominals.map((nominal) => (
              <NominalItem
                key={nominal._id}
                _id={nominal._id}
                coinQuantity={nominal.coinQuantity}
                coinName={nominal.coinName}
                price={nominal.price}
                onChange={() => onNominalItemChange(nominal)}
              />
            ))}
            <div className="col-lg-4 col-sm-6" />
          </div>
        </div>
        <div className="pb-md-50 pb-20">
          <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
          <fieldset id="paymentMethod">
            <div className="row justify-content-between">
              {payments.map((payment) => payment.banks.map((bank) => (
                <PaymentItem
                  key={bank._id}
                  bankID={bank._id}
                  type={payment.type}
                  name={bank.bankName}
                  onChange={() => onPaymentItemChange(payment, bank)}
                />
              )))}
              <div className="col-lg-4 col-sm-6" />
            </div>
          </fieldset>
        </div>
        <div className="pb-50">
          <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">
            Bank
            Account
            Name
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="bankAccount"
            name="bankAccount"
            value={bankName}
            onChange={(event) => setBankName(event.target.value)}
            aria-describedby="bankAccount"
            placeholder="Enter your Bank Account Name"
          />
        </div>
        <div className="d-sm-block d-flex flex-column w-100">
          <button
            onClick={onSubmit}
            type="button"
            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          >
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
