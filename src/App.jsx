import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import Connections from "./pages/Connections";
import Requests from "./pages/Requests";
import Dash from "./pages/Dash";
import Sections from "./pages/Sections";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

export default function App() {
  return (
    <>
      <Provider store={appStore}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Sections />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="signup" element={<Signup />}></Route>
            </Route>
            <Route path="/dash" element={<Dash />}>
              <Route path="/dash" element={<Feed />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="connections" element={<Connections />}></Route>
              <Route path="requests" element={<Requests />}></Route>
            </Route>
          </Routes>
        </HashRouter>
      </Provider>
    </>
  );
}
