import { useParams, useNavigate } from "react-router-dom";
import { useGift } from "../context/GiftContext";

function GiftDetailsPage() {
  const { id } = useParams();
  const { gifts } = useGift();
  const navigate = useNavigate();

  const gift = gifts.find((g) => g.id === Number(id));

  if (!gift) return <p>Gift not found.</p>;

  return (
    <div>
      <h2>{gift.name}'s Gift</h2>
      <p>{gift.description}</p>
      <button onClick={() => navigate("/list")}>Back</button>
    </div>
  );
}

export default GiftDetailsPage;
