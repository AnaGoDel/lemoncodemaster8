# 01 LOCAL LIST FILTER

## Resumen

Este ejercicio es una modificación del ejemplo \06-AJAX-Field-Change deL
repositorio de GitHub **Lemoncode/master-frontend-lemoncode**.

Vamos a cambiarlo para que en vez de tirar de una lista que se lee de una
fuente rest remota (star wars api o tipycode...), lea de una array en local.

Es decir en el mismo fichero demo.tsx voy a tener una lista con valores
tales como:

```tsx
[
  { name: "maria" },
  { name: "paco" },
  { name: "pepe" },
  { name: "penelope" },
  { name: "juan" },
];
```

Queremos que si el filtro esta vacio se muestre la lista completa, y si el
filtro tiene alguna cadena devuelva los nombres que contenga como substring
ese filtro, ejemplos:

## Paso a Paso

- Primero hacemos un _npm install_

```bash
npm install
```

- Vamos abrir el fichero _demo.tsx_ y vamos a añadir una entrada en el
  estado que almacene una lista estática usuarios, y otra en la que almacene
  una lista de usuarios que será mostrada después de usar el filtro.

```diff
import React from "react";
import { useDebounce } from 'use-debounce';

export const MyComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [debouncedFilter] = useDebounce(filter, 500);
+  const [userCollection, setUserCollection] = React.useState([
+    { name: "maria" },
+    { name: "paco" },
+    { name: "pepe" },
+    { name: "penelope" },
+    { name: "juan" }
+  ]);
+  const [userCollectionFilter, setUserCollectionFilter] = React.useState([
+   { name: "maria" },
+    { name: "paco" },
+    { name: "pepe" },
+    { name: "penelope" },
+    { name: "juan" }
+  ]);

  React.useEffect(() => {
    fetch(`https://swapi.dev/api/people?search=${filter}`)
      .then((response) => response.json())
      .then((json) => setUserCollection(json.results));
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
```

- Ahora vamos a sustituir el acceso a la RESP API json, por un acceso
  a una lista de usuarios en local. Para ello, en useEffect() filtramos la
  lista estática _userCollection_ cada vez que se cambie el filtro de
  busqueda haciendo use del método _includes_ de JavaScript. El resultado
  se guardará en la variable _userCollectionFilter_ a partir del setter
  _setUserCollectionFilter_.

```diff
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

-  React.useEffect(() => {
-    fetch(`https://swapi.dev/api/people?search=${filter}`)
-      .then((response) => response.json())
-      .then((json) => setUserCollection(json.results));
-  }, [debouncedFilter]);

+  React.useEffect(() => {
+    setUserCollectionFilter(userCollection.filter((user) => user.name.includes(filter)))
+  }, [debouncedFilter]);

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
```

- Si ejecutamos este código podemos ver que la opcíon de filtrado funciona con
  nuestra lista local.

```bash
npm start
```
