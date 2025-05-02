import FavoriteFilled from "../assets/favorite-filled.png";
import FavoriteOutlined from "../assets/favorite-outlined.png";

const LikeButton = () => {
  // Add a click handler that increments the likes state
  // ...

  const likeButtonIcon =
    likes > 0 ? (
      <img draggable="false" src={FavoriteFilled} />
    ) : (
      <img draggable="false" src={FavoriteOutlined} />
    );

  return (
    <div className="likes">
      {/* Display the likeButtonIcon in a <span> with class "icon" */}
      {/* Add a click event listener to the likeButtonIcon that calls the click handler */}
      {/* Display the likes number in a <span> with class "count" */}
    </div>
  );
};

export default LikeButton;
