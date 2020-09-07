import React from 'react'
import Alert from './Alert'
import Banner from './Banner'
import card1 from "../img/s1.jpg";
import card2 from "../img/s2.jpg"
import card3 from "../img/s3.jpg"
import card4 from "../img/s4.jpg"
import card5 from "../img/s5.jpg"
import card6 from "../img/s8.jpg"
import card7 from "../img/s7.jpg"
import card8 from "../img/s8.jpg"
import card9 from "../img/s9.jpg"
import Card from './Card';


const Home = () => {
    return (
        <React.Fragment>
            {/* ************* Alert ********** */}

            <Alert />

            {/* ************ Banner *********** */}
            <Banner />



            {/* ************ Card ********* */}

            <div className="_36Vp text-center">
                <h2 className="_1x_x">Stationery Top Products</h2>
                <div className="_1FTk">
                    <button className="btn btn-success">View All</button> </div>
            </div>

            <div className="container mx-auto card-center">
                <div className="row my-4 mx-auto  gy-4">

                    <Card

                        imgsrc={card1}
                        title="Pens"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."

                    />

                    <Card

                        imgsrc={card2}
                        title="Color pens"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."

                    />


                    <Card

                        imgsrc={card3}
                        title="Box"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."

                    />

                </div>

                <div className="row my-4 mx-auto  gy-4">
                    <Card

                        imgsrc={card4}
                        title="Books"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."

                    />

                    <Card

                        imgsrc={card5}
                        title="JEE Books"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."

                    />

                    <Card

                        imgsrc={card6}
                        title="Box"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."

                    />

                </div>

                <div className="row my-4 mx-auto gy-4 ">


                    <Card

                        imgsrc={card7}
                        title="CET Books
                        "
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."

                    />


                    <Card

                        imgsrc={card8}
                        title="MPSC Books
                        "
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."

                    />


                    <Card

                        imgsrc={card9}
                        title="Pens"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."

                    />

                </div>
            </div>


        </React.Fragment>

    )
}

export default Home
