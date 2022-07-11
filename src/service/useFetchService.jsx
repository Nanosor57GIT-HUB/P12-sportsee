import { useState, useEffect } from "react";

//Création et utilisation d'un hook customisé sur un fetch
/**
 * Création d'un service d'appel d'API par une URL
 * @param {fetch} url 
 * @returns Retourne un fetch avec la gestion d'erreur par un useState et un useEffect
 */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error(
              "Désolé, une erreur est survenue pendant le chargement ..."
            );
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
