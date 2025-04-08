import Fieldset from "../layout/Fieldset.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import FormRow from "../layout/FormRow.jsx";

const FormParticipants = ({form}) => {
  return (
      <Fieldset legend="Participants">
        <FormRow justify={true}>
          <label htmlFor="nbOfAdults">Nombre d'adultes :</label>
          <input
              id="nbOfAdults"
              name="nbOfAdults"
              onChange={form.handleChange}
              value={form.values.nbOfAdults}
              type="number"
              className="input validator"
              min="1"
          />
        </FormRow>
        <div className="flex flex-col gap-3">
          {form.values.nbOfAdults >= 0 && [...Array(form.values.nbOfAdults)].map((_, i) => (
              <FormRow key={i} justify={true}>
                <label htmlFor={`names-${i}`}>Nom Adulte n°{i + 1} :</label>
                <input
                    id={`names-${i}`}
                    name={`names[${i}]`}
                    type="text"
                    className="input validator"
                    onChange={(e) => {
                      const updatedNames = [...form.values.names];
                      updatedNames[i] = e.target.value;
                      form.setFieldValue('names', updatedNames);}
                    }
                    value={form.values.names[i] || ''}
                    pattern="[A-Za-zÀ-ÿ\- ]*"
                />
              </FormRow>
          ))}
          <ErrorMessage fieldError={form.errors.nbOfAdults} />
          <ErrorMessage fieldError={form.errors.names} />
        </div>
        {form.values.names.length > 0 && (
            <FormRow>
              <label htmlFor="hasChildren">J'ai des pitchounes !</label>
              <input
                  name="hasChildren"
                  id="hasChildren"
                  onChange={form.handleChange}
                  value={form.values.hasChildren}
                  type="checkbox"
                  checked={form.values.hasChildren}
                  className="toggle toggle-lg toggle-success"
              />
            </FormRow>
        )}
        {form.values.hasChildren && (
            <>
              <FormRow justify={true}>
                <label htmlFor="nbOfChildren">Nombre d'enfants :</label>
                <input
                    id="nbOfChildren"
                    name="nbOfChildren"
                    onChange={form.handleChange}
                    value={form.values.nbOfChildren}
                    type="number"
                    className="input validator"
                    min="0"
                />
              </FormRow>
              <ErrorMessage fieldError={form.errors.nbOfChildren} />
            </>
        )}
      </Fieldset>

  )
}

export default FormParticipants;