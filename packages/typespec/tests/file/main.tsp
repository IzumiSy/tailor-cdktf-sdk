import "../../dist/index.mjs";

using Tailor.TailorDB;

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
  @doc("A model representing a company")
  @hasManyRelation(User)
  model Company {
    @doc("Company name")
    name: string;

    @doc("Company address")
    address: Address;
  }

  @doc("A general user model")
  @hasOneRelation(Company)
  model User {
    ...Person;
    age?: numeric;

    @doc("A flag indicating if the user is assigned to a project")
    isAssigned: boolean = false;

    @doc("User's address")
    address: Address;

    @doc("User's role")
    role: UserRole = UserRole.User;
  }

  @doc("A model representing a project")
  model Project {
    @doc("Project name")
    name: string;

    @doc("Project description")
    description: string;

    @doc("Project status")
    status: string;
  }
};

