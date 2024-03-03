import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import Message from "../components/Message";
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
            <h2 className="text-center text-white text-4xl">
              Messages
            </h2>
            <div className="container mx-auto">
              {messages.length != 0 ? (
                messages.map((data) => <Message key={data.id} data={data} />)
              ) : (
                <h2 className="3xl text-white text-center mt-4">No messages</h2>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
