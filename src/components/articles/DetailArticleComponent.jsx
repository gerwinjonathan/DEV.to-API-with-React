import React, { useState, useEffect } from 'react';
import __URL from '../../api/api';
import axios from 'axios';
import DetailCard from '../cards/DetailCardComponent';

const DetailArticleComponent = (props) => {
    const [detailData, setDetailData] = useState({ detailArticles: [] })
    const [extraContent, setExtraContent] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                __URL + `articles/${props.articleId}`
            );
            setDetailData({ detailArticles: result.data });
        }
        fetchData();
    }, []);

    return (
        <div>
            <DetailCard
                bodyMarkdown={detailData.detailArticles.body_markdown}
                published={detailData.detailArticles.published_at}
                reactions={detailData.detailArticles.public_reactions_count}
                comments={detailData.detailArticles.comments_count}>
            </DetailCard>
        </div>
    )

}

export default DetailArticleComponent;