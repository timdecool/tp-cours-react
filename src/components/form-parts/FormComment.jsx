import Fieldset from "../layout/Fieldset.jsx";
import FormRow from "../layout/FormRow.jsx";

const FormComment = ({form}) => {
  return (
      <Fieldset legend="Optionnel">
        <FormRow>
          <label htmlFor="comment">Tu vois quelque-chose à ajouter ?</label>
          <input
              id="comment"
              name="comment"
              onChange={form.handleChange}
              value={form.values.comment}
              type="textarea"
              className="validator textarea"
              min="0"
          />
        </FormRow>
      </Fieldset>
  )
}

export default FormComment;