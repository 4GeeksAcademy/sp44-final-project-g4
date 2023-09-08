export const signIn = async (event, initialObject = {}) => {
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
        const response = await fetch("https://literate-tribble-x5wv7xv7gw6cpp4-3001.app.github.dev/api/login", requestOptions);

        if (!response.ok) {
            console.log(response)
        }
        const data = await response.json();

        if (data["access_token"]) {
            localStorage.setItem("token", data["access_token"])

            const result = localStorage.getItem("token");
            alert(result)
            localStorage.removeItem("token")
        }

        return data;

    } catch (error) {
        console.error("An error occurred while fetching data:", error);

    } finally {
        console.log("Data fetch operation completed");

    }
}
