import React, {Component} from 'react';
import Part from "./Part";
import {Container, Row, Col} from "reactstrap";
import TortCool from "./TortCool";
import UchCard from "./UchCard";

class PracticalWork extends Component {
    render() {
        return (
            <div>
                <div className='galeriya'>
                    <Container>
                        <Row>
                            <div className="col-12">
                                <div className="navbar-nav navbar navbar-expand-sm navbar-light mt-4">
                                    <h4 className='nav-item'><a href="#"
                                                                className='nav-link font-family-bold text-dark btn-lg home1'>Indicorp</a>
                                    </h4>
                                    <ul className="nav navbar-nav ml-5 home">
                                        <li className='nav-item ml-5 mt-1 home'><a href="#"
                                                                              className='nav-link ml-3'>Home</a>
                                        </li>
                                        <li className='nav-item ml-3 mt-1'><a href="#"
                                                                              className='nav-link'>Product</a>
                                        </li>
                                        <li className='nav-item ml-3 mt-1'><a href="#"
                                                                              className='nav-link'>Pricing</a>
                                        </li>
                                        <li className='nav-item ml-3 mt-1'><a href="#"
                                                                              className='nav-link'>Contact</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </Row>
                    </Container>
                    <div className='d-flex justify-content-start ikkitaicon'>
                        <span className='icon icon-search d-sm-none'></span>
                        <span className='icon icon-handcar d-sm-none mx-2'></span>
                        <span className='icon icon-menu d-sm-none menu'></span>
                    </div>
                    <div className='d-flex justify-content-end mr-5 menu8'>
                        <span className='icon icon-menu'></span>
                    </div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-12">
                                <div className='mt-5 colonikki'>
                                    <h1 className='font-family-bold'>EMPOWER <br/> YOUR BUSINESS</h1>
                                </div>
                                <p className='font-family-Light mt-4 colonikki'>We know how large objects will
                                    act, <br/>
                                    but things on a small scale.</p>
                                <div className='d-flex justify-content-start mt-4 buttonlife'>
                                    <button type='button' className='btn btn-light batten'>Get Quote Now</button>
                                    <button type='button' className='btn btn-light batten ml-4'>Learn More</button>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Part icon={<span className='icon icon-bag'></span>}
                                      text='Digital Marketing'
                                      matn={<div>We focus on ergonomics and <br/>
                                          meeting you where you work. </div>}/>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Part icon={<span className='icon icon-cut'></span>}
                                      text='National top 50 firms'
                                      matn={<div>Just type what's on your mind <br/>
                                          and we'll get you there.</div>}/>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Part icon={<span className='icon icon-digital'></span>}
                                      text='Digital Marketing'
                                      matn={<div>the quick fox jumps over the <br/>
                                          lazy dog</div>}/>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='font-family-bold text-center whyhose'>WHY CHOOSE US</h1>
                <h6 className='font-family-Light text-center small'>Problems trying to resolve the conflict between the
                    two major realms <br/>
                    of Classical physics: Newtonian mechanics </h6>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                            <div className="card bg-white border-0 py-4">
                                <div className='text-center'>
                                    <span className='icon icon-settings'></span>
                                </div>
                                <h1 className='font-family-bold text-center mt-2'>3K</h1>
                                <p className='font-family-Light small text-center'>CASES DONE</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                            <div className="card bg-white border-0 py-4">
                                <div className='text-center'>
                                    <span className='icon icon-vektor'></span>
                                </div>
                                <h1 className='font-family-bold text-center mt-4'>45</h1>
                                <p className='font-family-Light small text-center'>HAPPY CUSTOMERS</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                            <div className="card bg-white border-0 py-4">
                                <div className='text-center'>
                                    <span className='icon icon-vektor2'></span>
                                </div>
                                <h1 className='font-family-bold text-center mt-2'>12+</h1>
                                <p className='font-family-Light small text-center'>AWARD WINNING</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                            <div className="card bg-white border-0 py-4">
                                <div className='text-center'>
                                    <span className='icon icon-vektor3'></span>
                                </div>
                                <h1 className='font-family-bold text-center mt-2'>1.5K</h1>
                                <p className='font-family-Light small text-center'>CASES DONE</p>
                            </div>
                        </div>

                        <div className="col-12 col12">
                            <h3 className='font-family-bold text-center'>Practice Advice</h3>
                            <p className='font-family-Light small text-center'>Problems trying to resolve the
                                conflict
                                between <br/>
                                the two major realms of Classical physics: Newtonian mechanics </p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 uchcool">
                            <TortCool text={<h5>A single source <br/>
                                of truth</h5>}
                                      text1={<p className='font-family-Light small'>Newton thought that <br/>
                                          light was made up of <br/>
                                          particles, but then it <br/>
                                          was discovered </p>} rasm='cover (5).png'/>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 uchcool">
                            <TortCool text={<h5>Fastest way to <br/>
                                organize</h5>}
                                      text1={<p className='font-family-Light small'>“Quantum mechanics” <br/>
                                          is the description of the <br/>
                                          behaviour of matter</p>} rasm='cover (6).png'/>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 uchcool">
                            <TortCool text={<h5>Fastest way to <br/>
                                take action</h5>}
                                      text1={<p className='font-family-Light small'>They describe a <br/>
                                          universe consisting of <br/>
                                          bodies moving</p>} rasm='cover (7).png'/>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 uchcool">
                            <TortCool text={<h5>Work better <br/>
                                together</h5>}
                                      text1={<p className='font-family-Light small'>They finally obtained <br/>
                                          a consistent description <br/>
                                          of the behaviour </p>} rasm='cover (8).png'/>
                        </div>
                    </div>
                </div>
                <div className='bg-white thesecondtext'>
                    <div className="container">
                        <div className="row">
                            <div className='col-12 text-center mt-5 pt-2'>
                                <h3 className='font-family-bold'>We are providing best <br/>
                                    business service.</h3>
                                <p className='font-family-Light small'>Problems trying to resolve the
                                    conflict between the two major realms <br/>
                                    of Classical physics: Newtonian mechanics </p>
                            </div>
                            <div className="col-lg-6 mt-5 coll6">
                                <img src="media bg-cover (1).png" className='w-100' alt=""/>
                                <span className='icon icon-vdeo videos1'>
                                    <span className='icon icon-circle sircle1'></span>
                                </span>
                            </div>
                            <div className="col-lg-6 mt-5 d-flex justify-content-center align-items-end">
                                <div>
                                    <h3 className='font-family-bold d-flex justify-content-start'>Most trusted in <br/>
                                        our field</h3>
                                    <p className='font-family-Light d-flex justify-content-start'>Most calendars are
                                        designed for teams.
                                        Slate <br/>
                                        is designed for freelancers who want a <br/>
                                        simple way to plan their schedule.</p>
                                    <div className='d-flex justify-content-start mt-5'>
                                        <span className='icon icon-persons'></span>
                                        <p className='font-family-bold ml-3'>the quick fox jumps over the lazy <br/>
                                            dog <br/> <span
                                                className='font-family-Light'>Things on a very small scale ...</span>
                                        </p>
                                    </div>
                                    <div className='d-flex justify-content-start'>
                                        <span className='icon icon-vektorr'></span>
                                        <p className='font-family-bold ml-3'>the quick fox jumps over the lazy <br/>
                                            dog <br/> <span
                                                className='font-family-Light'>Things on a very small scale ...</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 pb-5 text-center">
                            <img src="Vector (25).png" width='100' alt=""/>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 pb-5 text-center">
                            <img src="Vector (26).png" width='100' alt=""/>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 pb-5 text-center">
                            <img src="Vector (27).png" width='100' alt=""/>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 pb-5 text-center">
                            <img src="Vector (28).png" width='100' alt=""/>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 pb-5 text-center">
                            <img src="Vector (29).png" width='100' alt=""/>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 pb-5 text-center">
                            <img src="Vector (30).png" width='100' alt=""/>
                        </div>
                    </div>
                </div>
                <div className='bg-dark py-4'>
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-10 bg-info inputcol py-3 px-4 coll10">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <h6 className='text-white colonikki'>Subscribe For Latest <br/>
                                            Newsletter</h6>
                                    </div>
                                    <div className="col-lg-6">
                                        <form>
                                            <div className="input-group input-group-sm">
                                                <input type="text" className='form-control shadow-none'
                                                       placeholder="Your Email" name='email'/>
                                                <div className='input-group-append shadow-none'>
                                                    <div className='input-group-text bg-warning text-white'>Subscribe
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h4 className='font-family-bold text-center'>Get In Touch</h4>
                            <p className='text-center font-family-Light'>Problems trying to resolve the conflict
                                between <br/>
                                the two major realms of Classical physics: Newtonian mechanics </p>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3 tortcool">
                            <UchCard iconcha={<span className='icon icon-telefon bir'></span>}
                                     text={<div
                                         className='font-family-Semi-bold text-center mt-4'>georgia.young@example.com <br/>
                                         <span
                                             className='font-family-Semi-bold text-center'>georgia.young@ple.com</span>
                                     </div>} support="Get Support" buttonn='Submit Request'/>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3 tortcool">
                            <UchCard iconcha={<span className='icon icon-submit bir'></span>}
                                     text={<div bir
                                                className='font-family-Semi-bold text-center mt-4'>georgia.young@example.com <br/>
                                         <span
                                             className='font-family-Semi-bold text-center'>georgia.young@ple.com</span>
                                     </div>} support="Get Support" buttonn='Submit Request'/>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3 tortcool">
                            <UchCard iconcha={<span className='icon icon-telegram bir'></span>}
                                     text={<div
                                         className='font-family-Semi-bold text-center mt-4'>georgia.young@example.com <br/>
                                         <span
                                             className='font-family-Semi-bold text-center'>georgia.young@ple.com</span>
                                     </div>} support="Get Support" buttonn='Submit Request'/>
                        </div>

                    </div>
                </div>
                <div className="bg-white mt-5 py-4">
                    <div className="container">
                        <div className="row">
                            <div className='col-lg-6'>
                                <h5 className='font-family-Semi-bold'>Consulting Agency For Your Business <br/>
                                    <span
                                        className='font-family-Light small'>the quick fox jumps over the lazy dog</span>
                                </h5>
                            </div>
                            <div className='col-lg-6'>
                                <div className='d-lg-flex justify-content-lg-end text-center'>
                                    <button type='button' className='btn btn-warning text-white px-4 py-2'>Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-info py-5'>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl col-lg-3 col-md-4 col-sm-6 corpus">
                                <div>
                                    <h6 className='font-family-bold text-white pb-3'>Company Info</h6>
                                    <p className='text-white font-family-Semi-bold small'>About Us</p>
                                    <p className='text-white font-family-Semi-bold small'>Carrier</p>
                                    <p className='text-white font-family-Semi-bold small'>We are hiring</p>
                                    <p className='text-white font-family-Semi-bold small'>Blog</p>
                                </div>
                            </div>
                            <div className="col-xl col-lg-3 col-md-4 col-sm-6 corpus">
                                <div>
                                    <h6 className='font-family-bold text-white pb-3'>Legal</h6>
                                    <p className='text-white font-family-Semi-bold small'>About Us</p>
                                    <p className='text-white font-family-Semi-bold small'>Carrier</p>
                                    <p className='text-white font-family-Semi-bold small'>We are hiring</p>
                                    <p className='text-white font-family-Semi-bold small'>Blog</p>
                                </div>
                            </div>
                            <div className="col-xl col-lg-3 col-md-4 col-sm-6 corpus">
                                <div>
                                    <h6 className='font-family-bold text-white pb-3'>Features</h6>
                                    <p className='text-white font-family-Semi-bold small'>Business Marketing</p>
                                    <p className='text-white font-family-Semi-bold small'>User Analytic</p>
                                    <p className='text-white font-family-Semi-bold small'>Live Chat</p>
                                    <p className='text-white font-family-Semi-bold small'>Unlimited Support</p>
                                </div>
                            </div>
                            <div className="col-xl col-lg-3 col-md-4 col-sm-6 corpus">
                                <div>
                                    <h6 className='font-family-bold text-white pb-3'>Resources</h6>
                                    <p className='text-white font-family-Semi-bold small'>IOS & Android</p>
                                    <p className='text-white font-family-Semi-bold small'>Watch a Demo</p>
                                    <p className='text-white font-family-Semi-bold small'>Customers</p>
                                    <p className='text-white font-family-Semi-bold small'>API</p>
                                </div>
                            </div>
                            <div className="col-xl col-lg-3 col-md-4 col-sm-6 corpus">
                                <div>
                                    <h6 className='font-family-bold text-white pb-3'>Get In Touch</h6>
                                    <div className='d-flex justify-content-start'>
                                        <span className='icon icon-telefon2'></span>
                                        <p className='text-white font-family-Semi-bold small ml-1'>(480) 555-0103</p>
                                    </div>
                                    <div className='d-flex justify-content-start'>
                                        <span className='icon icon-submit2'></span>
                                        <p className='text-white font-family-Semi-bold small ml-1'>4517 Washington
                                            Ave.</p>
                                    </div>
                                    <div className='d-flex justify-content-start'>
                                        <span className='icon icon-telegram2'></span>
                                        <p className='text-white font-family-Semi-bold small ml-1'>debra.holt@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className='font-family-Light small endmenu'>Made With Love By Figmaland All Right Reserved </p>
                        </div>
                        <div className="col-lg-6 endmenu">
                            <div className='d-flex justify-content-end'>
                                <span className='icon icon-facebook'></span>
                                <span className='icon icon-imo ml-3'></span>
                                <span className='icon icon-watsapp ml-3'></span>
                                <span className='icon icon-youtube ml-3'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PracticalWork;