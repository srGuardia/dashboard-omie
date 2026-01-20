/* eslint-disable @typescript-eslint/no-explicit-any */
/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useFormNative } from "react-hook-form";
import type { ZodType, z } from "zod";

interface FormHookProps {
  schema: ZodType<any>;
}

type FormData<T> = z.infer<T>;

export function useForm({ schema }: FormHookProps) {
  const context = useFormNative<FormData<typeof schema>>({
    resolver: zodResolver(schema as never),
  });

  function onSubmitForm(data: FormData<typeof schema>) {
    console.log("Executing form submit");

    const { success, error } = schema.safeParse(data);

    if (!success) {
      console.log(error);

      throw new Error("Invalid form data");
    }

    console.log("Success submitting form");
  }

  return { ...context, onSubmit: context.handleSubmit(onSubmitForm) };
}
