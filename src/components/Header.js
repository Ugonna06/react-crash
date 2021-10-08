import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from "react-router-dom";

const Header = ({title, onOpen, buttonToggle}) => {
  const locate = useLocation();
    return (
        <header className="header">
          <h1>{title}</h1> 
          {locate.pathname === '/' && (<Button color={buttonToggle ? 'red' : 'green'} text={buttonToggle ? 'Close Form' : 'Add'} onClick={() => onOpen()} classstyle="btn"/>) }
        </header>
    )
}

Header.defaultProps ={
  title: "Task Tracker",
}

//prop types i used to indicate what type a prop should be
Header.propTypes ={
  title: PropTypes.string.isRequired,
}

// //CSS in JS
// const headingStyle ={
//   color: "red", 
//   backgroundColor:'black'
// }

export default Header

