export function ReactPayfastExample({
  priceInCents,
  email,
}: {
  priceInCents: number;
  email: string;
}) {
  return (
    <form action="	https://sandbox.payfast.co.za/eng/process" method="post">
      <input type="hidden" name="merchant_id" value="10035696" />
      <input type="hidden" name="merchant_key" value="rnqyqo7l8a08p" />
      <input type="hidden" name="amount" value={priceInCents} />
      {/* <input type="hidden" name="return_url" value="/" />
      <input type="hidden" name="cancel_url" value="/" /> */}
      <input type="hidden" name="email_address" value={email} />
      <input type="hidden" name="item_name" value="Test Product" />
      <input type="submit" />
    </form>
  );
}
