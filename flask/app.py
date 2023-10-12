from flask import Flask, request
import stripe

# Set-ExecutionPolicy -ExecutionPolicy AllSigned -Scope Process
# & c:/data/srinivas/project/stripedemo/.venv/Scripts/Activate.ps1
#  python -m flask run  

app = Flask(__name__)

publishable_key = 'pk_test_51NhpYRHKYCUqCSjdpW8Js4PWT1ufbNUsOGrw4sLW5EA7fgAI1OfoQGgr5fyVfB3O75egNfmscrmtYw7cGbFjSWI700XnupmKOd'

# Replace with actual stripe key
stripe.api_key = 'sk_test_[deleted]'


@app.route("/")
def home():
    return "Hello world from Flask Server!"

@app.route("/Config")
def getPublishableKey():
    return publishable_key


# This entry point is used to return the existing paymethods of a customer.
@app.route("/PaymentMethods")
def getPaymentMethods():
    # cus_OUpG0lbylSx5VF
    paymentMethods = (stripe.PaymentMethod.list(customer="cus_OUpG0lbylSx5VF", type="card",))
    print(type(paymentMethods))
    listOfCards = paymentMethods['data']
    print ("Number of saved credit cards :" + str(len(listOfCards)))
    return paymentMethods['data']

@app.route("/Customers")
def getCurrentCustomersList():
    return stripe.Customer.list(limit=3)

@app.route("/SetupIntent/ClientSecretKey")
def getSetupIntentClientSecretKey():
    print("Inside SetupIntentClientSecrteyKey method")
    return stripe.SetupIntent.create(automatic_payment_methods={"enabled": True},
                                     customer = "cus_OUpG0lbylSx5VF").client_secret

@app.route("/PaymentIntent/ClientSecretKey")
def getPaymentIntentClientSecretKey():
    print("Inside PaymentIntentClientSecrteyKey method")
    donationAmt = request.args.get('amount')
    paymentIntent = stripe.PaymentIntent.create(amount=donationAmt,
                                currency="usd",
                                payment_method_types=["card"],
                                customer = "cus_OmLa9TEtcgMtFG"
                                )
    print (paymentIntent)
    return paymentIntent.client_secret


    