import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SalesPersonList = () => {
    const [sales_persons, setSalesPerson] = useState([])

    const getSalesPersons = async () => {
        const salesPersonUrl = 'http://localhost:8090/api/salesperson/';
        const response = await fetch(salesPersonUrl);
        if (response.ok) {
            const data = await response.json();
            setSalesPerson(data);
        }
    }

    const deleteSalesPerson = async (id) => {
        const url = (`http://localhost:8090/api/salesperson/${id}/`)
        const fetchConfig = {
            method: "delete",
        }
        const response = await fetch(url, fetchConfig)
        if (response.ok) {
            const alert = document.getElementById("success-message");
            alert.classList.remove("d-none");
            getSalesPersons();
            const data = await response.json()
        } else {
            const alert = document.getElementById("failure-message");
            alert.classList.remove("d-none");
        }
    }


    useEffect(() => {
        getSalesPersons();
    }, [])
