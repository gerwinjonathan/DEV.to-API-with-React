import React, { useState } from 'react';
import ArticleComponent from './ArticleComponent';
import DetailArticlePage from './DetailArticlePage';

const ArticlePage = (props) => {
    const [visible, setVisible] = useState(true);

    if (visible == true && props.articleId == null) {
        return (
            <div className="article-bundle">
                <h1>Article</h1>
                <ArticleComponent />
            </div>
        );
    }
    else {
        setVisible(false);
        return (
            <div className="detail-article">
                <DetailArticlePage articleId={props.articleId} />
            </div>
        );
    }
}

export default ArticlePage;