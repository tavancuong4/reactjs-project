import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h2 className="title">Bạn hiện không xem được nội dung này !</h2>
      <div>
        Lỗi này thường do chủ sở hữu chỉ chia sẻ nội dung với một nhóm nhỏ, thay
        đổi người được xem hoặc đã xóa nội dung.
      </div>
      <button
        className="back"
        onClick={() => {
          navigate("/card");
        }}
      >
        Quay lai Home
      </button>
    </div>
  );
};

export default NotFound;
