/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/lib/Uploadthing";
import { Atom } from "lucide-react";
import TailwindEditor from "../EditorWrapper";
import { SubmitButton } from "../SubmitButtons";
import Image from "next/image";
import { toast } from "sonner";
import { useActionState, useState } from "react";
import { JSONContent } from "novel";
import { EditPostAction } from "@/lib/actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { PostSchema } from "@/lib/zodSchemas";
import slugify from "react-slugify";

interface EditProps {
  data: {
    title: string;
    slug: string;
    Description: string;
    articleContent: any;
    id: string;
    image: string;
  };
}
const EditArticleForm = ({ data }: EditProps) => {
  const [imageUrl, setImageUrl] = useState<string>(data.image);
  const [value, setValue] = useState<JSONContent>(data.articleContent);
  const [title, setTitle] = useState<string>(data.title);
  const [slug, setSlug] = useState<string>(data.slug);
  const [currentState, action] = useActionState(EditPostAction, undefined);
  const [form, fields] = useForm({
    lastResult: currentState,
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: PostSchema });
    },
  });
  const handleSlugGeneration = () => {
    const titleInput = title;
    if (titleInput?.length === 0 || titleInput === undefined) {
      return toast.error("Please create a title first");
    }
    setSlug(slugify(titleInput));
    return toast.success("Slug has been created");
  };
  return (
    <Card className="mt-5">
      <CardHeader>
        <CardTitle>Article Detailes</CardTitle>
        <CardDescription>
          Edit your article&apos;s content, update metadata, and manage
          publishing settings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="flex flex-col gap-6"
          action={action}
          id={form.id}
          onSubmit={form.onSubmit}
        >
          <Input type="hidden" name="articleId" value={data.id} />

          <div className="grid gap-2">
            <Label>Title</Label>
            <Input
              placeholder="Nextjs 15 Guide"
              name={fields.title.name}
              key={fields.title.key}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <p className="text-sm text-red-500">{fields.title.errors}</p>
          </div>
          <div className="grid gap-2">
            <Label>Slug</Label>
            <Input
              placeholder="Article Slug"
              name={fields.slug.name}
              key={fields.slug.key}
              onChange={(e) => {
                setSlug(e.target.value);
              }}
              value={slug}
            />

            <Button
              className="w-fit"
              variant="secondary"
              type="button"
              onClick={handleSlugGeneration}
            >
              <Atom className="size-4 mr-2" />
              Generate Slug
            </Button>
            <p className="text-sm text-red-500">{fields.slug.errors}</p>
          </div>
          <div className="grid gap-2">
            <Label>Description</Label>
            <Textarea
              placeholder="Description for your article..."
              className="h-32"
              name={fields.Description.name}
              key={fields.Description.key}
              defaultValue={data.Description}
            />
            <p className="text-sm text-red-500">{fields.Description.errors}</p>
          </div>
          <div className="grid gap-2">
            <Label>Cover Image</Label>
            <Input
              type="hidden"
              name={fields.coverImage.name}
              key={fields.coverImage.key}
              value={imageUrl}
            />
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="Uploaded Image"
                className="object-cover w-[200px] h-[200px] rounded-lg"
                width={200}
                height={200}
              />
            ) : (
              <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  setImageUrl(res[0].url);
                  toast.success("Image has been uploaded");
                }}
                onUploadError={() => {
                  toast.error("Something went wrong");
                }}
              />
            )}
            <p className="text-sm text-red-500">{fields.coverImage.errors}</p>
          </div>
          <div className="grid gap-2">
            <Label>Article Content</Label>
            <Input
              type="hidden"
              name={fields.articleContent.name}
              key={fields.articleContent.key}
              value={JSON.stringify(value || {})}
            />
            <TailwindEditor onChange={setValue} initialValue={value || {}} />
            <p className="text-sm text-red-500">
              {fields.articleContent.errors}
            </p>
          </div>
          <SubmitButton text="Edit Article" />
        </form>
      </CardContent>
    </Card>
  );
};

export default EditArticleForm;
