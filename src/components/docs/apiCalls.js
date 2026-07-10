import React, { useState, useEffect } from 'react';
import { DocTitle, DocP, DocH2, DocList, DocH3 } from '../../components/docs/DocPrimitives';

export default function APICallsDoc() {
    return (
        <>
            <DocTitle eyebrow="Data Fetching">API Integration & HTTP Methods</DocTitle>

            <DocP>
                Connecting your frontend architecture to backend APIs involves executing HTTP network requests using standard clients. React applications handle data serialization, headers, and endpoints asynchronously to create dynamic, data-driven interfaces.
            </DocP>

            <DocH2>Network Clients</DocH2>
            <DocList
                items={[
                    'Fetch API: The native, promise-based web standard utility bundled directly into modern browsers. It requires an explicit step to parse JSON strings via the .json() resolution method.',
                    'Axios: A widely adopted third-party library that automatically transforms JSON payloads, provides global request/response interceptors, simplifies error interception, and handles broad cross-browser edge cases gracefully.'
                ]}
            />

            <DocH2>HTTP Methods (CRUD Mapping)</DocH2>
            <DocList
                items={[
                    'GET: Requests and retrieves data from a specified backend resource endpoint without making any mutating modifications to the server state.',
                    'POST: Transmits an entire structured payload data object to the server to create a completely new record or child resource instance.',
                    'PUT: Replaces an entire existing targeted record package with an updated version. It requires sending the full representation of the payload.',
                    'PATCH: Applies partial updates or targeted modifications to an existing dataset row, updating only the specific properties submitted inside the payload.',
                    'DELETE: Permanently destroys or soft-removes a specific, targeted data resource on the server based on an identifier mapping.'
                ]}
            />

            <DocH2>Enterprise Axios Implementation Pattern</DocH2>
            <DocP>
                Below is a complete, clean implementation structure demonstrating how to execute all core HTTP operations efficiently using an Axios instance inside an interface controller template:
            </DocP>

            <pre>
                <code className="language-jsx">
                    {`import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 1. Configure reusable Axios instance with global configurations
const api = axios.create({
  baseURL: 'https://api.example.com/v1',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default function ItemManagerComponent() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // GET Request: Fetching whole dataset arrays
  const fetchAllItems = async () => {
    setLoading(true);
    try {
      const response = await api.get('/products');
      setItems(response.data); // Axios auto-parses JSON strings into javascript objects
    } catch (err) {
      setError(err.response?.data?.message || 'Error executing GET request');
    } finally {
      setLoading(false);
    }
  };

  // POST Request: Appending a brand new resource item record
  const createNewItem = async (newItemData) => {
    try {
      const response = await api.post('/products', newItemData);
      setItems((prev) => [...prev, response.data]);
    } catch (err) {
      console.error('Error executing POST workflow:', err);
    }
  };

  // PUT Request: Complete overriding replacements
  const updateEntireItem = async (id, completePayload) => {
    try {
      const response = await api.put(\`/products/\${id}\`, completePayload);
      setItems((prev) => prev.map(item => item.id === id ? response.data : item));
    } catch (err) {
      console.error('Error executing PUT tracking operations:', err);
    }
  };

  // PATCH Request: Fractional incremental adjustments
  const patchItemStock = async (id, partialPayload) => {
    try {
      const response = await api.patch(\`/products/\${id}\`, partialPayload);
      setItems((prev) => prev.map(item => item.id === id ? response.data : item));
    } catch (err) {
      console.error('Error executing PATCH updates:', err);
    }
  };

  // DELETE Request: Resource structural removal
  const deleteTargetedItem = async (id) => {
    try {
      await api.delete(\`/products/\${id}\`);
      setItems((prev) => prev.filter(item => item.id !== id));
    } catch (err) {
      console.error('Error executing DELETE workflow:', err);
    }
  };

  useEffect(() => {
    fetchAllItems();
  }, []);

  if (loading) return <p>Syncing product inventories...</p>;
  if (error) return <p>API Exception Detected: {error}</p>;

  return (
    <div>
      <h3>Inventory API Pipeline Panel</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> - Price: \${item.price}
            <button onClick={() => patchItemStock(item.id, { price: item.price + 5 })}>Quick Raise Price</button>
            <button onClick={() => deleteTargetedItem(item.id)}>Remove Product</button>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
                </code>
            </pre>
        </>
    );
}