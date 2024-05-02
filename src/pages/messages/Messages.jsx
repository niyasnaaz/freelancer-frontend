import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Messages.css";
import moment from "moment";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [userData, setUserData] = useState([]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  useEffect(() => {
    const fetchUserData = async (userId) => {
      try {
        const response = await newRequest.get(`/users/${userId}`);
        return response.data.username; // Return the username
      } catch (error) {
        console.error("Error fetching user data:", error);
        return ""; // Return empty string if error occurs
      }
    };

    const fetchData = async () => {
      if (currentUser && data) {
        // Fetch username based on the current user's role
        const newData = await Promise.all(
          data.map(async (conversation) => {
            let userId = currentUser.isSeller
              ? conversation.sellerId
              : conversation.buyerId;
            const username = await fetchUserData(userId);
            return { ...conversation, username };
          })
        );
        setUserData(newData);
      }
    };

    fetchData();
  }, [currentUser, data]);

  return (
    <div className="messages">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
          </div>
          <table>
            <thead>
              <tr>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 ? (
                userData.map((c) => (
                  <tr
                    className={
                      ((currentUser.isSeller && !c.readBySeller) ||
                        (!currentUser.isSeller && !c.readByBuyer)) &&
                      "active"
                    }
                    key={c.id}
                  >
                    <td>{c.username}</td>
                    <td>
                      <Link to={`/message/${c.id}`} className="link">
                        {c?.lastMessage?.substring(0, 100)}...
                      </Link>
                    </td>
                    <td>{moment(c.updatedAt).fromNow()}</td>
                    <td>
                      {((currentUser.isSeller && !c.readBySeller) ||
                        (!currentUser.isSeller && !c.readByBuyer)) && (
                        <button onClick={() => handleRead(c.id)}>
                          Mark as Read
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No messages found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;
