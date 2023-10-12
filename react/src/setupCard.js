import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardSetupForm from './CardSetupForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NhpYRHKYCUqCSjdpW8Js4PWT1ufbNUsOGrw4sLW5EA7fgAI1OfoQGgr5fyVfB3O75egNfmscrmtYw7cGbFjSWI700XnupmKOd');


const setupCard = () => {

    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'seti_1NwL2RHKYCUqCSjd42jNkn9c_secret_OjofAu5XoBHkISLLkRRhiLhn4F78YFD',
      };

    return ( 

       <Elements stripe={stripePromise} options={options}>
          <CardSetupForm/>
      </Elements>

     );
}
 
export default setupCard;