import React from 'react';
import { useNavigate } from "react-router-dom";

export const signUp = async (event, initialObject = {}, type, userImage) => {
    const backend = "https://fuzzy-space-broccoli-v9gjv4jgv552p79j-3001.app.github.dev/api/";

    initialObject.avatar = userImage;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "hhttps://fuzzy-space-broccoli-v9gjv4jgv552p79j-3001.app.github.dev");


    console.log(initialObject);
    const raw = JSON.stringify({
        ...initialObject
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const res = await fetch(`${backend}signup/${type}`, requestOptions);

        if (!res.ok) {
            throw new Error("Failed to fetch data, status code: 400" + res.status);
        }

        const data = await res.json();

        if (data.code == 501) {
            alert(data.msg);
        }

        console.log(data);
        return data;


    } catch (error) {
        throw new Error(error);
    } finally {

        console.log("Data fetch operation completed");
    }
};
