import { Link } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext"
import styles from "./Dashboard.module.css"
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid

    const { documents: posts, loading } = useFetchDocuments("posts", null, uid);

    const deleteDocument = (id) => { }

    if (loading) {
        return <p>Carregando...</p>
    }

    return (
        <div className={styles.dashboard}>
            <h1 className={styles.title}>Dashboard</h1>
            <p className={styles.subtitulo}>Gerencie os seus posts</p>
            {posts && posts.length === 0 ? (
                <div>
                    <p>Não foram encontrados</p>
                    <Link to="/posts/create">Criar post</Link>
                </div>
            ) : (
                <>
                    <div style={{ marginTop: "10px" }}>
                        {posts && posts.map((post) => (
                            <div className={styles.cards} key={post.id}>
                                <p className={styles.post_title}>{post.title}</p>
                                <div className={styles.botoes_edit}>
                                    <div className={`${styles.edit_opt} ${styles.ver}`}>
                                        <Link to={`/posts/${post.id}`}>Ver</Link>
                                    </div>
                                    <div className={`${styles.edit_opt} ${styles.editar}`}>
                                        <Link to={`/posts/edit/${post.id}`}>Editar</Link>
                                    </div>
                                    <div className={`${styles.edit_opt} ${styles.deletar}`}><button onClick={() => deleteDocument(post.id)}>Delete</button></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Dashboard