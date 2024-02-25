import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import moment from "moment";
const Messages = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("");
  const getMessages = async () => {
    setLoading(true);
    try {
      let { data: messages, error } = await supabase
        .from("messages")
        .select("*");
      if (error == null) {
        setMessages(messages);
      } else {
        setStatus("Something went wrong!!!");
      }
      console.log(messages, error);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMessages();
  }, []);
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      {status}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:flex-row ">
        {loading ? (
          <h2 className="text-center text-white text-4xl">Loading...</h2>
        ) : (
          <div style={{ width: "100%" }}>
            <h2 className="text-center text-white text-4xl">Messages</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-8 px-12 sm:px-0">
              {messages != [] &&
                messages.map(({ id, name, email, message, created_at }) => (
                  <div
                    className="shadow-md shadow-gray-800 rounded-lg w-full mx-auto mt-5 text-white p-4"
                    key={id}
                  >
                    <div className="flex items-center justify-between">
                      <p class="text-xl">{name}</p>
                      <p class="text-xl">
                        {moment(created_at).format("DD.MM.YYYY, HH:mm")}
                      </p>
                    </div>
                    <p class="text-xl my-2 underline">
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                    <p class="text-xl">{message}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
