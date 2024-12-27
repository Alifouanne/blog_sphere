"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UploadDropzone } from "@/lib/Uploadthing";
import Image from "next/image";
import React, { useState } from "react";
import { SubmitButton } from "../SubmitButtons";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { UpdateImage } from "@/lib/actions";

interface Props {
  siteId: string;
}
const UploadImageForm = ({ siteId }: Props) => {
  const [image, setImage] = useState<string>("");
  return (
    <Card>
      <CardHeader>
        <CardTitle>Image</CardTitle>
        <CardDescription>
          This is the image of your site. you can change it here
        </CardDescription>
      </CardHeader>
      <CardContent>
        {image ? (
          <Image
            src={image}
            alt="Uploaded Image"
            width={200}
            height={200}
            className="size-[200px] object-cover rounded-lg"
          />
        ) : (
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImage(res[0].url);
              toast.success("Image has been uploaded");
            }}
            onUploadError={() => {
              toast.error("Something went wrong.");
            }}
          />
        )}
      </CardContent>
      <CardFooter>
        <form action={UpdateImage}>
          <Input type="hidden" name="siteId" value={siteId} />
          <Input type="hidden" name="imageUrl" value={image} />
          <SubmitButton text="Chenge Image" />
        </form>
      </CardFooter>
    </Card>
  );
};

export default UploadImageForm;
