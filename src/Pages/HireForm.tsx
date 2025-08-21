import Headers from '../components/Header';
export default function HireForm() {
  return (
    <>
      <div className="flex flex-col min-h-[30vh] md:min-h-[70vh]">
        <Headers />
        <div className="p-16 flex flex-col justify-between">
          <form className="flex flex-wrap">
            <input type="text" placeholder="NAME" name="name" />
            <input type="text" placeholder="Company Name" name="company" />
            <input type="text" placeholder="Mobile No" name="mobile" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Service" name="service" />
            <input
              type="text"
              placeholder="Write Your Description"
              name="jobDesc"
            />
          </form>
        </div>
      </div>
    </>
  );
}
