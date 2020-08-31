import React, * as react from 'react';
import { Link } from 'react-router-dom';
import { Grid, ListItem } from '@material-ui/core';
import './NavBar.css';


//This is the navigation bar on the top
const Dropdown = ({ callbackFromParent }) => {
	const node = react.useRef();
	const handleClick = (e) => {
		if (node.current.contains(e.target)) {
			// inside click
			callbackFromParent(true);
			return;
		}
		// outside click
		callbackFromParent(false);
	};

	react.useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	return (
		//We set the link to pages sectors and clients
		<Grid container ref={node}>
			<Grid >
				<ListItem onClick={() => callbackFromParent(false)}>
					<Link to="/Sectors">Activity sectors</Link>
				</ListItem>
				<ListItem onClick={() => callbackFromParent(false)}>
					<Link to="/Clients">Our clients</Link>
				</ListItem>
			</Grid>
		</Grid>
	);
};

const Dropdown2 = ({ callbackFromParent2 }) => {
	const node = react.useRef();
	const handleClick = (e) => {
		if (node.current.contains(e.target)) {
			// inside click
			callbackFromParent2(true);
			return;
		}
		// outside click
		callbackFromParent2(false);
	};

	react.useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	return (

		<Grid container ref={node}>
			<Grid >
				<ListItem onClick={() => callbackFromParent2(false)}>
					<Link to="/Juniors">Juniors</Link>
				</ListItem>
				<ListItem onClick={() => callbackFromParent2(false)}>
					<Link to="/Seniors">Seniors</Link>
				</ListItem>
			</Grid>
		</Grid>
	);
};


const Dropdown3 = ({ callbackFromParent3 }) => {
	const node = react.useRef();
	const handleClick = (e) => {
		if (node.current.contains(e.target)) {
			// inside click
			callbackFromParent3(true);
			return;
		}
		// outside click
		callbackFromParent3(false);
	};

	react.useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	return (
		//We set the link to pages appointement and mail
		<Grid container ref={node}>
			<Grid >
				<ListItem onClick={() => callbackFromParent3(false)}>
					<Link to="/Appointment">Appointement</Link>
				</ListItem>
				<ListItem onClick={() => callbackFromParent3(false)}>
					<Link to="/Mail">Mail sending</Link>
				</ListItem>
			</Grid>
		</Grid>
	);
};




const NavBar = () => {
	const [listOpen, setListOpen] = react.useState(false);
	const [listOpen2, setListOpen2] = react.useState(false);
	const [listOpen3, setListOpen3] = react.useState(false);

	const myCallback = (listOpen) => {
		setListOpen(listOpen);
	};

	const myCallback2 = (listOpen2) => {
		setListOpen2(listOpen2);
	};

	const myCallback3 = (listOpen3) => {
		setListOpen3(listOpen3);
	};

	return (
		<Grid container className="navbar">
			<Link to="/">
				<a href="#Recruitement" onClick={() => setListOpen(false)}>
					Recruitment Website
				</a>
			</Link>
			<Link to="/History">
				<a href="#History" onClick={() => setListOpen(false)}>
					Our history
				</a>
			</Link>
			<Grid >
				<div class="dropdown">
					<button class="dropbtn" onClick={() => setListOpen(!listOpen)}>
						<a href="#Missions" >Our missions</a>
					</button>
					<div class="dropdown-content">{listOpen ? <Dropdown callbackFromParent={myCallback} /> : null}</div>
				</div>
			</Grid>
			<Grid >
				<div class="dropdown">
					<button class="dropbtn" onClick={() => setListOpen2(!listOpen2)}>
						<a href="#Carriere" >Your career</a>
					</button>
					<div class="dropdown-content">{listOpen2 ? <Dropdown2 callbackFromParent2={myCallback2} /> : null}</div>
				</div>
			</Grid>
			<Grid >
				<div class="dropdown">
					<button class="dropbtn" onClick={() => setListOpen3(!listOpen3)}	>
						<a href="#Carriere" >Contact us</a>
					</button>
					<div class="dropdown-content">{listOpen3 ? <Dropdown3 callbackFromParent3={myCallback3} /> : null}</div>
				</div>
			</Grid>
			<Link to="/SignIn">
				<a href="#Sign" onClick={() => setListOpen(false)}>
					Sign in
				</a>
			</Link>

		</Grid>


	);
};


export default NavBar;
