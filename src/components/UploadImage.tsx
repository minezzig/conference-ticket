import { useRef, useState } from "react";

interface UploadImageProps {
  handleSaveImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  image: string | null;
  setImage: (image: string | null) => void;
  imageError: boolean;
}

function UploadImage({ handleSaveImage, image, setImage, imageError, }: UploadImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isTarget, setIsTarget] = useState(false);

  // add div to ref and trigger the click on input
  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // remove image from state by setting to null
  const handleRemoveImage = () => {
    setImage(null);
  };

  // prevent opening image as URL in browser
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsTarget(true)
  };
  const handleDragOut = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsTarget(false)
  };

  // if image is dropped, add it to state
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsTarget(false)
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div
      onClick={!image ? handleDivClick : undefined}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragOut}
    >
      <div className="text-neutral2">Upload Avatar</div>
      <div
        className={`hover:bg-neutral4 ${isTarget && "bg-orange1"} bg-neutral4/30 flex h-34 w-full ${!image ? "cursor-pointer" : "cursor-auto"} flex-col items-center rounded-lg object-contain backdrop-blur-xs ${image ? "p-0" : "p-5"} ${fileInputRef.current && "outline-neutral2 outline outline-offset-2"} border-neutral3 border border-dashed`}
      >
        {image ? (
          <div className="flex flex-col items-center gap-5 p-5">
            <img
              src={image}
              className="border-neutral3 h-16 w-16 rounded-lg border object-cover object-center"
            />
            <div className="text-neutral2 flex gap-3">
              <div
                className="bg-neutral4 z-100 cursor-pointer rounded px-2 underline"
                onClick={handleRemoveImage}
              >
                Remove Image
              </div>
              <div
                className="bg-neutral4 cursor-pointer rounded px-2 underline"
                onClick={handleDivClick}
              >
                Change image
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-neutral4 border-neutral3 rounded-lg border p-3">
              <img src="./images/icon-upload.svg" alt="upload" />
            </div>
            <div className="text-neutral3">
              Drag and drop or click to upload
            </div>
          </>
        )}
      </div>
      <div className="text-neutral3 mt-2 mb-5 flex gap-5">
        {!imageError ? (
          <div className="flex items-center gap-1 text-xs">
            <img src="images/icon-info.svg" alt="i" />
            <div>Upload your photo (JPG or PNG, max size: 500KB).</div>
          </div>
        ) : (
          <div className="flex items-center gap-1 text-xs">
            <img
              src="/images/icon-info.svg"
              alt="info"
              className="brightness-[91%] contrast-[93%] hue-rotate-[325deg] invert-[52%] saturate-[1338%] sepia-[44%]"
            />
            <div className="text-orange1">
              File too large. Please upload a file under 500KB
            </div>
          </div>
        )}
      </div>

      {/* hidden image input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleSaveImage}
        className="hidden"
      />
    </div>
  );
}

export default UploadImage;
