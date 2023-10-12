import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NhpYRHKYCUqCSjdpW8Js4PWT1ufbNUsOGrw4sLW5EA7fgAI1OfoQGgr5fyVfB3O75egNfmscrmtYw7cGbFjSWI700XnupmKOd');

const Donate = () => {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'pi_3NynYqHKYCUqCSjd1PuOaswR_secret_SnYtneX0kwJyDIYr8dLhC5a6P',
      };

    return ( 

       <Elements stripe={stripePromise} options={options}>
          <PaymentForm/>
      </Elements>

     );
}
 
export default Donate;