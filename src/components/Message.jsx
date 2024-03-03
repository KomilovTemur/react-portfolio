import moment from "moment";

const Message = ({ data }) => {
  const { name, email, message, status, created_at } = data;
  return (
    status && (
      <div className="shadow-md shadow-gray-800 rounded-lg w-full mx-auto mt-5 text-white p-4">
        <div className="flex items-center justify-between">
          <p className="text-xl">{name}</p>
          <p className="text-xl">
            {moment(created_at).format("DD.MM.YYYY, HH:mm")}
          </p>
        </div>
        <p className="text-xl my-2 underline">
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p className="text-xl">{message}</p>
      </div>
    )
  );
};

export default Message;
