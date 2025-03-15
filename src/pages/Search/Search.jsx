import styles from "./Search.module.css"

import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"

import PostDetail from "../../components/PostDetail"
import { Link } from "react-router-dom"
import { CircleAlert } from "lucide-react"

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const { documents: posts } = useFetchDocuments("posts", search)

    return (
        <div className={styles.search_module}>
            <div>
                {posts && posts.length !== 0 ? (
                    <div className={styles.heading}>
                        <h2>Exibindo resultados:</h2>
                        <p><span>#</span>{search}</p>
                    </div>
                ) : (
                    <div className={styles.error}>
                        <CircleAlert size={60} strokeWidth={1.5} />
                        <p>Não foram encontrados posts a partir da sua busca...</p>
                        <Link to="/" className={styles.goHome}>Voltar para Home</Link>
                    </div>
                )}
            </div>
            <div>
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Search