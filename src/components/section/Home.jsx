import React from 'react';
import { 
    Col,
    Container, 
    Image, 
    Row, 
    Button,
} from 'react-bootstrap';
// Bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css';
// personal style
import 'assets/sass/styles.scss';

// images
import BalonArbitro from 'assets/img/BalonArbitro.png';
import FotoAnab from 'assets/img/fotoANAB.png';

import Cards from 'components/content/Cards';
import InfoAccordion from 'components/content/InfoAccordion';

// import slider para carrusel
import Slider from 'react-slick';
// Import css files slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//data empresa
import dataEmpresa from 'components/section/dataEmpresa.json';
import dataMisionVision from 'assets/json/dataInfoMVV.json';


// animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// variable para recorrer el json de la empresa
const confiDataEmpresa = dataEmpresa.empresa; 

// variable para recorrer el json de la mision, vision y valores
const confiDataMVV = dataMisionVision.info;

function Home() {
    
    // configuracion del carrusel
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ],
    };

    return (
        <>
            <Container>
                <Row className='mt-4 '>
                    <Col xs={12} md={6} className='align-self-center' >
                            <h1 className='text-capitalize d-none d-md-block'>asociacion nicaraguense de arbitros de baloncesto</h1>
                            <p className='mt-4 mb-4'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <Button variant='primary' size='lg'>
                                Send 
                            </Button>
                    </Col>
                    <Col xs={12} md={6} className='d-flex-center'>
                         <Image 
                            src={`${BalonArbitro}`} 
                            roundedCircle 
                            className='contentHome__circleLogo'  
                            data-aos='fade-left'
                            data-aos-duration='1000'
                            data-aos-easing='ease-in-out'   
                        />
                    </Col>
                </Row>
                <Row className='flex-column-reverse flex-md-row'>
                    <Col xs={12} md={6}>
                        <Image 
                            src={FotoAnab}
                            rounded
                            className='w-100 mt-5'
                            data-aos='fade-right'
                            data-aos-duration='1000'
                            data-aos-easing='ease-in-out'
                        />
                    </Col>
                    <Col 
                        xs={12} 
                        md={6}
                        className='d-flex flex-column justify-content-center'
                    >
                        {confiDataMVV.map((item) => (
                            <InfoAccordion 
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
            <div className='contentHome__sliderEmpresa'>
                <div className='container'>
                    <Slider {...settings}>
                        {confiDataEmpresa.map((item) => (
                            <Cards 
                                key={item.id}
                                title={item.name}
                                description={item.description}
                                images={item.image}
                                url={item.url}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Home;
