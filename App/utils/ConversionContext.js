import React, { createContext, useState, useEffect } from "react";
import { Alert } from 'react-native';
import { api } from "./api.js";


export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY = "USD";
const DEFAULT_QUOTE_CURRENCY = "GBP";

export const ConversionContextProvider = ({ children }) => {
    const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
    const [quoteCurrency, setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
    const [date, setDate] = useState();
    const [rates, setRates] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const setBaseCurrency = (currency) => {
        setIsLoading(true);
        return api(`/latest?base=${currency}`)
            .then(response => {
                _setBaseCurrency(currency);
                setDate(response.date);
                setRates(response.rates)
                console.log(response)
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error)
                Alert.alert("Sorry, something went wrong!", error.message);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
        
    const swapCurrencies = () => {
        setBaseCurrency(quoteCurrency)
        setQuoteCurrency(baseCurrency)
    };

    const contextValue = {
        baseCurrency,
        quoteCurrency,
        swapCurrencies,
        setBaseCurrency,
        setQuoteCurrency,
        date,
        rates,
        isLoading
    };

    useEffect(() => {
        setBaseCurrency('');
        setIsLoading(false);
    }, [])

    return (
        <ConversionContext.Provider value={contextValue}>
          {children}
        </ConversionContext.Provider>
    );
};

// ConversionContext.Provider
// ConversionContext.Consumer