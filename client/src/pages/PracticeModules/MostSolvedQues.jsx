import React from 'react';
import './MostSolvedQues.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MostSolvedQues = () => {
    return (<>
        <Navbar />
        <div className="above_the_fold_">
            <div className="responsive-container-block big-container">
                <div className="responsive-container-block container">
                    <div className="responsive-container-block">
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 left">
                            <p className="text-blk gigcase-head-text">
                            </p>
                            <p className="text-blk section-head-text">
                                BOOST YOUR PROBLEM SOLVING SKILLS BY APPLYING YOUR KNOWLEDGE
                            </p>
                        </div>
                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                            <img className="learning-img"
                                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/learning.svg" />
                        </div>
                    </div>
                    <img className="svg half-cloud"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/half-cloud.svg" />
                    <img className="svg cloud2"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cloud.svg" />
                    <img className="svg cloud"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cloud.svg" />
                    <img className="svg planet-img"
                        src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/small-planet.svg" />
                </div>
            </div>
            <div className="responsive-container-block card-container">
                <div className="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-tab-6 wk-mobile-12">
                    <div className="card">
                        <img className="points-svg"
                            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourcourses1.svg" />
                        <div className="card-content">
                            <p className="text-blk card-head">
                                What is Recursion?
                            </p>
                            <p className="text-blk card-subhead">
                                The process in which a function calls itself directly or indirectly is called recursion and
                                the corresponding function is called a recursive function.
                            </p>
                        </div>
                    </div>
                </div>


                <div className="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-tab-6 wk-mobile-12">
                    <div className="card">
                        <img className="points-svg"
                            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourcourses1.svg" />
                        <div className="card-content">
                            <p className="text-blk card-head">
                                What is LinkedList?
                            </p>
                            <p className="text-blk card-subhead">
                                A linked list is a collection of “nodes” connected together via links. These nodes consist
                                of the data to be stored and a pointer to the address of the next node within the linked
                                list.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-tab-6 wk-mobile-12">
                    <div className="card">
                        <img className="points-svg"
                            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eourcourses1.svg" />
                        <div className="card-content">
                            <p className="text-blk card-head">
                                What is Tree in Data structure?
                            </p>
                            <p className="text-blk card-subhead">
                                A tree in data structure is a nonlinear hierarchical data structure that consists of nodes
                                connected by edges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}
export default MostSolvedQues