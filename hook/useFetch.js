import { useState, useEffect } from "react";
import axios from "axios";

// STATE CONFIG 

const useFetch= ()=>{
    const[data, setData] = useState([]);
    const[ isLoading, setIsLoading]= useState(false);
    const[ error, setError] = useState(null);
}