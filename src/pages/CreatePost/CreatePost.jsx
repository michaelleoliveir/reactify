import styles from "./CreatePost.module.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Captions, Image, Plus, Tag, Text } from "lucide-react"

import { useAuthValue } from "../../context/AuthContext"
import { userInsertDocument } from "../../hooks/useInsertDocument"
import { RiErrorWarningLine } from "@remixicon/react"

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const {user} = useAuthValue();

    const {insertDocument, response} = userInsertDocument("posts");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        // validate image URL
        try {
            new URL(image); 
        } catch (error) {
            setFormError("A imagem precisa ser uma URL válida");
            return;
        }
        
        // creating tag array
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

        // check values
        if(!title || !image || !tags || !body){
            setFormError("Preencha os campos vazios")
            return;
        } 

        if(formError) return;

        insertDocument({
            title,
            image, 
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        })

        // redirect to home page
        navigate("/");
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
                    <input type="text" name="title" required placeholder="Pense num bom título..." onChange={(e) => setTitle(e.target.value)} value={title} className={styles.form} autoComplete="off" />
                </label>
                <label className={styles.sep}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Image className={styles.icon} />
                        <span className={styles.title}>Imagem</span>
                    </div>
                    <input type="text" name="image" required placeholder="Insira uma imagem que representa o seu post" onChange={(e) => setImage(e.target.value)} value={image} className={styles.form} autoComplete="off" />
                </label>
                <label className={styles.sep}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Text className={styles.icon} />
                        <span className={styles.title}>Conteúdo</span>
                    </div>
                    <textarea name="body" required placeholder="Insira o conteúdo do post" onChange={(e) => setBody(e.target.value)} value={body} id="createPost" className={styles.area} autoComplete="off"></textarea>
                </label>
                <label className={styles.sep}>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Tag className={styles.icon} />
                        <span className={styles.title}>Tags</span>
                    </div>
                    <input type="text" name="tags" required placeholder="Insira as tags, separadas por vírgulas" onChange={(e) => setTags(e.target.value)} value={tags} className={styles.form} autoComplete="off" />
                </label>

                {!response.loading && 
                <button className={styles.btnCreate}>
                    <Plus size={50} />
                </button>}
                {response.loading && <button className="btn" disabled>Aguarde...</button>}

                {response.error && <p className="error">
                <RiErrorWarningLine style={{marginRight:"10px", color:"red"}} />
                {response.error}</p>}

                {formError && <p className="error">
                <RiErrorWarningLine style={{marginRight:"10px", color:"red"}} />
                {formError}</p>}
            </form>
        </div>
    )
}

export default CreatePost