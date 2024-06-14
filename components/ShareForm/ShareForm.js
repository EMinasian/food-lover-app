import ImagePicker from "@/components/ImagePicker";
const labelStyle = "text-white flex flex-col font-semibold";
const textareaStyle = "rounded-lg bg-gray-900 my-2 p-2";
const inputStyle = `${textareaStyle} h-8`;

export default function ShareForm({ action }) {
  return (
    <form action={action}>
      <div className="flex justify-end">
        <button type="reset" className="text-orange-500 p-2 m-2 font-semibold">
          Clear
        </button>
        <button
          type="submit"
          className="bg-orange-700 py-2 px-8 m-2 text-white font-semibold rounded-md"
        >
          Save
        </button>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col gap-6 w-1/3 p-8">
          <label className={labelStyle}>
            Your name
            <input type="text" name="creator" className={inputStyle} required />
          </label>
          <label className={labelStyle}>
            Your email address
            <input
              type="email"
              name="creator_email"
              className={inputStyle}
              required
            />
          </label>
          <label className={labelStyle}>
            Title
            <input type="text" name="title" className={inputStyle} required />
          </label>
        </div>
        <div className="flex flex-col gap-6 w-2/3 p-8">
          <label className={labelStyle}>
            Short summary
            <input type="text" name="summary" className={inputStyle} required />
          </label>
          <label className={labelStyle}>
            Instructions
            <textarea
              type="text"
              name="instructions"
              className={`${textareaStyle} h-18 resize-none`}
              required
            />
          </label>
          <ImagePicker />
        </div>
      </div>
    </form>
  );
}
