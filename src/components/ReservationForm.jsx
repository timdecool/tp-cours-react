import {useFormik} from "formik";
import * as yup from "yup";
import FormDates from "./form-parts/FormDates.jsx";
import FormParticipants from "./form-parts/FormParticipants.jsx";
import FormComment from "./form-parts/FormComment.jsx";

const ReservationForm = () => {

  const validation = yup.object().shape({
    startDate: yup.date().min(new Date("2024-12-19"), "La date de début est trop anticipée").required("Il faut une date de début"),
    endDate: yup
        .date()
        .max(new Date("2025-01-10"), "La date de fin est trop tardive")
        .required("Il faut une date de fin")
        .when('startDate', (startDate) => {
          if(startDate) {
            return yup.date().min(startDate, "La date de fin doit être ultérieure à la date de début")
          }
        }),
    nbOfAdults: yup.number().min(1, "Il doit y avoir au moins un adulte dans la réservation").required("Il faut un nombre d'adultes participant"),
    nbOfChildren: yup.number().min(0, "Il ne peut pas y avoir un nombre négatif d'enfants"),
    names: yup.array()
        .of(yup.string().required("Les adultes doivent avoir un nom").min(1, "Il y a au moins un adulte avec un nom").matches(/^[A-Za-zÀ-ÿ-]*$/, "Le nom ne peut contenir que des lettres et des tirets"))
        .test("length-equals-nbOfAdults","Chaque adulte doit avoir un nom renseigné", function(value) {
          const {nbOfAdults} = this.parent;
          return value.length === nbOfAdults;
        } )
  })

  const form = useFormik({
    initialValues: {
      startDate: new Date("2024-12-20").toISOString().split('T')[0],
      endDate: new Date("2025-01-10").toISOString().split('T')[0],
      nbOfAdults: 1,
      names: [],
      hasChildren: false,
      nbOfChildren: 0,
      comment: ""
    },
    validationSchema: validation,
    validateOnMount: true,
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
      <>
        <form onSubmit={form.handleSubmit}>
          <FormDates form={form} />
          <FormParticipants form={form} />
          <FormComment form={form} />

          <button type="submit" className="btn btn-primary mt-3" disabled={form.isSubmitting || !form.isValid}>
            {form.isSubmitting ? 'Envoi des données...' : 'Valider'}
          </button>
        </form>
      </>
  )
}

export default ReservationForm;
