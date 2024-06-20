import { useFormStatus } from "react-dom";

import { Input } from "@/components/ui/input";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export const FormInput = ({ errors }: FormInputProps) => {
    const {pending} = useFormStatus()

  return (
    <>
      <Input
        id="title"
        required
        name="title"
        placeholder="asd"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
};
