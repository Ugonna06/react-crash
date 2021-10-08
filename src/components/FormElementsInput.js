

const FormElementsInput = (props) => {
    let { classstyle, label} = props;
    return (
        <div className={classstyle}>
            <label>{label}</label>
            <input {...props}/>
        </div>
    )
}

// FormElementsInput.defaultProps ={
//     otherProps = "",
// }

// FormElementsInput.propTypes ={
//     title: PropTypes.string,
//   }

export default FormElementsInput
