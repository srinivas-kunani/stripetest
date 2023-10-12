import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import NewPaymentForm from './NewPaymentForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NhpYRHKYCUqCSjdpW8Js4PWT1ufbNUsOGrw4sLW5EA7fgAI1OfoQGgr5fyVfB3O75egNfmscrmtYw7cGbFjSWI700XnupmKOd');


const Pay = () => {

    const appearance = {
        theme: 'stripe',
        variables: {
            colorPrimary: '#0570de',
            colorBackground: '#ffffff',
            colorText: '#30313d',
            colorDanger: '#df1b41',
            fontFamily: 'Ideal Sans, system-ui, sans-serif',
            spacingUnit: '6px',
            borderRadius: '4px',
            // See all possible variables below
          }
      }; 

    const options = {
        mode: 'payment',
        currency: 'usd',
        amount: 1099,
        appearance: appearance
      };

    return ( 

       <Elements stripe={stripePromise} options={options}>
          <NewPaymentForm/>
      </Elements>

     );
}
 
export default Pay;