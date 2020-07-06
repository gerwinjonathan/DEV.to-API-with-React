import React, { useState, useEffect } from 'react';
import axios from 'axios';
import __URL from '../../api/api';
import Card from '../cards/CardComponent';
import LazyLoad from 'react-lazyload';

const Loading = () => {
    return(
        <div className="post loading">
            <h5>Loading...</h5>
        </div>
    );
}

const ArticleComponent = () => {
    const [data, setData] = useState({ articles: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                __URL + "articles"
            );
            setData({ articles: result.data });
        };
        fetchData();
    }, []);

    return (
        <div>
            {data.articles.map(article => (
                <LazyLoad placeholder={<Loading />}>
                    <Card
                        avatar={article.user.profile_image}
                        badgeDesc={article.tag_list}
                        username={article.user.name}
                        title={article.title}
                        description={article.description}
                        src={article.cover_image}
                        href={article.url}
                        id={article.id}>
                    </Card>
                </LazyLoad>
            ))}
        </div>
    );
}

export default ArticleComponent;