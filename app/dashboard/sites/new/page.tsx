"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "@/components/dashboard/SubmitButtons";
import { CreateSiteAction } from "@/lib/actions";
import { siteSchema } from "@/lib/zodSchemas";

export default function NewSitePage() {
  const [currentState, action] = useActionState(CreateSiteAction, undefined);
  const [form, fields] = useForm({
    lastResult: currentState,
    onValidate: ({ formData }) =>
      parseWithZod(formData, { schema: siteSchema }),
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <div className="container flex items-center justify-center py-10">
      <Card className="w-full max-w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Create Site</CardTitle>
          <CardDescription>
            Fill in the details below to create your new site
          </CardDescription>
        </CardHeader>
        <form action={action} id={form.id} onSubmit={form.onSubmit}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor={fields.name.name}>Site Name</Label>
              <Input
                id={fields.name.name}
                placeholder="My Awesome Blog"
                name={fields.name.name}
                key={fields.name.key}
                defaultValue={fields.name.initialValue}
                aria-describedby={`${fields.name.name}-error`}
              />
              {fields.name.errors && (
                <p
                  id={`${fields.name.name}-error`}
                  className="text-sm font-medium text-destructive"
                >
                  {fields.name.errors}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor={fields.subdirectory.name}>Subdirectory</Label>
              <Input
                id={fields.subdirectory.name}
                placeholder="my-awesome-blog"
                name={fields.subdirectory.name}
                key={fields.subdirectory.key}
                defaultValue={fields.subdirectory.initialValue}
                aria-describedby={`${fields.subdirectory.name}-error`}
              />
              {fields.subdirectory.errors && (
                <p
                  id={`${fields.subdirectory.name}-error`}
                  className="text-sm font-medium text-destructive"
                >
                  {fields.subdirectory.errors}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor={fields.description.name}>Description</Label>
              <Textarea
                id={fields.description.name}
                placeholder="Write a brief description of your site..."
                name={fields.description.name}
                key={fields.description.key}
                defaultValue={fields.description.initialValue}
                aria-describedby={`${fields.description.name}-error`}
              />
              {fields.description.errors && (
                <p
                  id={`${fields.description.name}-error`}
                  className="text-sm font-medium text-destructive"
                >
                  {fields.description.errors}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton text="Create Site" className="w-full" />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
