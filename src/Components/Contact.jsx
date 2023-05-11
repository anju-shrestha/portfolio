
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-2 bg-[#330a11]"
    >
      <form
        method="POST"
        action="https://getform.io/f/a34d0d9a-a939-4a45-9ab4-5177e8b45626"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-white">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </p>
          <p className=" py-2">
            Submit the form below or shoot me an email -
            anjushresth1111@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="Name"
          className="bg-[#ccd6f6] p-2"
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          className="my-4 p-2 bg-[#ccd6f6]"
          required
        />
        <textarea
          name="message"
          rows="6"
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 rounded-lg hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
