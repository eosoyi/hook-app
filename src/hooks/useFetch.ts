import React, { useEffect, useState } from "react";

interface UseFetchProps {
    url: string;
}

const localCache = {}

export const useFetch = ({ url }: UseFetchProps) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: {}
    });


    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: {}
        });
    }

    const getFetch = async () => {
        if (localCache[url]) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: {}
            })
            return;
        }


        setLoadingState();
        const response = await fetch(url);

        //sleep
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            });
            return;
        }

        const data = await response.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: {}
        });

        // manejamos el localCache
        localCache[url] = data;

    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}