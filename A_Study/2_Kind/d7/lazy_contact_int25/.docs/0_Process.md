#### STEP 1

```bash
bun init
```

=> select = blank (blank, react, Library.)

```bash
bun add express mongoose cors jsonwebtoken bcryptjs
```

=> added the dependencies

```bash
bun add -d @types/express @types/cors @types/jsonwebtoken @types/bcryptjs @types/node typescript ts-node
```

=> added aonther dependencies with node with ts.

==========================================================

#### STEP 2 Folder stracture:

```nix
 backend/
├── src/
│ ├── index.ts # Y:  Entry point
│ ├── config/
│ │ └── db.ts #  Y: Mongo connection
│ ├── models/
│ │ ├── User.ts #  Y: For login system
│ │ └── Contact.ts # Y: For contacts
│ ├── routes/
│ │ ├── authRoutes.ts
│ │ └── contactRoutes.ts
│ ├── controllers/
│ │ ├── authController.ts
│ │ └── contactController.ts
│ ├── middleware/
│ │ └── authMiddleware.ts
│ └── types/
│ └── express.d.ts # B: For custom TS types if needed
├── tsconfig.json # B: typescript configuration.
└── package.json # DX: => (bun handles this)
```

==========================================================

#### STEP 3 APP BUILDING:

<!-- //  IMP: AB=1 # Database of App.  FILE: ./src/config/db.ts -->

### mongoose → An ODM (Object Data Modeling) library | MongoDB. define schemas (rules) | collections and interact with Mongo like we would with objects.

mongoose.connect("mongodb://127.0.0.1:27017/mernapp") "mongodb://" → protocol for MongoDB connections. [localhost] 27017 → default MongoDB port.
mernapp → the database name (MongoDB will create it automatically if it doesn’t exist).
await → waits until connection is established.
process.exit(1) → if the DB connection fails, exit the Node process with code 1 (error).

<!-- //  IMP: AB=2 # User Definition.  FILE: ./src/models/User.ts -->

### Interface IUser extends Document = [ TS interface defining => User ].

Extends Document → because Mongoose models represent MongoDB documents.
Schema<IUser> → defines the structure of data stored in MongoDB.

- username: { type: String, required: true, unique: true } must be a string, cannot be empty, must be unique.
- password: { type: String, required: true } must be a string, cannot be empty.

mongoose.model<IUser>("User", userSchema) Creates a Model named "User".

A model is like a class you can use to create, query, update, delete users.
It will map to a MongoDB collection named users (Mongoose automatically pluralizes).
@ export allow us to use model anywhere.

<!-- //  IMP: AB=3 # Contacts Definition.  FILE: ./src/models/Contact.ts -->

### Same pattern as User model.

Defines a Contact object:
name → required string.
phone → required string (we keep it as string because numbers like +91... or leading zeros break if stored as number).
email → optional string.
notes → optional string.
Model name "Contact" → collection contacts in MongoDB.

<!-- //  IMP: AB=4 # Entry Point  FILE: ./src/index.ts -->

### src/index.ts

- "express"; Express is a web framework → lets us handle HTTP requests easily.
- "cors"; Middleware to allow frontend (running on a different port) to make requests.
- app.use(express.json()) => Parses incoming JSON data (e.g., from frontend POST requests).
- connectDB() => Calls the function in db.ts to connect to MongoDB.
- app.use("/api/auth", authRoutes); => Mounts all auth routes (login/register) at /api/auth/....
- app.use("/api/contacts", contactRoutes); => Mounts all contact routes at /api/contacts/....
- app.listen(5000, ...) => Starts server on port 5000.

==========================================================

#### STEP 4

<!-- //  Y: AB=5 # Entry Point  FILE: ./src/routes/authRoutes.ts -->

###

importe the RTOTE from express.
add in const add normal function of route.

<!-- //  Y: AB=5 # Entry Point  FILE: ./src/routes/contactRoutes.ts -->

###

importe the RTOTE from express.
add in const add normal function of route.

==========================================================

#### STEP 2
