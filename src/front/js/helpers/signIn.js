


export const signIn = async (event, initialObject = {}) => {
    const backend = localStorage.getItem("url") + "api/"

    event.preventDefault();



    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

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
        const response = await fetch(`${backend}login`, requestOptions);

        if (!response.ok) {
            console.log(response);
        }
        const data = await response.json();
        console.log(data);
        if (data["access_token"]) {
            console.log("heyyyyyyy", data);
            localStorage.setItem("userToken", data.access_token);
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("avatar", data["avatar"]);
            localStorage.setItem("email", data["email"]);
            localStorage.setItem("id", data["userId"]);
            localStorage.setItem("type", data["type"]);

        }

        return data;

    } catch (error) {
        console.error("An error occurred while fetching data:", error);

    } finally {
        console.log("Data fetch operation completed");

    }
};
