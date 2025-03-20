import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext"
import styles from "./Dashboard.module.css"

const Dashboard = () => {
    const {user} = useAuthValue();
    const uid = user.uid

    //posts do usuário
    const posts = [];

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Gerencie os seus posts</p>
            {posts && posts.length === 0 ? (
                <div>
                    <p>Não foram encontrados</p>
                    <Link to="/posts/create">Criar post</Link>
                </div>
            ) : (
                <div>
                    
                </div>
            )}
        </div>
    )
}

export default Dashboard