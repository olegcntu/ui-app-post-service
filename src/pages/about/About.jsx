import React from 'react';
import cl from "./css/About.module.css"
import AboutBox from "../../components/UI/about_component/AboutBox";
import AboutNews from "../../components/UI/about_component/AboutNews";

const About = () => {
    return (
        <div>
            <section className={cl.advantages}>
                <div className={cl.container_advantages}>
                    <div className={cl.advantages_inner}>
                        <AboutBox
                            title={"Dozens of voluntary liquidations monthly"}
                            text={" We are able to minimize all risks in the process of voluntary liquidation of legal entities."}/>
                        <AboutBox
                            title={"Excellent knowledge of bankruptcy laws"}
                            text={" We are able to minimize all risks in the process of voluntary liquidation of legal entities."}/>
                        <AboutBox
                            title={"Extensive experience in bankruptcy support"}
                            text={" We are able to minimize all risks in the process of voluntary liquidation of legal entities."}/>

                    </div>
                </div>
            </section>
            <AboutNews
                title={"Company's news"}
                mainInfo={" An integrated approach to your issue, timely legal assistance, " +
                    "representation of interests in all court authorities."}
                newsTitle={" Bankruptcy and liquidation of an enterprise in Ukraine"}
                newsText={" “Today, the company's team brings together highly professional experts with\n" +
                    "                                    specialization in certain areas of law. Today, the company's team unites\n" +
                    "                                    highly professional experts with specializations in certain areas of law. To\n" +
                    "                                    date,\n" +
                    "                                    the company's team brings together highly professional experts with\n" +
                    "                                    specializations in certain\n" +
                    "                                    areas of law ... \""}
                writerName={"Krasavin Oleh, CEO of Bankom"}

                firstNewsTitle={"Company news"}
                firstNews={"Today, the company's team brings together highly professional experts with\n" +
                    "                            specializations in\n" +
                    "                            certain areas of law ... \""}
                firstData={"04.05"}
                secondNewsTitle={"Company news"}
                secondNews={"Today, the company's team brings together highly professional experts with\n" +
                    "                            specializations in\n" +
                    "                            certain areas of law ... \""}
                SecondData={"03.04"}
            />

        </div>

    )
        ;
};

export default About;