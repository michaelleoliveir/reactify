import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext"
import styles from "./Dashboard.module.css"
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid

    const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

    const deleteDocument = (id) => {

    }

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
                <>
                    <div>
                        <span>Título</span>
                        <span>Ações</span>
                    </div>

                    {posts && posts.map((post) => (
                        <div key={post.id}>
                            <p>{post.title}</p>

                            <div>
                                <Link to={`/posts/${post.id}`}>Ver</Link>

                                <Link to={`/posts/edit/${post.id}`}></Link>

                                <button onClick={() => deleteDocument(post.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default Dashboard