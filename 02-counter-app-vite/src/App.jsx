import PropTypes from "prop-types"

export function App( {title} ) {
  //console.log(props)
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>Aprendiendo React</p>
    </>
  );
}

const nombre = () => {
  return "johinner desde function"
}

App.propTypes = {
title: PropTypes.string.isRequired
}

App.defaultProps = {
  //title: "no hay titulo"
}