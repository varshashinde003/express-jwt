import React, {Component} from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';

const sectors = [
	{ value: "Construction", label: "Construction" },
	{ value: "Corodinator", label: "Corodinator" },
	{ value: "Employer", label: "Employer" },
	{ value: "Financial Career", label: "Financial Career" },
	{ value: "Information Technology", label: "Information Technology" },
	{ value: "Marketing", label: "Marketing" },
	{ value: "Quality check", label: "Quality check" },
	{ value: "Real Estate", label: "Real Estate" },
	{ value: "Sales", label: "Sales" },
	{ value: "Supporting", label: "Supporting" },
	{ value: "Teaching", label: "Teaching" }
];

class Home extends Component {
	constructor(){
		super();
		this.state = {
			sector: null,
		  };
		  this.handleChange = this.handleChange.bind(this);
	}

	handleChange(selectedOption, e){
		this.setState({ 
      [e.name]: selectedOption
     });
	  };

    render(){
		const { sector } = this.state;
        return <div className="page-content">
		<div className="dez-bnr-inr dez-bnr-inr-md" style={{backgroundImage:'url(images/main-slider/slide2.jpg)'}}>
            <div className="container">
                <div className="dez-bnr-inr-entry align-m">
					<div className="find-job-bx">
						<Link to="error-404.html" className="site-button button-sm">Find Jobs, Employment & Career Opportunities</Link>
						<h2>Search Between More Then <br/> <span className="text-primary">50,000</span> Open Jobs.</h2>
						<form className="dezPlaceAni">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="form-group">
										<div className="input-group floating-label">
											<input type="text" className="form-control floating-input" placeholder=" " />
											<label>Job Title, Keywords, or Phrase</label>
											<div className="input-group-append ">
											  <span className="input-group-text"><i className="fa fa-search"></i></span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										
										<div className="input-group floating-label">
											<input type="text" className="form-control floating-input" placeholder=" " />
												<label>City, State or ZIP</label>
												<div className="input-group-append">
													<span className="input-group-text"><i className="fa fa-map-marker"></i></span>
												</div>
											</div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="form-group">
                          <div className="floating-label">
                            <Select
                              className="form-control floating-select"
                              isClearable={true}
                              name="sector"
                              placeholder=""
                              options={sectors}
                              value={sector}
                              onChange={this.handleChange}
                            />
                            <label>City, State or ZIP</label>
                          </div>
                        </div>
									</div>
									<div className="col-lg-2 col-md-6">
									<button type="submit" to="error-404.html" className="site-button btn-block">Find Job</button>
								</div>
							</div>
						</form>
					</div>
				</div>
            </div>
        </div>
		<div className="section-full job-categories content-inner-2 bg-white">
			<div className="container">
				<div className="section-head d-flex head-counter clearfix">
					<div className="mr-auto">
						<h2 className="m-b5">Popular Categories</h2>
						<h6 className="fw3">20+ Catetories work wating for you</h6>
					</div>
					<div className="head-counter-bx">
						<h2 className="m-b5 counter">1800</h2>
						<h6 className="fw3">Jobs Posted</h6>
					</div>
					<div className="head-counter-bx">
						<h2 className="m-b5 counter">4500</h2>
						<h6 className="fw3">Tasks Posted</h6>
					</div>
					<div className="head-counter-bx">
						<h2 className="m-b5 counter">1500</h2>
						<h6 className="fw3">Freelancers</h6>
					</div>
				</div>
				<div className="row sp20">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="icon-bx-wraper">
							<div className="icon-content">
								<div className="icon-md text-primary m-b20"><i className="ti-location-pin"></i></div>
								<Link to="company-manage-job.html" className="dez-tilte">Design, Art & Multimedia</Link>
								<p className="m-a0">198 Open Positions</p>
								<div className="rotate-icon"><i className="ti-location-pin"></i></div> 
							</div>
						</div>				
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="icon-bx-wraper">
							<div className="icon-content">
								<div className="icon-md text-primary m-b20"><i className="ti-wand"></i></div>
								<Link to="company-manage-job.html" className="dez-tilte">Education Training</Link>
								<p className="m-a0">198 Open Positions</p>
								<div className="rotate-icon"><i className="ti-wand"></i></div> 
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="icon-bx-wraper">
							<div className="icon-content">
								<div className="icon-md text-primary m-b20"><i className="ti-wallet"></i></div>
								<Link to="company-manage-job.html" className="dez-tilte">Accounting / Finance</Link>
								<p className="m-a0">198 Open Positions</p>
								<div className="rotate-icon"><i className="ti-wallet"></i></div> 
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="icon-bx-wraper">
							<div className="icon-content">
								<div className="icon-md text-primary m-b20"><i className="ti-cloud-up"></i></div>
								<Link to="company-manage-job.html" className="dez-tilte">Human Resource</Link>
								<p className="m-a0">198 Open Positions</p>
								<div className="rotate-icon"><i className="ti-cloud-up"></i></div> 
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="icon-bx-wraper">
							<div className="icon-content">
								<div className="icon-md text-primary m-b20"><i className="ti-bar-chart"></i></div>
								<Link to="company-manage-job.html" className="dez-tilte">Telecommunications</Link>
								<p className="m-a0">198 Open Positions</p>
								<div className="rotate-icon"><i className="ti-bar-chart"></i></div> 
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="icon-bx-wraper">
							<div className="icon-content">
								<div className="icon-md text-primary m-b20"><i className="ti-tablet"></i></div>
								<Link to="company-manage-job.html" className="dez-tilte">Restaurant / Food Service</Link>
								<p className="m-a0">198 Open Positions</p>
								<div className="rotate-icon"><i className="ti-tablet"></i></div> 
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="icon-bx-wraper">
							<div className="icon-content">
								<div className="icon-md text-primary m-b20"><i className="ti-camera"></i></div>
								<Link to="company-manage-job.html" className="dez-tilte">Construction / Facilities</Link>
								<p className="m-a0">198 Open Positions</p>
								<div className="rotate-icon"><i className="ti-camera"></i></div> 
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="icon-bx-wraper">
							<div className="icon-content">
								<div className="icon-md text-primary m-b20"><i className="ti-panel"></i></div>
								<Link to="company-manage-job.html" className="dez-tilte">Health</Link>
								<p className="m-a0">198 Open Positions</p>
								<div className="rotate-icon"><i className="ti-panel"></i></div> 
							</div>
						</div>
					</div>
					<div className="col-lg-12 text-center m-t30">
						<button className="site-button radius-xl">All Categories</button>
					</div>
				</div>
			</div>
		</div>
		<div className="section-full content-inner bg-gray">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 section-head text-center">
						<h2 className="m-b5">Featured Cities</h2>
						<h6 className="fw4 m-b0">20+ Featured Cities Added Jobs</h6>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to="/">
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(images/city/pic1.jpg)`}}>
								<div className="city-info">
									<h5>Iraq</h5>
									<span>765 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to="/">
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(images/city/pic2.jpg)`}}>
								<div className="city-info">
									<h5>Argentina</h5>
									<span>352 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to="/">
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(images/city/pic3.jpg)`}}>
								<div className="city-info">
									<h5>Indonesia</h5>
									<span>893 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to="/">
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(images/city/pic4.jpg)`}}>
								<div className="city-info">
									<h5>Gambia</h5>
									<span>502 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to="/">
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(images/city/pic5.jpg)`}}>
								<div className="city-info">
									<h5>India</h5>
									<span>765 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to="/">
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(images/city/pic6.jpg)`}}>
								<div className="city-info">
									<h5>Thailand</h5>
									<span>352 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to="/">
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(images/city/pic7.jpg)`}}>
								<div className="city-info">
									<h5>Banjul</h5>
									<span>893 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
						<Link to="/">
							<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(images/city/pic8.jpg)`}}>
								<div className="city-info">
									<h5>Spain</h5>
									<span>502 Jobs</span>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
		<div className="section-full bg-white content-inner-2">
			<div className="container">
				<div className="d-flex job-title-bx section-head">
					<div className="mr-auto">
						<h2 className="m-b5">Recent Jobs</h2>
						<h6 className="fw4 m-b0">20+ Recently Added Jobs</h6>
					</div>
					<div className="align-self-end">
						<Link to="error-404.html" className="site-button button-sm">Browse All Jobs <i className="fa fa-long-arrow-right"></i></Link>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-9">
						<ul className="post-job-bx browse-job">
							<li>
								<div className="post-bx">
									<div className="d-flex m-b30">
										<div className="job-post-company">
											<span><img alt="" src="images/logo/icon1.png"/></span>
										</div>
										<div className="job-post-info">
											<h4><Link to="job-detail.html">Digital Marketing Executive</Link></h4>
											<ul>
												<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
												<li><i className="fa fa-bookmark-o"></i> Full Time</li>
												<li><i className="fa fa-clock-o"></i> Published 11 months ago</li>
											</ul>
										</div>
									</div>
									<div className="d-flex">
										<div className="job-time mr-auto">
											<Link to="/"><span>Full Time</span></Link>
										</div>
										<div className="salary-bx">
											<span>$1200 - $ 2500</span>
										</div>
									</div>
									<label className="like-btn">
										  <input type="checkbox" />
										  <span className="checkmark"></span>
									</label>
								</div>
							</li>
							<li>
								<div className="post-bx">
									<div className="d-flex m-b30">
										<div className="job-post-company">
											<span><img alt="" src="images/logo/icon1.png"/></span>
										</div>
										<div className="job-post-info">
											<h4><Link to="job-detail.html">Digital Marketing Executive</Link></h4>
											<ul>
												<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
												<li><i className="fa fa-bookmark-o"></i> Full Time</li>
												<li><i className="fa fa-clock-o"></i> Published 11 months ago</li>
											</ul>
										</div>
									</div>
									<div className="d-flex">
										<div className="job-time mr-auto">
											<Link to="/"><span>Full Time</span></Link>
										</div>
										<div className="salary-bx">
											<span>$1200 - $ 2500</span>
										</div>
									</div>
									<label className="like-btn">
										  <input type="checkbox" />
										  <span className="checkmark"></span>
									</label>
								</div>
							</li>
							<li>
								<div className="post-bx">
									<div className="d-flex m-b30">
										<div className="job-post-company">
											<span><img alt="" src="images/logo/icon1.png"/></span>
										</div>
										<div className="job-post-info">
											<h4><Link to="job-detail.html">Digital Marketing Executive</Link></h4>
											<ul>
												<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
												<li><i className="fa fa-bookmark-o"></i> Full Time</li>
												<li><i className="fa fa-clock-o"></i> Published 11 months ago</li>
											</ul>
										</div>
									</div>
									<div className="d-flex">
										<div className="job-time mr-auto">
											<Link to="/"><span>Full Time</span></Link>
										</div>
										<div className="salary-bx">
											<span>$1200 - $ 2500</span>
										</div>
									</div>
									<label className="like-btn">
										  <input type="checkbox" />
										  <span className="checkmark"></span>
									</label>
								</div>
							</li>
							<li>
								<div className="post-bx">
									<div className="d-flex m-b30">
										<div className="job-post-company">
											<span><img alt="" src="images/logo/icon1.png"/></span>
										</div>
										<div className="job-post-info">
											<h4><Link to="job-detail.html">Digital Marketing Executive</Link></h4>
											<ul>
												<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
												<li><i className="fa fa-bookmark-o"></i> Full Time</li>
												<li><i className="fa fa-clock-o"></i> Published 11 months ago</li>
											</ul>
										</div>
									</div>
									<div className="d-flex">
										<div className="job-time mr-auto">
											<Link to="/"><span>Full Time</span></Link>
										</div>
										<div className="salary-bx">
											<span>$1200 - $ 2500</span>
										</div>
									</div>
									<label className="like-btn">
										  <input type="checkbox" />
										  <span className="checkmark"></span>
									</label>
								</div>
							</li>
							<li>
								<div className="post-bx">
									<div className="d-flex m-b30">
										<div className="job-post-company">
											<span><img alt="" src="images/logo/icon1.png"/></span>
										</div>
										<div className="job-post-info">
											<h4><Link to="job-detail.html">Digital Marketing Executive</Link></h4>
											<ul>
												<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
												<li><i className="fa fa-bookmark-o"></i> Full Time</li>
												<li><i className="fa fa-clock-o"></i> Published 11 months ago</li>
											</ul>
										</div>
									</div>
									<div className="d-flex">
										<div className="job-time mr-auto">
											<Link to="/"><span>Full Time</span></Link>
										</div>
										<div className="salary-bx">
											<span>$1200 - $ 2500</span>
										</div>
									</div>
									<label className="like-btn">
										  <input type="checkbox" />
										  <span className="checkmark"></span>
									</label>
								</div>
							</li>
							<li>
								<div className="post-bx">
									<div className="d-flex m-b30">
										<div className="job-post-company">
											<span><img alt="" src="images/logo/icon1.png"/></span>
										</div>
										<div className="job-post-info">
											<h4><Link to="job-detail.html">Digital Marketing Executive</Link></h4>
											<ul>
												<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
												<li><i className="fa fa-bookmark-o"></i> Full Time</li>
												<li><i className="fa fa-clock-o"></i> Published 11 months ago</li>
											</ul>
										</div>
									</div>
									<div className="d-flex">
										<div className="job-time mr-auto">
											<Link to="/"><span>Full Time</span></Link>
										</div>
										<div className="salary-bx">
											<span>$1200 - $ 2500</span>
										</div>
									</div>
									<label className="like-btn">
										  <input type="checkbox" />
										  <span className="checkmark"></span>
									</label>
								</div>
							</li>
						</ul>
						<div className="m-t30">
							<div className="d-flex">
								<Link className="site-button button-sm mr-auto" to="/"><i className="ti-arrow-left"></i> Prev</Link>
								<Link className="site-button button-sm" to="/">Next <i className="ti-arrow-right"></i></Link>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="sticky-top">
							<div className="candidates-are-sys m-b30">
								<div className="candidates-bx">
									<div className="testimonial-pic radius"><img src="images/testimonials/pic3.jpg" alt="" width="100" height="100" /></div>
									<div className="testimonial-text">
										<p>I just got a job that I applied for via careerfy! I used the site all the time during my job hunt.</p>
									</div>
									<div className="testimonial-detail"> <strong className="testimonial-name">Richard Anderson</strong> <span className="testimonial-position">Nevada, USA</span> </div>
								</div>
							</div>
							<div className="quote-bx">
								<div className="quote-info">
									<h4>Make a Difference with Your Online Resume!</h4>
									<p>Your resume in minutes with JobBoard resume assistant is ready!</p>
									<Link to="register.html" className="site-button">Create an Account</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix" style={{backgroundImage:'url(images/background/bg4.jpg)'}}>
			<div className="container">
				<div className="section-head text-center text-white">
					<h2 className="m-b5">Testimonials</h2>
					<h5 className="fw4">Few words from candidates</h5>
				</div>
				<div className="blog-carousel-center owl-carousel owl-none">
					<div className="item">
						<div className="testimonial-5">
							<div className="testimonial-text">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src="images/testimonials/pic1.jpg" width="100" height="100" alt="" />
								</div>
								<strong className="testimonial-name">David Matin</strong> 
								<span className="testimonial-position">Student</span> 
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-5">
							<div className="testimonial-text">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src="images/testimonials/pic2.jpg" width="100" height="100" alt="" />
								</div>
								<strong className="testimonial-name">David Matin</strong> 
								<span className="testimonial-position">Student</span> 
							</div>
						</div>
					</div>
					<div className="item">
						<div className="testimonial-5">
							<div className="testimonial-text">
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src="images/testimonials/pic3.jpg" width="100" height="100" alt="" />
								</div>
								<strong className="testimonial-name">David Matin</strong> 
								<span className="testimonial-position">Student</span> 
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="section-full content-inner-2 overlay-white-middle" style={{backgroundImage:'url(images/lines.png)', backgroundPosition:"bottom", backgroundRepeat:"no-repeat", backgroundSize: "100%"}}>
			<div className="container">
				<div className="section-head text-black text-center">
					<h2 className="m-b0">Membership Plans</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
				</div>
				<div className="section-content box-sort-in button-example m-t80">
					<div className="pricingtable-row">
						<div className="row max-w1000 m-auto">
							<div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
								<div className="pricingtable-wrapper style2 bg-white">
									<div className="pricingtable-inner">
										<div className="pricingtable-price"> 
											<h4 className="font-weight-300 m-t10 m-b0">Basic</h4>
											<div className="pricingtable-bx"><span>Free</span></div>
										</div>
										<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
										<div className="m-t20"> 
											<Link to="register.html" className="site-button radius-xl"><span className="p-lr30">Sign Up</span></Link> 
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
								<div className="pricingtable-wrapper style2 bg-primary text-white active">
									<div className="pricingtable-inner">
										<div className="pricingtable-price"> 
											<h4 className="font-weight-300 m-t10 m-b0">Professional</h4>
											<div className="pricingtable-bx"> $ <span>29</span> /  Per Installation </div>
										</div>
										<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
										<div className="m-t20"> 
											<Link to="register.html" className="site-button white radius-xl"><span className="text-primary p-lr30">Sign Up</span></Link> 
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
								<div className="pricingtable-wrapper style2 bg-white">
									<div className="pricingtable-inner">
										<div className="pricingtable-price"> 
											<h4 className="font-weight-300 m-t10 m-b0">Extended</h4>
											<div className="pricingtable-bx"> $  <span>29</span> /  Per Installation </div>
										</div>
										<p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
										<div className="m-t20"> 
											<Link to="register.html" className="site-button radius-xl"><span className="p-lr30">Sign Up</span></Link> 
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    }
}

export default Home;