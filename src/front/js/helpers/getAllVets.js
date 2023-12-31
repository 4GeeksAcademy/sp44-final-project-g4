import React from 'react';

export const getAllVets = async () => {

    const backend = localStorage.getItem("url") + "api/"

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");



    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch(`${backend}professional/vet`, requestOptions);
        if (!response.ok) {
            throw new Error("Failed to fetch data, status code: " + response.status);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    } finally {
        console.log("Data fetch operation completed");
    }
};
