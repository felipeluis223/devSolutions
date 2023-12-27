import { MdLogout, MdPeopleAlt, MdSettings } from "react-icons/md";
import { FaChartSimple } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { BsFillBellFill } from "react-icons/bs";


export default function Navbar(){
	return (
		<header className="navbar">
			<h2>DevSolutions</h2>
		
			<section>
				<div className='container-search'>
					<input className='input-search' type='text'/>
					<button className='btn-search'>
						<FaSearch />
					</button>
				</div>
				<div className='container-icons'>
					<div className='container-icon'><GoHomeFill /><span>Home</span></div>
					<div className='container-icon'><BsFillBellFill /><span>Alert</span></div>
					<div className='container-icon'><MdPeopleAlt /><span>Clients</span></div>
					<div className='container-icon'><FaChartSimple /><span>Dashboard</span></div>
					<div className='container-icon'><MdSettings /><span>Settings</span></div>
					<div className='container-icon'><MdLogout /><span>Log out</span></div>
				</div>
			</section>
		</header>
	);
}