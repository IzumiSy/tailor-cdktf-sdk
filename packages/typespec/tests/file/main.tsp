import "../../dist/index.js";

model Person {
  name: string;
};

namespace TailorDB {
  model User {
    ...Person;

    @required
    age: numeric;

    @required
    hasJob: boolean;
  }
};
