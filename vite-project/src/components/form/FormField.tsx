import { FC } from "react";
import {  Field, ErrorMessage } from "formik";
const FormField: FC<{ label: string; name: string; type?: string; as?: string }> = ({ label, name, type = "text", as }) => (
    <div className="flex flex-col space-y-1">
      <label className="text-lg font-medium" htmlFor={name}>{label}</label>
      <Field 
        type={type} 
        name={name} 
        as={as} 
        placeholder={label} 
        className="w-full border-b border-black bg-transparent outline-none text-lg p-2 focus:border-blue-500 transition" 
      />
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
    </div>
  );
  export default FormField;