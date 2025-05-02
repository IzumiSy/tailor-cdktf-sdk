model Person {
  name: string;
};

namespace TailorDB {
  model User {
    ...Person;
    age: numeric;
    hasJob: boolean;
  }
};
