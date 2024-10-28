import { useLoaderData } from "react-router-dom";
import User from "./User";
import './Users.css'

const Users = () => {

    const users = useLoaderData();

    console.log(users);
    return (
        <div>
            <h2>our users {users.length}</h2>
            <p>Fantastic and vdro users</p>
            <div className="users">
                {
                    users.map(user => <User user={user} key={user.id}></User>)
                }
            </div>
        </div>
    );
};

export default Users;