import Fieldset from "../components/layout/Fieldset.jsx";
import FormRow from "../components/layout/FormRow.jsx";
import ReservationForm from "../components/ReservationForm.jsx";
import {useState} from "react";
import FormParticipants from "../components/form-parts/FormParticipants.jsx";

const ReservationPage = () => {
  const [isComing, setIsComing] = useState(false);
  const toggleIsComing = () => setIsComing(!isComing);

  return (
        <section className="p-10">
          <Fieldset title="Présence">
            <FormRow>
              <input
                  id="isComing"
                  type="checkbox"
                  checked={isComing}
                  className="toggle toggle-lg toggle-success"
                  onChange={toggleIsComing}
              />
              <label htmlFor="isComing">Je viens pour Noël !</label>
            </FormRow>
          </Fieldset>
          {isComing && (
              <ReservationForm/>
          )}
        </section>
    )
}

export default ReservationPage;