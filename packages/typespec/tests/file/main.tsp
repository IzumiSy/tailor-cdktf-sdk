import "../../dist/index.mjs";

model Person {
  @unique
  name: string;
};

@doc("A model representing address")
model Address {
  street: string;
  city: string;
}

enum UserRole {
  @doc("Admin role")
  Admin: "admin",
  @doc("User role")
  User: "user"
}

namespace TailorDB {
  @doc("A general user model")
  model User {
    ...Person;
    age?: numeric;

    @doc("A flag indicating if the user is assigned to a project")
    isAssigned?: boolean;

    @doc("User's address")
    address: Address;

    @doc("User's role")
    role: UserRole;
  }
};
