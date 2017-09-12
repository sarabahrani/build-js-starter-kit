import { getUser } from './api/userApi';
import sum from './app';
//call api and fill up the table
getUser().then((res) => {
    let rows = "";
    res.users.map((elm) => {
        rows += `<tr>
        <td>${elm.id}</td>
        <td>${elm.name}</td>
        <td>${elm.email}</td>
        <td>${sum(3, 4)}</td>
        </tr>`})
    global.document.getElementById('user').innerHTML = rows;
});


