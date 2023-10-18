import React from 'react';

export const getProfile = async () => {

    const backend = localStorage.getItem("url") + "api/"
    try {
        const response = await fetch("https://api.petfinder.com/v2/animals?type=dog&location=New York", requestOptions);
        if (!response.ok) {
            throw new Error("Failed to fetch data, status code: " + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("An error occurred while fetching data:", error);
    } finally {
        console.log("Data fetch operation completed");
    }
};

