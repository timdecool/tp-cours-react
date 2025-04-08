
const FormRow = ({justify = false, children}) => {
  return (
      <div className={`flex gap-3 items-center ${justify ? 'w-[500px] justify-between':''}`}>
        {children}
      </div>
  )
}
export default FormRow;