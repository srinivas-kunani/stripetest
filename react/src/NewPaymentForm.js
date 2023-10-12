import {useStripe, useElements, PaymentElement, AddressElement} from '@stripe/react-stripe-js';


const NewPaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        console.log('Donate button pressed');
        event.preventDefault();
        return; // Just return without doing anything.
    
        if (!stripe || !elements) {
          // Stripe.js hasn't yet loaded.
          // Make sure to disable form submission until Stripe.js has loaded.
          // console.log('Either stripe or elements in null');
          return;
        }
    
         const result = await stripe.confirmPayment({
          //`Elements` instance that was used to create the Payment Element
          elements,
          confirmParams: {
            return_url: "http://localhost:3000/DonationComplete",
          },
        });
    
        if (result.error) {
          // Show error to your customer (for example, payment details incomplete)
          console.log(result.error.message);
        } else {
          // Your customer will be redirected to your `return_url`. For some payment
          // methods like iDEAL, your customer will be redirected to an intermediate
          // site first to authorize the payment, then redirected to the `return_url`.
        }
      };

    return (
        <div className="paymentForm">
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <p/>
          <button disabled={!stripe}>Donate</button>
        </form>
        </div>
      )
}
 
export default NewPaymentForm;