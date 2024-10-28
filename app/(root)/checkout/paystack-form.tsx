// @ts-nocheck
import { usePaystackPayment } from "react-paystack";
import { formatNumberWithDecimal } from "@/lib/utils";

function PayStack({ priceInCents }: { priceInCents: number }) {
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: formatNumberWithDecimal(priceInCents * 100), //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    currency: "ZAR",
    publicKey: "pk_test_f180fbc778b1e2f294f7ffb3f768970348093187",
  };

  // you can call this function anything
  const onSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <button
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Paystack Hooks Implementation
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      <PaystackHookExample />
    </div>
  );
}

export default PayStack;
