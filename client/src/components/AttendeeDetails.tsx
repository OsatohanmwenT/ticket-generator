import Separator from "./Separator";
import emailSvg from "../assets/email.svg";
import ImageUpload from "./ImageUpload";
import {FormData} from "../../types.ts";

interface Props {
  formData: FormData;
  updateFormData: (field: string, value: string) => void;
  errorMessage: FormData;
}

const AttendeeDetails = ({ formData, updateFormData, errorMessage }: Props) => {
  return (
    <div className="form-container !gap-5">
      <p className="mb-5 text-lg">Upload photo</p>
      <div className="form-head p-2 sm:p-4 !flex-nowrap flex-col">
        <div className="w-full bg-dark-green px-3">
          <div className="relative aspect-square w-[180px] sm:w-[240px] mx-auto">
            <ImageUpload updateFormData={updateFormData} />
          </div>
        </div>
        {errorMessage.image && (
          <p className="text-red-300 text-sm">{errorMessage.image}</p>
        )}
      </div>
      <Separator />
      <form className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Enter your name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => updateFormData("name", e.target.value)}
            name="name"
            className="select-input focus:outline-light-green"
          />
          {errorMessage.name && (
            <p className="text-red-300 text-sm">{errorMessage.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Enter your email *</label>
          <div className="border border-light-green-100 px-3 flex items-center rounded-lg">
            <img src={emailSvg} alt="email icon" />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => updateFormData("email", e.target.value)}
              className="p-2 outline-none w-full border-none focus:outline-light-green"
            />
          </div>
          {errorMessage.email && (
            <p className="text-red-300 text-sm">{errorMessage.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="about">About the project</label>
          <textarea
            id="about"
            name="about"
            value={formData.about}
            onChange={(e) => updateFormData("about", e.target.value)}
            placeholder="Description"
            className="select-input focus:outline-light-green"
          />
          {errorMessage.about && (
            <p className="text-red-300 text-sm">{errorMessage.about}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AttendeeDetails;
