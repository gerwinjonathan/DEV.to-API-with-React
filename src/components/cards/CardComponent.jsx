import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    useParams,
    Switch
} from 'react-router-dom';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Badge
} from 'reactstrap';

import DetailArticlePage from '../articles/DetailArticlePage';

const CardStyles = {
    paddingTop: "20px",
    paddingBottom: "20px"
}

const UserAvatarStyles = {
    borderRadius: "50px",
    width: "50px"
}

const CardComponent = (props) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div style={CardStyles}>
            <Card>
                <CardImg src={props.src} top width="100%" />
                <CardBody>
                    <CardTitle>
                        <td><img src={props.avatar} style={UserAvatarStyles} /></td>
                        <td><b>{props.username}</b></td>
                    </CardTitle>
                    <CardTitle>
                        {props.badgeDesc.map(tag => {
                            return(
                                <td>
                                    <Badge color="info">#{tag}</Badge>
                                </td> 
                            );
                        })}
                    </CardTitle>
                    <CardTitle><b>{props.title}</b></CardTitle>
                    <CardSubtitle>{props.description}</CardSubtitle>
                    <Router>
                        <Link to={`/${props.id}`}><Button color="primary" onClick={() => {setReadMore(!readMore)}}>Read More</Button></Link>
                        <Switch>
                            <Route path="/:articleId" children={<PathToArticleID />} />
                        </Switch>
                    </Router>
                </CardBody>
            </Card>
        </div>
    );
};

const PathToArticleID = () => {
    let { articleId } = useParams();
    return (
        <div>
            <DetailArticlePage articleId={articleId} />
        </div>
    )
}

export default CardComponent;