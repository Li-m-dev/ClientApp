import React, { Component } from 'react';
import { Button, CardBody, Card, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class SideNav extends Component {
	state = {
		toggler1: false,
		toggler2: false,
		toggler3: false,
		toggler4: false,
		toggler5: false,
		toggler6: false
	};

	toggleActive = (e) => {
		console.dir(e.target);
		let id = e.target.id;
		this.setState({
			[e.target.id]: !this.state[id]
		});
	};
	render() {
		return (
			<div className="side-nav">
				<div className="side-nav-img">
					<img src="/images/TSCRALogo.png" alt="logo" />
				</div>
				<div className="side-nav-user-info">
					<div>
						USER: <span>Lisa Walker</span>
					</div>
					<div>
						ROLE: <span>Executive Admin</span>
					</div>
					<div className="user-info-btn">
						<button>LOG OUT</button>
					</div>
				</div>
				<div className="side-nav-dash">
					<div className="side-nav-dash-item">
						<Button
							color="link"
							id="toggler1"
							onClick={(e) => this.toggleActive(e)}
							className={this.state.toggler1 ? 'active-item' : null}
						>
							ADMINISTRATION{' '}
							<i className={this.state.toggler1 ? 'fas fa-caret-down' : 'fas fa-caret-right'} />
						</Button>
						<Collapse isOpen={this.state.toggler1}>
							<Card style={{ border: 'none' }}>
								<CardBody>
									<ul>
										<Link to="/admin/users">
											<li>STAFF</li>
										</Link>
										<Link to="/admin/rangers">
											<li>RANGERS</li>
										</Link>
										<li>REGIONS</li>
										<li>DISTRICTS</li>
										<li>PROGRAMS</li>
										<li>POSITION GROUPS</li>
										<li>POSITIONS</li>
										<li>RATES/TERMS/VOLUMES</li>
									</ul>
								</CardBody>
							</Card>
						</Collapse>
					</div>
					<div className="side-nav-dash-item">
						<Button
							color="link"
							id="toggler2"
							onClick={(e) => this.toggleActive(e)}
							className={this.state.toggler2 ? 'active-item' : null}
						>
							PRODUCTS <i className={this.state.toggler2 ? 'fas fa-caret-down' : 'fas fa-caret-right'} />
						</Button>
						<Collapse isOpen={this.state.toggler2}>
							<Card style={{ border: 'none' }}>
								<CardBody>
									<ul>
										<li>MANAGE PRODUCTS</li>
									</ul>
								</CardBody>
							</Card>
						</Collapse>
					</div>
					<div className="side-nav-dash-item">
						<Button
							color="link"
							id="toggler3"
							onClick={(e) => this.toggleActive(e)}
							className={this.state.toggler3 ? 'active-item' : null}
						>
							EVENT MANAGEMENT{' '}
							<i className={this.state.toggler3 ? 'fas fa-caret-down' : 'fas fa-caret-right'} />
						</Button>
						<Collapse isOpen={this.state.toggler3}>
							<Card style={{ border: 'none' }}>
								<CardBody>
									<ul>
										<li>CALENDAR</li>
									</ul>
								</CardBody>
							</Card>
						</Collapse>
					</div>
					<div className="side-nav-dash-item">
						<Button
							color="link"
							id="toggler4"
							onClick={(e) => this.toggleActive(e)}
							className={this.state.toggler4 ? 'active-item' : null}
						>
							ACCOUNTING{' '}
							<i className={this.state.toggler4 ? 'fas fa-caret-down' : 'fas fa-caret-right'} />
						</Button>
						<Collapse isOpen={this.state.toggler4}>
							<Card style={{ border: 'none' }}>
								<CardBody>
									<ul>
										<li>INVOICING</li>
										<li>RENEWALS</li>
										<li>JOBS</li>
									</ul>
								</CardBody>
							</Card>
						</Collapse>
					</div>
					<div className="side-nav-dash-item">
						<Button
							color="link"
							id="toggler5"
							onClick={(e) => this.toggleActive(e)}
							className={this.state.toggler5 ? 'active-item' : null}
						>
							MEMBERSHIP{' '}
							<i className={this.state.toggler5 ? 'fas fa-caret-down' : 'fas fa-caret-right'} />
						</Button>
						<Collapse isOpen={this.state.toggler5}>
							<Card style={{ border: 'none' }}>
								<CardBody>
									<ul>
										<Link to="/admin/membership">
											<li>MEMBERSHIP</li>
										</Link>
										<li>CONTACTS</li>
									</ul>
								</CardBody>
							</Card>
						</Collapse>
					</div>
					<div className="side-nav-dash-item">
						<Button
							color="link"
							id="toggler6"
							onClick={(e) => this.toggleActive(e)}
							className={this.state.toggler6 ? 'active-item' : null}
						>
							REPORTING <i className={this.state.toggler6 ? 'fas fa-caret-down' : 'fas fa-caret-right'} />
						</Button>
						<Collapse isOpen={this.state.toggler6}>
							<Card style={{ border: 'none' }}>
								<CardBody>
									<ul>
										<li>TEST1</li>
										<li>TEST2</li>
									</ul>
								</CardBody>
							</Card>
						</Collapse>
					</div>
				</div>
			</div>
		);
	}
}

export default SideNav;
