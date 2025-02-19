import { useRef} from "react";

interface UploadImageProps {
  handleSaveImage: (e: React.ChangeEvent<HTMLInputElement>) => void,
  image: string | null
}
function UploadImage({handleSaveImage, image}: UploadImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  
  const handleDivClick = () => {
    if(fileInputRef.current) {
      fileInputRef.current.click();
    }
  }


  return (
    <div onClick={handleDivClick}>
      <div className="text-white">Upload Avatar</div>
      <div className={`w-full h-40  object-contain cursor-pointer flex flex-col items-center  gap-5 bg-blue-900 rounded-lg ${image ? "p-0" : "p-5"} border border-white border-dashed`}>
        {image ? <img src={image} className="object-cover w-full h-full rounded-lg"/>:
        (<>
          <div className="bg-blue-950 p-3 rounded-lg border border-blue-500">
            <img src="./images/icon-upload.svg" alt="upload" />
          </div>
          <div className="text-white">Drag and drop or click to upload</div>
        </>
        )}
      </div>
      <div className="text-gray-500 flex gap-5 mt-5">
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
