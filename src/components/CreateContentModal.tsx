import { CloseIcon } from "../Icons/CloseIcon";
import { Button } from "./Button";
import { Input } from "../components/Input";
import { useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

// Enum for content types
enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Link = "link",
}

export function CreateContentModal({ open, onClose }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    axios.post(
      BACKEND_URL + "/api/v1/content",
      {
        title,
        link,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );

    onClose();
  }

  return (
    open && (
      <div className="fixed inset-0 z-50 bg-brand-300 bg-opacity-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
          {/* Close button */}
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-600 hover:text-black">
              <CloseIcon />
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-2 text-center">
            <Input reference={titleRef} placeholder={"Title"} />
            <Input reference={linkRef} placeholder={"Link"} />

            {/* Type Buttons */}
            <div>
              <h2 className="font-medium text-gray-700 mb-2">Type:</h2>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  text="Youtube"
                  size="sm"
                  variant={type === ContentType.Youtube ? "primary" : "secondary"}
                  onClick={() => setType(ContentType.Youtube)}
                />
                <Button
                  text="Twitter"
                  size="sm"
                  variant={type === ContentType.Twitter ? "primary" : "secondary"}
                  onClick={() => setType(ContentType.Twitter)}
                />
                <Button
                  text="Link"
                  size="sm"
                  variant={type === ContentType.Link ? "primary" : "secondary"}
                  onClick={() => setType(ContentType.Link)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button onClick={addContent} size="md" variant="primary" text="Submit" />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
