import styles from "./Post.module.css"

import { Link, useParams } from "react-router-dom"
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { ChevronLeft } from "lucide-react";

const Post = () => {
    const { id } = useParams();
    const { document: post, loading } = useFetchDocument("posts", id)

    return (
        <div className={styles.post}>
            {loading && (
                <p>Carregando post</p>
            )}
            {post && (
                <div className={styles.details}>
                    <div className={styles.heading}>
                        <Link to="/">
                            <ChevronLeft className={styles.icon} size={25} />
                        </Link>
                        <h1>{post.title}</h1>
                    </div>
                    <img src={post.image} alt={post.title} />
                    <p className={styles.body}>{post.body}</p>
                    <h3>Este post trata sobre:</h3>
                    <div className={styles.tags}>
                        {post.tagsArray.map((map) => (
                            <p key={map}><span>#</span>{map}</p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Post