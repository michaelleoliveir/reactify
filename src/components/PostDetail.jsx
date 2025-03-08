import { Link } from "react-router-dom"
import styles from "./PostDetail.module.css"

const PostDetail = ({ post }) => {
    return (
        <div>
            <img className={styles.image} src={post.image} alt={post.title} />
            <h2 className={styles.heading}>{post.title}</h2>
            <p className={styles.author}>{post.createdBy}</p>

            <div className={styles.tagDiv}>
                {post.tagsArray.map((tag) => (
                    <p className={styles.tag} key={tag}>
                        <span style={{fontWeight:"bolder"}}>#</span>
                        {tag}
                    </p>
                ))}
            </div>

            <Link to={`/posts/${post.id}`} className={styles.readMore}>Ler</Link>
        </div>
    )
}

export default PostDetail