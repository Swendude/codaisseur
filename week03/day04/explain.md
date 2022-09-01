Hotel check-in:
- Go to the reception and Authenticate yourself using a passport/ID
- Get a keycard, inside the keycard is enough information to Authorize you for entering your room for the required amount of time. (expiration date)

API check-on:
- signup as a user using '/signup'
- Make a request to '/login', include your credentials, and receive a "keycard"
    - store that keycard on the client
- send the keycard for every request that needs authorization