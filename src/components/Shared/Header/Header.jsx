import { Link } from "react-router-dom";
import style from "./header.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="flex justify-around  items-center  w-full pt-6">
      <div className="flex w-full justify-between">
        <button className="font-bold text-xl">
          <Link to={`/`}>Fashion House</Link>
        </button>
        <div>
          <label htmlFor="searchField">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search Items"
              className="min-w-[358px] min-h-[48px]  border-b-2 outline-none"
            />
          </label>
        </div>
      </div>
      <nav className=" w-full">
        <ul className="absolute flex">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Explore</Link>
          </li>
          <li>
            <Link> Personal Collection</Link>
          </li>
          <li>
            <Link>Drops</Link>
          </li>
          <li className={style.nested__nav}>
            More
            <ul className="">
              <li>
                <Link>Stats</Link>
              </li>
              <li>
                <Link>Show</Link>
              </li>
              <li>
                <Link>About Us</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className={style.user_nav_area}>
        <ul className=" flex justify-between">
          <li>
            <Link>
              <NotificationsIcon />
            </Link>
          </li>
          <li>
            {" "}
            <Link>
              <ChatBubbleIcon />
            </Link>
          </li>
          <li>
            {" "}
            <Link>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 32, height: 32 }}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
