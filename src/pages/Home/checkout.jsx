import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import axios from "axios";

export default function CheckoutForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/payment/create-payment-intent", { amount });
    const clientSecret = res.data.clientSecret;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setMessage(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      setMessage("Thanh toán thành công!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement className="border p-2" />
      <button type="submit" disabled={!stripe} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Thanh toán
      </button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
}
