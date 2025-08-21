function Form() {
  return (
    <>
      <div className="flex justiyf-center flex-col py-16 m-8">
        <form className="flex flex-col gap-4 max-w-sm mx-auto p-6 bg-white backdrop-blur-lg shadow-md rounded">
          <input name="Title" type="text" placeholder="TITLE" />
          <input name="Content" type="text" placeholder="CONTENT" />
          <input name="Image" type="file" placeholder="" />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
      </div>
    </>
  );
}

export default Form;
