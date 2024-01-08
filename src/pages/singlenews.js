import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from '../components/loader';
import { removeHtmlTags } from '../utils/removehtmltags';
import { Link } from 'react-router-dom';
import { formateddate } from '../utils/formateddate';

function SingleNews() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://bytebuilders.pl/wp-json/wp/v2/posts/${id}`)
          .then(response => response.json())
          .then(data => {
            setPost(data);
            setLoading(false);
          })
          .catch(error => {
            console.error('Błąd pobierania danych:', error);
            setLoading(false);
          });
    }, [id]);

    return (
        <section className="singlenews">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <h1 className="singlenews__title">{post.title.rendered}</h1>
                    <p className="singlenews__date">Data dodania: {formateddate(post.date)}</p>
                    <p className="singlenews__content">{removeHtmlTags(post.content.rendered)}</p>
                    <Link to='/news' className="singlenews__back">Powrót do aktualności</Link>
                </>
            )}
        </section>
    );
}

export default SingleNews;