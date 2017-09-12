// Use pollyfill for fetch for browsers do not support fetch
import 'whatwg-fetch';

// Implementing get api in client side .We just pass the url - static address ./user - to fetch and handle the response.
//the output is the promise object
export function getUser() {
    //In the server we route this url to specific page.
    return get('user');
}
function get(url) {
    return fetch(url).then(onSuccess, onError);
}
function onSuccess(res) {
    return res.json();
}
function onError(err) {
    console.log(err);
}
