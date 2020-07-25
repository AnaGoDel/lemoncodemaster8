import React from "react";
import { useDebounce } from 'use-debounce';

export const MyComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 500);
  const [userCollection, setUserCollection] = React.useState([
    { name: "maria" },
    { name: "paco" },
    { name: "pepe" },
    { name: "penelope" },
    { name: "juan" }
  ]);
  const [userCollectionFilter, setUserCollectionFilter] = React.useState([
    { name: "maria" },
    { name: "paco" },
    { name: "pepe" },
    { name: "penelope" },
    { name: "juan" }
  ]);

  React.useEffect(() => {
    setUserCollectionFilter(userCollection.filter((user) => user.name.includes(filter)))
  }, [debouncedFilter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {userCollectionFilter.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
