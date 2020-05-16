import { useState, useCallback } from 'react';

/* Custom hook for sending any type of http request

   Errors with HTTP requests and loading state will be handled by this hook,
   moreover you can use sendRequest with any kind of HTTP verbs accepted on the backend
   (check the first middleware on the backend if you want to add more)

   Default will be a GET request and for that you only need to pass the URL to sendRequest.

   Return -> It will return the obtained response from the backend, already parsed

   In order to see usage examples, check examplesForHTTPHook.txt */

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const sendRequest = useCallback(
    async (
      url,
      method = 'GET',
      body = null,
      headers = { 'Content-Type': 'application/json' }
    ) => {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  return { isLoading, error, sendRequest, clearError };
};
