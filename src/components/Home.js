import React from 'react';
import homeImage from '../images/home.svg'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Home = () => {
    
    return (
        <Box>
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row'>
                        <div className='col-md-6 pt-lg-0 order-2 order-lg1'>
                            <h1>Build your Application using Awesome Template</h1>
                            <h4>
                                all template will work withot error....   
                            </h4>
                            <div className='mt-3'>
                                <Link to='/tempaltes' className='btn btn-primary btn-lg active'>Get started</Link>
                            </div>

                        </div>
                        <div className='col-lg-6 order-1 order-lg-2 header-img'>
                            <img src={homeImage} className='img-fluid' alt='homeimg'/>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </Box>
    );
};

export default Home;

const Box=styled.div`
margin-top:10vh;
`