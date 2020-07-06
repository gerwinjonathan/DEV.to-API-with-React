import React, { useState } from 'react';
import {
    Card, CardText, CardBody
} from 'reactstrap';
import ReactMarkdown from 'react-markdown';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';

const DetailCardComponent = (props) => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardText>
                        <ReactMarkdown source={props.bodyMarkdown} />
                    </CardText>
                    <CardText>Last Update: {props.published}</CardText>
                    <CardText>
                        <td><FaRegHeart /> {props.reactions} reactions  </td>
                        <td><FaRegComment /> {props.comments} comments</td>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default DetailCardComponent;