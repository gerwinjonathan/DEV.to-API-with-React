import React from 'react';
import DetailArticleComponent from './DetailArticleComponent';

const DetailArticlePage = (props) => {
    return (
        <div className="detail-article">
            <DetailArticleComponent articleId={props.articleId} />
        </div>
    );
}

export default DetailArticlePage;