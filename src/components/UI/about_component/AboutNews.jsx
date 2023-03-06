import React from 'react';
import cl from "./css/About.module.css";
import tablet_news from "./img/tablet_news.jpg"
import company_news from "./img/company_news.jpg"

const AboutNews = ({
                       title,
                       mainInfo,
                       newsTitle,
                       newsText,
                       writerName,
                       firstNewsTitle,
                       firstNews,
                       secondNewsTitle,
                       secondNews,
                       firstData,
                       SecondData
                   }) => {
    return (
        <section className={cl.news}>
            <div className={cl.container_news}>
                <div className={cl.news_top}>
                    <div className={cl.news_title_box}>
                        <div className={cl.news_title}>
                            {title}
                        </div>
                        {mainInfo}
                    </div>
                    <div>
                        <a href="#" className={cl.news_btn}>
                            Open all news
                        </a>
                    </div>
                </div>
                <div className={cl.news_inner}>

                    <div className={cl.news_slider}>
                        <div className={cl.news_slider_title}>
                            {newsTitle}
                        </div>
                        <div className={cl.news_slider_text}>
                            {newsText}
                        </div>
                        <div className={cl.news_slider_author}>
                            {writerName}
                        </div>
                    </div>
                    <a href="#" className={cl.news_blog}>
                        <div className={cl.news_images}>
                            <img src={tablet_news} style={{width: '250px'}} alt={""}/>
                            <div className={cl.news_date}>{firstData}</div>
                        </div>
                        <div className={cl.news_blog_title}>
                            {firstNewsTitle}
                        </div>
                        <div className={cl.news_blog_text}>
                            {firstNews}
                        </div>
                    </a>

                    <a href="#" className={cl.news_blog}>
                        <div className={cl.news_images}>
                            <img src={company_news} style={{width: '250px'}} alt={""}/>
                            <div className={cl.news_date}>{SecondData}</div>
                        </div>
                        <div className={cl.news_blog_title}>
                            {secondNewsTitle}
                        </div>
                        <div className={cl.news_blog_text}>
                            {secondNews}
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default AboutNews;