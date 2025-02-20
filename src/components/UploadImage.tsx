import { useRef } from "react";

interface UploadImageProps {
  handleSaveImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  image: string | null;
  setImage: (image: string | null) => null;
}


function UploadImage({ handleSaveImage, image, setImage }: UploadImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveImage = () => {
    setImage(null)
  };

  // prevent opening image as URL in browser
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); 
    const file = e.dataTransfer.files?.[0]; 
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl); 
    }
  };

  return (
    <div onClick={!image ? handleDivClick : undefined} onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="text-neutral2">Upload Avatar</div>
      <div
        className={`h-34 bg-neutral4/30 flex w-full ${!image ? "cursor-pointer" : "cursor-auto"} flex-col items-center rounded-lg object-contain backdrop-blur-xs ${image ? "p-0" : "p-5"} ${fileInputRef.current && "outline-neutral2 outline outline-offset-2"} border-neutral3 border border-dashed`}
      >
        {image ? (
          <div className="flex flex-col items-center gap-5 p-5">
            <img
              src={image}
              className="border-neutral3 h-16 w-16 rounded-lg border object-cover object-center"
            />
            <div className="text-neutral2 flex gap-3">
              <div
                className="bg-neutral4 z-100 rounded px-2 underline cursor-pointer"
                onClick={handleRemoveImage}
              >
                Remove Image
              </div>
              <div className="bg-neutral4 rounded px-2 underline cursor-pointer" onClick={handleDivClick}>
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
      <div className="text-neutral3 mt-2 mb-5 flex gap-5 text-xs">
        <img src="images/icon-info.svg" alt="i" />
        Upload your photo (JPG or PNG, max size: 500KB).
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
