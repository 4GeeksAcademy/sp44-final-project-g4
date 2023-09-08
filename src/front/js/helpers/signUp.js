import React from 'react';

export const signUp = async (event, initialObject = {}, type) => {
    // Development, default picture.
    initialObject.avatar = "https://www.shorturl.at/img/shorturl-icon.png";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "https://literate-tribble-x5wv7xv7gw6cpp4-3001.app.github.dev");


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
        const res = await fetch(`https://literate-tribble-x5wv7xv7gw6cpp4-3001.app.github.dev/api/signup/${type}`, requestOptions);

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
