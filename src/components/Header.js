import React, { Component } from "react";
import {Link} from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<header className="site-header mo-left header fullwidth">
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix">
						<div className="container clearfix">
							<div className="logo-header mostion">
								<Link to="/"><img src="images/logo.png" className="logo" alt="" /></Link>
							</div>
							<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							<div className="extra-nav">
								<div className="extra-cell">
									<Link to="register-2.html" className="site-button"><i className="fa fa-user"></i> Sign Up</Link>
									<Link to="#" title="READ MORE" rel="bookmark" data-toggle="modal" data-target="#car-details" className="site-button"><i className="fa fa-lock"></i> login </Link>
								</div>
							</div>
							<div className="header-nav navbar-collapse collapse justify-content-start" id="navbarNavDropdown">
								<ul className="nav navbar-nav">
									<li className="active">
										<Link to="#">Home</Link>
									</li>
									<li>
										<Link to="#">For Candidates <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to="jobs-profile.html" className="header-links">My Profile<span className="new-page">New</span></Link></li>
											<li><Link to="jobs-my-resume.html" className="header-links">My Resume <span className="new-page">New</span></Link></li>
											<li><Link to="jobs-applied-job.html" className="header-links">Applied Job <span className="new-page">New</span></Link></li>
											<li><Link to="jobs-alerts.html" className="header-links">Jobs Alerts <span className="new-page">New</span></Link></li>
											<li><Link to="jobs-saved-jobs.html" className="header-links">Saved Job <span className="new-page">New</span></Link></li>
											<li><Link to="jobs-cv-manager.html" className="header-links">CV Manager <span className="new-page">New</span></Link></li>
											<li><Link to="jobs-change-password.html" className="header-links">Change Password <span className="new-page">New</span></Link></li>
										</ul>
									</li>
									<li>
										<Link to="#">For Employers <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to="company-profile.html" className="header-links">Company Profile <span className="new-page">New</span></Link></li>
											<li><Link to="company-resume.html" className="header-links">Employer Resume <span className="new-page">New</span></Link></li>
											<li><Link to="company-post-jobs.html" className="header-links">Post A Jobs <span className="new-page">New</span></Link></li>
											<li><Link to="company-manage-job.html" className="header-links">Manage jobs <span className="new-page">New</span></Link></li>
											<li><Link to="company-transactions.html" className="header-links">Transactions <span className="new-page">New</span></Link></li>
											<li><Link to="browse-candidates.html" className="header-links">Browse Candidates</Link></li>
										</ul>
									</li>
									<li>
										<Link to="#">Pages <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to="about-us.html" className="header-links">About Us</Link></li>
											<li><Link to="job-detail.html" className="header-links">Job Detail</Link></li>
											<li><Link to="companies.html" className="header-links">companies</Link></li>
											<li><Link to="free-job-alerts.html" className="header-links">free job alerts <span className="new-page">New</span></Link></li>
											<li><Link to="#" className="header-links">Browse Job <i className="fa fa-angle-right"></i></Link>
												<ul className="sub-menu">
													<li><Link to="browse-job-list.html" className="header-links">browse job list</Link></li>
													<li><Link to="browse-job-grid.html" className="header-links">browse job grid <span className="new-page">New</span></Link></li>
													<li><Link to="browse-job-filter-list.html" className="header-links">browse filter list <span className="new-page">New</span></Link></li>
													<li><Link to="browse-job-filter-grid.html" className="header-links">browse filter grid <span className="new-page">New</span></Link></li>
												</ul>
											</li>
											<li><Link to="#" className="header-links">Jobs<i className="fa fa-angle-right"></i></Link>
												<ul className="sub-menu">
													<li><Link to="category-all-jobs.html" className="header-links">all jobs <span className="new-page">New</span></Link></li>
													<li><Link to="category-company-jobs.html" className="header-links">company jobs <span className="new-page">New</span></Link></li>
													<li><Link to="category-designations-jobs.html" className="header-links">designations jobs <span className="new-page">New</span></Link></li>
													<li><Link to="category-jobs.html" className="header-links">category jobs <span className="new-page">New</span></Link></li>
													<li><Link to="category-location-jobs.html" className="header-links">location jobs <span className="new-page">New</span></Link></li>
													<li><Link to="category-skill-jobs.html" className="header-links">skill jobs <span className="new-page">New</span></Link></li>
												</ul>
											</li>
											<li><Link to="#" className="header-links">Portfolio <i className="fa fa-angle-right"></i></Link>
												<ul className="sub-menu">
													<li><Link to="portfolio-grid-2.html" className="header-links">Portfolio Grid 2 </Link></li>
													<li><Link to="portfolio-grid-3.html" className="header-links">Portfolio Grid 3 </Link></li>
													<li><Link to="portfolio-grid-4.html" className="header-links">Portfolio Grid 4 </Link></li>
												</ul>
											</li>
											<li><Link to="#" className="header-links">Login <i className="fa fa-angle-right"></i></Link>
												<ul className="sub-menu">
													<li><Link to="login.html" className="header-links">login 1</Link></li>
													<li><Link to="login-2.html" className="header-links">login 2 <span className="new-page">New</span></Link></li>
													<li><Link to="login-3.html" className="header-links">login 3 <span className="new-page">New</span></Link></li>
												</ul>
											</li>
											<li><Link to="#" className="header-links">register <i className="fa fa-angle-right"></i></Link>
												<ul className="sub-menu">
													<li><Link to="register.html" className="header-links">register 1</Link></li>
													<li><Link to="register-2.html" className="header-links">register 2 <span className="new-page">New</span></Link></li>
												</ul>
											</li>
											<li><Link to="error-404.html" className="header-links">Error 404</Link></li>
											<li><Link to="coming-soon.html" className="header-links">Coming Soon</Link></li>
											<li><Link to="contact.html" className="header-links">Contact Us</Link></li>
										</ul>
									</li>
									<li>
										<Link to="#">Blog <i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
											<li><Link to="blog-classic.html" className="header-links">Classic</Link></li>
											<li><Link to="blog-classic-sidebar.html" className="header-links">Classic Sidebar</Link></li>
											<li><Link to="blog-detailed-grid.html" className="header-links">Detailed Grid</Link></li>
											<li><Link to="blog-detailed-grid-sidebar.html" className="header-links">Detailed Grid Sidebar</Link></li>
											<li><Link to="blog-left-img.html" className="header-links">Left Image Sidebar</Link></li>
											<li><Link to="blog-details.html" className="header-links">Blog Details</Link></li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

export default Header;