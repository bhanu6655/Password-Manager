import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const colorList = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const PasswordManager = () => {
  const [websitename, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordsList, managePasswords] = useState([])
  const [search, setSearch] = useState('')
  const [showPasswords, setShowPasswords] = useState(false)

  const onChangeWebsite = event => setWebsite(event.target.value)
  const onChangeUsername = event => setUsername(event.target.value)
  const onChangePassword = event => setPassword(event.target.value)
  const onChangeSearch = event => setSearch(event.target.value)

  const onAddPassword = event => {
    event.preventDefault()
    const bgColor = colorList[Math.floor(Math.random() * colorList.length)]
    const newPassword = {
      id: uuidv4(),
      websitename,
      username,
      password,
      bgColor,
    }
    managePasswords(prev => [...prev, newPassword])
    setWebsite('')
    setUsername('')
    setPassword('')
  }

  const onDelete = id => {
    const updatedList = passwordsList.filter(each => each.id !== id)
    managePasswords(updatedList)
  }

  const filteredPasswords = passwordsList.filter(each =>
    each.username.toLowerCase().includes(search.toLowerCase()),
  )
  const passwordslength = passwordsList.length
  return (
    <div className="password-manager-main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        className="app-logo"
        alt="app logo"
      />

      <div className="adding-password-conatiner">
        <form className="add-password-form" onSubmit={onAddPassword}>
          <h1 className="add-password-heading">Add New Password</h1>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              className="input-logos"
              alt="website"
            />
            <hr className="vertical-line" />
            <input
              type="text"
              placeholder="Enter Website"
              className="input-section"
              value={websitename}
              onChange={onChangeWebsite}
            />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              className="input-logos"
              alt="username"
            />
            <hr className="vertical-line" />
            <input
              type="text"
              placeholder="Enter Username"
              className="input-section"
              value={username}
              onChange={onChangeUsername}
            />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              className="input-logos"
              alt="password"
            />
            <hr className="vertical-line" />
            <input
              type="password"
              placeholder="Enter Password"
              className="input-section"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <button type="submit" className="button-add">
            Add
          </button>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          className="password-manager-image"
          alt="password manager"
        />
      </div>

      <div className="showing-password-conatiner">
        <div className="your-passwords-search">
          <div>
            <h1 className="your-passwords">
              Your Passwords <p>{passwordslength}</p>
            </h1>
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              className="input-logos"
              alt="search"
            />
            <hr className="vertical-line" />
            <input
              type="search"
              placeholder="Search"
              className="input-section"
              value={search}
              onChange={onChangeSearch}
            />
          </div>
        </div>

        <hr className="horizontal-line" />

        <div className="checkbox-container">
          <label htmlFor="checkbox" className="check-box-labels">
            Show passwords
          </label>
          <input
            type="checkbox"
            id="checkbox"
            className="checkbox"
            checked={showPasswords}
            onChange={() => setShowPasswords(prev => !prev)}
          />
        </div>

        <ul className="passwords-list-container">
          {filteredPasswords.length === 0 ? (
            <div className="no-passwords-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="no-passwords"
                alt=" no passwords"
              />
              <p className="no-passwords-text">No Passwords</p>
            </div>
          ) : (
            filteredPasswords.map(each => (
              <PasswordItem
                key={each.id}
                eachuser={each}
                onDelete={onDelete}
                showPasswords={showPasswords}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default PasswordManager
