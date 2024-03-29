import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    const [synchronizedItem, setSynchronizedItem] = React.useState(true);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
          setSynchronizedItem(true);
        } catch(error) {
          setError(error);
        }
      }, 1000);
    }, [synchronizedItem]);
  
    const saveItem = (newItem) => {
      try {
        const stringifyItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifyItem);
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    };

    const synchronize = () => {
      setLoading(true);
      setSynchronizedItem(false);
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
      synchronize
    };
}

export { useLocalStorage };
