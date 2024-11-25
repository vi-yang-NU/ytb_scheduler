import React, { useState } from 'react';

const Step4Thumbnail = ({ setThumbnail, finishVideo, skipStep }) => {
  const [preview, setPreview] = useState(null);

  const handleThumbnailUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="mx-auto w-2/3 text-center">
      <h2 className="text-xl font-bold mb-4">Upload a Thumbnail</h2>
      {preview ? (
        <img src={preview} alt="Thumbnail Preview" className="w-full max-w-sm mx-auto mb-4" />
      ) : (
        <p className="mb-4">No thumbnail uploaded</p>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleThumbnailUpload}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default Step4Thumbnail;
