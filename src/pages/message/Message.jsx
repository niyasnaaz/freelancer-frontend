import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.css";
import no_avatar from '../images/noavatar.jpg'


const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link className="msg" to="/messages">Messages</Link>
        </span>
        {isLoading ? (
          "loading"
        ) : error ? (
          "error"
        ) : (
          <div className="messages">
            {data.map((m) => {
              console.log("Message:", m);
              const senderName = m.userId === currentUser._id ? currentUser.username : (m.sender ? m.sender.username : 'Unknown');
              console.log("Sender Name:", senderName);
              return (
                <div className={m.userId === currentUser._id ? "owner item" : "item"} key={m._id}>
                  <h1>{senderName}</h1>
                  <img src={m.userId === currentUser._id ? currentUser.img || no_avatar : (m.sender ? m.sender.img || no_avatar : no_avatar)} alt="" />
                  <p>{m.desc}</p>
                </div>
              );
            })}

          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="write a message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
