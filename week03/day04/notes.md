Friday challenge
- Join us on site!

- required features:
    - create models (3)
    - one 1 to many
    - constraints (allowNull, Unique)
    - seeds (for all models)
    - 4 endpoints (2 GET, 1 POST, 1 PUT/PATCH)

Middlewares:

HTTP REQUEST -> middleware1 -> middleware2-> route (app.get(...)) -> HTTP Response


HASHING:

Registering:
    'swen123' -hash-> dskfjhfekjghkljj4io5u4t089tuy4ujp

Login:
    'swen123' -hash-> dskfjhfekjghkljj4io5u4t089tuy4ujp (and compare to db)
    
What do we need for auth?

X A hash function (bcrypt.hashSync), use in POST user
X A compare function to check if a password corresponds to a hash (bcrypt.compareSync), use in POST auth/login endpoint
X create a token (JWT), auth/login
    X toJWT
X check a token (JWT), wherever we want authenticaton
    X toData