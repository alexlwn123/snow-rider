import { Menu } from "antd";
import { Link } from "react-router-dom";
import GamePic from "../assets/Games_2.png";
import NFT from "../assets/NFT_2.png";
import Home from "../assets/Return_Home.png";
import Tracks from "../assets/Tracks_2.png";
Home;
const styles = {
  imageStyle: {
    height: "65px",
    "-webkit-filter": "drop-shadow(0 -5px 3px rgb(146,177,201))",
    filter: "drop-shadow(- -5px 3px rgb(146,177,201))",
  },
};

function MenuItems() {
  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(235, 248, 252)",
      }}
    >
      {/* <Menu.Item key="/">
        <Link to="/">
          <img className="menuimage" style={styles.imageStyle} src={Home} />
        </Link>
      </Menu.Item> */}
      <Menu.Item key="/">
        <Link to="/">
          <img className="menuimage" style={styles.imageStyle} src={GamePic} />
        </Link>
      </Menu.Item>
      <Menu.Item key="/tracks">
        <Link to="/tracks">
          <img className="menuimage" style={styles.imageStyle} src={Tracks} />
        </Link>
      </Menu.Item>
      {/* <Menu.Item key="/community">
        <Link to="/community">
          <img className="menuimage" style={styles.imageStyle} src={GamePic} />
        </Link>
      </Menu.Item> */}
      <Menu.Item key="/nfts">
        <Link to="/nfts">
          <img className="menuimage" style={styles.imageStyle} src={NFT} />
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
