import React from 'react';
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleleft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2> LinkedIn News</h2>
                <InfoIcon />
            </div>
            
            {newsArticle("Coronavirus Update",  "Top News - 456466 Readers")}
            {newsArticle("Footbal Update",  "Top News - 456475 Readers")}
            {newsArticle("Videos Update",  "Top News - 456365 Readers")}
            {newsArticle("Film Update",  "Top News - 455465 Readers")}
            {newsArticle("Application Update",  "Top News - 456465 Readers")}
        </div>
    )
}

export default Widgets
