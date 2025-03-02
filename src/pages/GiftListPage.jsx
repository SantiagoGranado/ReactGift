import { useContext } from "react";
import { GiftContext } from "../context/GiftContext";
import { Link } from "react-router-dom";

function GiftListPage() {
  const { gifts } = useContext(GiftContext);

  return (
    <div className="gift-list-container">
      <h2>Gift Recipients</h2>

      {gifts.length === 0 ? (
        <p className="no-gifts">No pending gifts.</p>
      ) : (
        <ul className="gift-list">
          {gifts.map((gift) => (
            <li key={gift.id} className="gift-item">
              <Link to={`/details/${gift.id}`} className="gift-link">
                {gift.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GiftListPage;
