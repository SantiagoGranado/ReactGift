import { useState } from "react";
import { useGift } from "../context/GiftContext";
import { useNavigate } from "react-router-dom";

function GiftFormPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addGift } = useGift();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || description.trim() === "") return;
    addGift(name, description);
    navigate("/list");
  };

  return (
    <div>
      <h2>Add a Gift</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipient's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gift Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Gift</button>
      </form>
    </div>
  );
}

export default GiftFormPage;
