import { useEffect, useState } from "react";

export default function useFetch(url, options) {

    const [result, setResult] = useState(null); // estado del resultado, capturar el Json
    const [loading, setLoading] = useState(true); // peticiones, pero con una imagen de carga
    const [error, setError] = useState(null); // es por si ocurre error en la petición

    useEffect(() => {
        (async () => {
            try {  // trate de hacer algo
                const res = await fetch(url, options);
                const json = await res.json();
                setResult(json);
                setLoading(false);
            }
            catch (err) {// y si no, capture el error.

                setError(err);
                setLoading(false);

            }

        })()
    }, [options, url]); // comentario mio: url no esta definida como un hook


    return { error, loading, result }
};
