"use client";
import { JSONContent } from "novel";
import React, { useMemo } from "react";
import { generateHTML } from "@tiptap/html";
import Documnet from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import BlogQuote from "@tiptap/extension-blockquote";
import TextStyle from "@tiptap/extension-text-style";
import CodeBlock from "@tiptap/extension-code-block";
import Placeholder from "@tiptap/extension-placeholder";
import TaskItem from "@tiptap/extension-task-item";
import HoriontalRule from "@tiptap/extension-horizontal-rule";
import TaskList from "@tiptap/extension-task-list";
import OrderedList from "@tiptap/extension-ordered-list";
const RenderArticle = ({ json }: { json: JSONContent }) => {
  const out = useMemo(() => {
    return generateHTML(json, [
      Documnet,
      Paragraph,
      Text,
      Link,
      Underline,
      Heading,
      ListItem,
      BulletList,
      Code,
      BlogQuote,
      TextStyle,
      CodeBlock,
      Placeholder,
      TaskItem,
      HoriontalRule,
      TaskList,
      OrderedList,
    ]);
  }, [json]);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: out }}
      className="prose m-auto w-11/12 sm:prose-lg dark:prose-invert sm:w-2/3 prose-li:marker:text-primary"
    />
  );
};

export default RenderArticle;
