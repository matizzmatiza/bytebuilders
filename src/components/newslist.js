import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { removeHtmlTags } from '../utils/removehtmltags';
import Loader from './loader';
import { formateddate } from '../utils/formateddate';


function NewsList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://bytebuilders.pl/wp-json/wp/v2/posts?post_type=news')
            .then(response => response.json())
            .then(data => {
            setPosts(data);
            setLoading(false);
            })
            .catch(error => {
            console.error('Błąd pobierania danych:', error);
            setLoading(false);
            });
    }, []);

    return (
    <>  

        {loading ? null : (<h1 className="news__title">Aktualności</h1>)}
        <div className="news__container">
            {loading ? (
                <Loader />
            ) : (
                posts.map(({ id, yoast_head_json, title, date, excerpt }) => (
                    <Link key={id} to={`/news/${id}`} className="news__item">
                    <div className="news__item--image">
                        <img src={yoast_head_json.og_image[0].url} alt={title.rendered} />
                    </div>
                    <div className="news__item--content">
                        <h2 className="news__item-title">{title.rendered}</h2>
                        <p className="news__item-date">Data dodania: {formateddate(date)}</p>
                        <p className="news__item-description">{removeHtmlTags(excerpt.rendered)}</p>
                        <span className='news__item-link'>Czytaj więcej</span>
                    </div>
                    </Link>
                ))
            )}
        </div>
    </>
    );
}

export default NewsList;