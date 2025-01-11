

const Button = ({style}) => {
    
  return (
    <div >
         <button
              style={{
                padding: "1.6rem 2.5rem 1.6rem 3.2rem",
                
                fontSize: "1.6rem",
                lineHeight: "1.8rem",
                ...style,
              }}>
              FIND OUR MORE
            </button>
    </div>
  )
}

export default Button
