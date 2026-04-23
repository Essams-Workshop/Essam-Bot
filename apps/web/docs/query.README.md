# Authentication & Data Fetching Guide

## Better Authentication

1. **Secure Cookies**: Store JWTs or Session IDs in `HttpOnly`, `Secure`, `SameSite=Lax` cookies. Never `localStorage`.
2. **Server Validation**: Validate auth state inside your server routes and server functions before fetching data or mutating.
3. **TanStack Router Context**: Pass auth state (user object or null) into the Router context so you can check authentication inside route loaders (`beforeLoad`).

## Server Functions + TanStack Query

TanStack Start utilizes `createServerFn` to run code securely on the backend. This is the recommended way to bridge your API and your React client.

### 1. Create a Server Function
Use `createServerFn` to securely fetch data from your API.

```typescript
// src/server/functions.ts
import { createServerFn } from '@tanstack/react-start';

export const getPrograms = createServerFn("GET", async () => {
  // Runs ONLY on server. Safe for secrets/DB calls.
  // const user = await getSession();
  // if (!user) throw new Error("Unauthorized");
  
  const response = await fetch("https://api.yourdomain.com/programs");
  if (!response.ok) throw new Error("Failed to fetch API");
  
  return response.json();
});
```

### 2. Wrap in TanStack Query
Call the server function inside a `useQuery` hook on the client. Query handles caching, deduplication, and loading states.

```typescript
// src/components/ProgramsList.tsx
import { useQuery } from '@tanstack/react-query';
import { getPrograms } from '@/server/functions';

export function ProgramsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['programs'],
    queryFn: () => getPrograms(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching programs.</div>;

  return (
    <ul>
      {data.map(program => <li key={program.id}>{program.name}</li>)}
    </ul>
  );
}
```
