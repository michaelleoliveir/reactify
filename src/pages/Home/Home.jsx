import styles from "./Home.module.css"

import { useNavigate, Link, Navigate } from "react-router-dom"
import { useState } from "react"
import { Frown, Search } from "lucide-react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import PostDetail from "../../components/PostDetail";

export const Home = () => {
    const [query, setQuery] = useState("");
    const {documents: posts, loading} = useFetchDocuments("posts");

    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(query) {
            return navigate(`/search?q=${query}`)
        }
    }

    return (
        <div className={styles.home}>
            <form onSubmit={handleSubmit} className={styles.search}>
                <input type="text" placeholder="Ou busque por tags..." onChange={(e) => setQuery(e.target.value)} />
                <button>
                    <Search />
                </button>
            </form>

            {/* showing posts */}
            <div className={styles.section}>
                {loading && <p>Carregando posts...</p>}
                {posts && posts.map((post) => (
                    <PostDetail key={post.id} post={post} />
                ))}
                {posts && posts.length === 0 && (
                    <div className={styles.footer}>
                        <Frown size={50} className={styles.frown} />
                        <p>Não foram encontrados posts</p>
                        <Link to="/posts/create" className={styles.linkTo}>Criar primeiro post</Link>
                    </div>
                )}
            </div>
        </div>
    )
}
