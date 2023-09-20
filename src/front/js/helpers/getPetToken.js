export const getPetToken = async () => {
    const formdata = new FormData();
    formdata.append( "grant_type", "client_credentials" );
    formdata.append( "client_id", "R3pw0DRGRelvrxlTtHq28iFQizZWhjM2zIk1Yythgg8XjrLAsb" );
    formdata.append( "client_secret", "G1TZDKs4KmSAjORScekQ4WminzlIxBkCk1FrSQMF" );

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    try {
        const response = await fetch( "https://api.petfinder.com/v2/oauth2/token?oauth_consumer_key=R3pw0DRGRelvrxlTtHq28iFQizZWhjM2zIk1Yythgg8XjrLAsb&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1694883649&oauth_nonce=ZyllGzyMel8&oauth_version=1.0&oauth_signature=ohQEj%2BXXKWbjthoDTlEBsroHhmg%3D", requestOptions );

        if ( !response.ok ) {
            throw new Error( "Failed to fetch data, status code: " + response.status );
        }

        const data = await response.json();

        localStorage.setItem( "petToken", data.access_token );
        return data.access_token;

    } catch ( error ) {
        console.error( "An error occurred while fetching data:", error );
    } finally {
        console.log( "Data fetch operation completed" );
    }
};