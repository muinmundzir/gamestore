import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { setCheckout } from '../../../services/player';

export default function CheckoutConfirmation() {
  const router = useRouter();
  const [checkbox, setCheckbox] = useState(false);

  const onSubmit = async () => {
    const dataItem = localStorage.getItem('data-item');
    const dataTopUp = localStorage.getItem('data-topup');

    const item = JSON.parse(dataItem!);
    const topup = JSON.parse(dataTopUp!);

    if (!checkbox) {
      toast.error('Make sure you have transferred the money');
    } else {
      const data = {
        voucher: item._id,
        nominal: topup.nominalItem._id,
        payment: topup.paymentItem.payment._id,
        bank: topup.paymentItem.bank._id,
        name: topup.bankName,
        accountUser: topup.verifyID,
      };

      const result = await setCheckout(data);
      if (result.error) {
        toast.error(result.message);
      } else {
        toast.success('Transaction completed');
        router.push('/complete-checkout');
      }
    }
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm
          Payment
        </button>
      </div>
    </>
  );
}
