# Proton front-end interview challenge

We need a web page with three text input fields that will be validated **as a whole** as the user types **in real time**. Please implement the following:

- Center the input fields **vertically and horizontally** on the page. See `README-centering.png`.
- Validate their values by sending **all of them together** to an HTTP endpoint. Use the `mockCallAPI` function in `api.js`.
  - The `mockCallAPI` function is, as its name indicates, a mock. It will not perform an actual request to a server - instead, it will be generated in the client-side.
  - The response will also be delayed by a random amount of time to emulate the behavior of real network requests.
  - The validation response is deterministic, meaning it will always return the same status code for the same input values.
- The endpoint will respond with an object containing a status code:
  - `{ status: 200 }` means it’s valid.
  - `{ status: 400 }` means it’s **not** valid.
  - Any other status code means something else happened, but does **not** mean it’s either valid or invalid.
- If validation succeeds, we don't need to display anything to the user. However, if it fails, display an error message:
  - If the status code is `400`, the error should state that the input values are not valid.
  - If the status code is not `200` (valid) or `400` (invalid), for example `500`, the error should just inform the user that something went wrong.
  - Errors should be displayed in real time.
  - See `README-error.png`.
- Bonus (if time permits): add appropriate unit tests to ensure that when the validation returns status 400 the error message appears.
