'use client'

import { Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">  
      <div>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <SimpleMDE placeholder="Description"/>
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
