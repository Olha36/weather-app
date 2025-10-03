import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div
        className="header-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: '33px'
        }}
      >
        <Link to="/">
          <img src={logo} alt="logo" style={{ cursor: "pointer" }} />
        </Link>
        <nav>
          <a href="#">Who we are</a>
          <a href="#" style={{ margin: "0 42px" }}>
            Contacts
          </a>
          <a href="#">Menu</a>
        </nav>
        <div className="header-profile" style={{ display: "flex" }}>
          <Button
            size="medium"
            variant="contained"
            style={{
              backgroundColor: "#FFB36C",
              color: "#000000",
              marginRight: "27px",
            }}
            component={Link}
            to="/signup"
          >
            Sign Up
          </Button>

          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      </div>
    </>
  );
}
