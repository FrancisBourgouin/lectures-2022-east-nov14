import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import UrlList from "./components/UrlList";
import UrlForm from "./components/UrlForm";
import UserForm from "./components/UserForm";
import { useState } from "react";
import axios from "axios";

function App() {
  const [urls, setUrls] = useState([]);
  const [user, setUser] = useState(null);

  const createUser = (formData) => {
    axios
      .post("/users", formData)
      .then((res) => res.data)
      .then(setUser)
      .catch((err) => console.log(err));
  };
  const authenticateUser = (formData) => {
    axios
      .post("/login", formData)
      .then((res) => res.data)
      .then(setUser)
      .catch((err) => console.log(err));
  };

  const createUrl = (formData) => {
    formData.user_id = user.id;
    axios
      .post("/urls", formData)
      .then((res) => res.data)
      .then((newUrl) => setUrls([...urls, newUrl]))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header>
        <h1>Tinyapp in React!</h1>
      </header>
      <main>
        {urls.length > 0 && <UrlList urls={urls} />}
        {user && <UrlForm onSubmit={createUrl} />}
        {!user && (
          <>
            <UserForm onSubmit={createUser} />
            <LoginForm onSubmit={authenticateUser} />
          </>
        )}
      </main>

      <form encType="multipart/data"></form>
    </div>
  );
}

export default App;
