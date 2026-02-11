export default async function handler(req, res) {

  const response = await fetch(
    "https://sandbox.peachpayments.com/v1/checkouts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        entityId: "8ac7a4c79c28bac4019c2a2392a20208",
        amount: "7500.00",
        currency: "ZAR",
        paymentType: "DB"
      })
    }
  );

  const data = await response.json();

  res.redirect(`https://sandbox.peachpayments.com/v1/checkouts/${data.id}/payment`);
}
