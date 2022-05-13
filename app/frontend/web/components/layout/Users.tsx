import styles from "../../styles/Balances.module.css";
import User from "../elements/User";

const Users = ({users, fetchBalance}:{users: string[], fetchBalance: (user: string) => void}) => {


  return (
    <div className="container shadow-lg rounded-md p-4 mb-3 min-h-fit">
        <h2 className="text-2xl font-medium">Users</h2>
        <div className={styles.separator}></div>
        <ul className="list-disc ml-6">
            {users?.map((user, index) => (
                <a key={index} onClick={() => (fetchBalance(user))}>
                    <User user={user}/>
                </a>))}
        </ul>
    </div>
  )
}



export default Users