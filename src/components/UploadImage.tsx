import React from 'react'

function UploadImage() {
  return (
    <div>
    <div className="text-white">Upload Avatar</div>
    <div className="cursor-pointer flex flex-col items-center  gap-5 bg-blue-900 rounded-lg p-5 border border-dashed border-white border-d">
      <div className="bg-blue-950 p-3 rounded-lg border border-blue-500">
        <img src="./images/icon-upload.svg" alt="upload" />
      </div>
      <div className="text-white">Drag and drop or click to upload</div>
    </div>
    <div className="text-gray-500 flex gap-5 mt-5">
      <img src="images/icon-info.svg" alt="i" />
      Upload your photo (JPG or PNG, max size: 500KB).
    </div>
  </div>
  )
}

export default UploadImage