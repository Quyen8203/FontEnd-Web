import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Home/checkout";

const stripePromise = loadStripe("pk_test_51Qy6GmHIKAQr5Zk7vHevine8acDKKQacFSKYX3TVrsNxrT07f8MLYtxp2DZHSj3rxAi3LLXPO4usUYCrdfy0UwJx00QCY180p1");

function PaymentPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm amount={100000} /> {/* ví dụ 100.000 VND */}
    </Elements>
  );
}
