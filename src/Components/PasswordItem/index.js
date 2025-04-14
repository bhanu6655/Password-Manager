import './index.css'

const PasswordItem = props => {
  const {eachuser, onDelete, showPasswords} = props
  const {websitename, username, password, bgColor, id} = eachuser
  const firstletter = websitename[0]
  const handleDelete = () => {
    onDelete(id)
  }
  return (
    <li className="password-items-container">
      <div className={`first-letter ${bgColor}`}>{firstletter}</div>
      <div className="password-details">
        <p className="text">{websitename}</p>
        <p className="text">{username}</p>
        {showPasswords ? (
          <p className="text">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="starts"
          />
        )}
      </div>
      <button
        type="button"
        data-testid="delete"
        className="delete-icon-button"
        onClick={handleDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
