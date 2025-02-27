import styles from "./CreatePost.module.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthValue } from "../../context/AuthContext"
import { Captions, Image, Tag, Text } from "lucide-react"

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.post}>
            <h1 className={styles.heading}>Criar post</h1>
            <p className={styles.text}>Escreva sobre o que quiser e compartile o seu conhecimento!</p>

            <form onSubmit={handleSubmit}>
                <label className={styles.sep}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Captions className={styles.icon} />
                        <span className={styles.title}>Título</span>
                    </div>
                    <input type="text" name="title" required placeholder="Pense num bom título..." onChange={(e) => setTitle(e.target.value)} value={title} className={styles.form} />
                </label>
                <label className={styles.sep}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Image className={styles.icon} />
                        <span className={styles.title}>Imagem</span>
                    </div>
                    <input type="text" name="image" required placeholder="Insira uma imagem que representa o seu post" onChange={(e) => setImage(e.target.value)} value={image} className={styles.form} />
                </label>
                <label className={styles.sep}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Text className={styles.icon} />
                        <span className={styles.title}>Conteúdo</span>
                    </div>
                    <textarea name="body" required placeholder="Insira o conteúdo do post" onChange={(e) => setBody(e.target.value)} value={body} id="createPost" className={styles.area}></textarea>
                </label>
                <label className={styles.sep}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Tag className={styles.icon} />
                        <span className={styles.title}>Tags</span>
                    </div>
                    <input type="text" name="tags" required placeholder="Insira as tags, separadas por vírgulas" onChange={(e) => setTags(e.target.value)} value={tags} className={styles.form} />
                </label>
            </form>
        </div>
    )
}

export default CreatePost