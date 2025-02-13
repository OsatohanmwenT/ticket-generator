import { IKContext, IKUpload } from "imagekitio-react";
import { useRef, useState } from "react";
import cloudSvg from "../assets/icon.svg";
import {toast} from "react-toastify";

const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENPOINT;
const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;

const authenticator = async () => {
  try {
    const response = await fetch("https://ticket-generator-5a50.onrender.com/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`,
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

interface Props {
  updateFormData: (field: string, value: string) => void;
}

const ImageUpload = ({ updateFormData }: Props) => {
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<{ url: string } | null>(null);
  const ikUploadRef = useRef<HTMLInputElement | null>(null);

  const onError = (err: any) => {
    console.log("Error", err);
    toast.error("An error occurred!", {
      autoClose: 5000,
      position: "bottom-right",
      className: "!bg-dark-green-200",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSuccess = (res: any) => {
    setFile(res);
    updateFormData("image", res.url);
    toast.success("Success!", {
      autoClose: 5000,
      position: "bottom-right",
      className: "!bg-dark-green-200",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onValidate = (file: File) => {
    if (file.size > 20 * 1024 * 1024) {
      console.log("too big");
      return false;
    }
    return true;
  };

  return (
    <IKContext
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      <IKUpload
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        validateFile={onValidate}
        onUploadStart={() => setProgress(0)}
        onUploadProgress={({ loaded, total }) => {
          const percent = Math.round((loaded / total) * 100);
          setProgress(percent);
        }}
        className="hidden"
        ref={ikUploadRef}
      />

      {progress > 0 && progress !== 100 && (
        <div className="w-full rounded-full bg-white">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      {file && (
        <div className="absolute inset-0 rounded-4xl">
          <img
            src={file.url}
            className="object-fill w-full h-full rounded-4xl object-center"
            alt="avater"
          />
        </div>
      )}
      <button
        onClick={() => {
          if (ikUploadRef.current) {
            ikUploadRef.current?.click();
          }
        }}
        className={`upload-btn ${file && "z-50 opacity-0 hover:opacity-50"}`}
      >
        <img src={cloudSvg} alt="cloud icon" />
        <p>Drag & Drop or click to upload</p>
      </button>
    </IKContext>
  );
};

export default ImageUpload;
