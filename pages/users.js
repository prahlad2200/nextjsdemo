import React from 'react';
import UserTableList from './components/TableList';

function Users({ tableHeader, tableRows }) {
    {
        console.log(tableHeader);
    }
    return (
        <>
            <UserTableList tableHeader={tableHeader} tableRows={tableRows} />
        </>
    );
}
export async function getServerSideProps(context) {
    const tableHeader = ['ID', 'Name', 'User Name', 'Email', 'Address', 'Phone'];
    const tableRows = [];
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const userList = await res.json();
    if (!userList) {
        return {
            notFound: true
        };
    } else {
        for (const _user of userList) {
            var tempRow = {};
            tempRow.id = _user.id;
            tempRow.name = _user.name;
            tempRow.username = _user.username;
            tempRow.email = _user.email;
            tempRow.address = _user.address.street + ', ' + _user.address.city;
            tempRow.phone = _user.phone;
            tableRows.push(tempRow);
        }
    }

    return {
        props: { tableHeader, tableRows } // will be passed to the page component as props
    };
}

export default Users;
