import Fieldset from "../layout/Fieldset.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import FormRow from "../layout/FormRow.jsx";

const FormDates = ({ form }) => {
  return (
      <Fieldset legend="Dates de réservation">
        <FormRow>
          <label htmlFor="startDate">De :</label>
          <input
              id="startDate"
              name="startDate"
              onChange={form.handleChange}
              value={form.values.startDate}
              type="date"
              className="input validator"
              min="2024-12-20"
              max={form.values.endDate}
          />
          <label htmlFor="endDate">à</label>
          <input
              id="endDate"
              name="endDate"
              onChange={form.handleChange}
              value={form.values.endDate}
              type="date"
              className="input validator"
              min={form.values.startDate}
              max="2025-01-10"
          />
        </FormRow>
        <ErrorMessage fieldError={form.errors.startDate} />
        <ErrorMessage fieldError={form.errors.endDate} />
      </Fieldset>
  )
}

export default FormDates