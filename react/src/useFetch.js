import {useState, useEffect} from 'react';



const useFetch = (url) => {

    let [data, setData] = useState(null);
    let [isPending, setIsPending] = useState(true);
    let [error, setError] = useState(null);

    useEffect(() => {

        const abortHandle = new AbortController();

        setTimeout(
            () => { fetch(url, {signal:abortHandle.signal})
            .then(result => {
                if (!result.ok) {
                    console.log(result)
                    throw Error("Could not fetch blogs from that resource");
                }
                return result.json();
            })
            .then (data => {
                setData(data);
                setIsPending(false);
            })
            .catch((error) => {
                if (error.name === 'AbortError') {
                    console.log("Fetch was aborted.");                 
                } else {
                    console.log(error);
                    setIsPending(false);
                    setError(error.message);
                }
            })}
            ,500);

            return () => {
                abortHandle.abort();
                }

    },[url]);

    return {data, isPending, error};
}

export default useFetch;