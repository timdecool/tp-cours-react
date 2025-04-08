

const Fieldset = ({ legend, children }) => {
  return (
      <fieldset
          className="fieldset p-4 bg-base-100 border border-base-300 rounded-box">
        <legend className="font-semibold fieldset-legend">{ legend }</legend>
        {children}
      </fieldset>
        )
}
export default Fieldset