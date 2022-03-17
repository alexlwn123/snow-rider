import { useMoralis } from "react-moralis";
import { useChain } from "react-moralis";
import { useState, useEffect } from "react";
import { Typography, Row, Button, Card, Modal, Col } from "antd";
import Address from "../Address/Address";
import { SelectOutlined } from "@ant-design/icons";
import { getExplorer } from "helpers/networks";
import Text from "antd/lib/typography/Text";
import { Nfts } from "./Nfts";

const { Paragraph } = Typography;

export const AVALANCHE_MAINNET_PARAMS = {
  chainId: "0xA86A",
  chainName: "Avalanche Mainnet C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://snowtrace.io/"],
};

const styles = {
  row: {
    alignItems: "center",
    display: "flex",
  },
  text: {
    color: "Black",
    fontSize: "25px",
    textJustify: "center",
    marginBottom: "5px",
  },
  select: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  header: {
    textAlign: "center",
  },
  sectionHeader: {
    fontSize: "20px",
    textAlign: "center",
  },
};
const ProfileModal = (props) => {
  const { isModalVisible, setIsModalVisible, riderName } = props;
  const { account, logout, user } = useMoralis();
  const { chainId } = useChain();
  const [userInput, setUserInput] = useState("");
  const [stachedName, setStachedName] = useState(riderName);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUserInput(riderName);
  }, [riderName, setUserInput]);

  const updateRiderName = async () => {
    console.log("update", userInput);
    setLoading(true);
    await user.set("riderName", userInput);
    await user.save();
    setStachedName(userInput);
    window.location.reload();
  };

  const resetRiderName = () => {
    console.log("cancel");
    setUserInput(stachedName);
  };

  return (
    <Modal
      visible={isModalVisible}
      footer={null}
      onCancel={() => setIsModalVisible(false)}
      bodyStyle={{
        padding: "15px",
        fontSize: "17px",
        fontWeight: "500",
      }}
      style={{ fontSize: "16px", fontWeight: "500" }}
      width="600px"
    >
      <div style={styles.header}>
        <h2>Edit Profile</h2>
      </div>
      <Card
        style={{
          marginTop: "10px",
          borderRadius: "1rem",
        }}
        bodyStyle={{ padding: "15px" }}
      >
        <Text style={styles.sectionHeader}>Rider Info</Text>
        <div style={styles.select}>
          <Row justify="start" gutter={[20, 20]} style={styles.row}>
            <Col>
              <Text>Rider Name</Text>
            </Col>
            <Col>
              <Paragraph
                editable={{
                  onChange: setUserInput,
                  onCancel: () => resetRiderName(),
                  onClick: () => updateRiderName(),
                }}
              >
                {userInput}
              </Paragraph>
            </Col>
            <Col>
              <Button
                type="primary"
                loading={loading}
                onClick={() => updateRiderName()}
              >
                Update rider Name
              </Button>
            </Col>
          </Row>
        </div>
      </Card>
      <Card
        title="Rider Avatar"
        style={{
          marginTop: "10px",
          borderRadius: "1rem",
        }}
        bodyStyle={{ padding: "15px" }}
      >
        <Nfts />
      </Card>
      <Card
        style={{
          marginTop: "10px",
          borderRadius: "1rem",
        }}
        bodyStyle={{ padding: "15px" }}
      >
        <Text style={styles.sectionHeader}>Wallet Info</Text>
        <>
          <Address
            avatar="left"
            size={6}
            copyable
            style={{ fontSize: "20px" }}
          />
          <div style={{ marginTop: "10px", padding: "0 10px" }}>
            <a
              href={`${getExplorer(chainId)}/address/${account}`}
              target="_blank"
              rel="noreferrer"
            >
              <SelectOutlined style={{ marginRight: "5px" }} />
              View on Explorer
            </a>

            <Button
              size="large"
              type="primary"
              style={{
                width: "100%",
                marginTop: "10px",
                borderRadius: "0.5rem",
                fontSize: "16px",
                fontWeight: "500",
              }}
              onClick={async () => {
                await logout();
                window.localStorage.removeItem("connectorId");
                setIsModalVisible(false);
              }}
            >
              Disconnect Wallet
            </Button>
          </div>
        </>
      </Card>
    </Modal>
  );
};

export default ProfileModal;
