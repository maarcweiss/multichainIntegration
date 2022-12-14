import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Web3Modal from "web3modal";
import NFT from "../engine/NFT.json";
import Market from "../engine/market.json";
import { mmnft, mmmarket } from "../engine/configuration";
import { goenft, goemarket } from "../engine/configuration";
import { hhnft, hhmarket } from "../engine/configuration";
import { rinnft, rinmarket } from "../engine/configuration";
import { bsctnft, bsctmarket } from "../engine/configuration";
import { ethnft, ethmarket } from "../engine/configuration";
import { bscnft, bscmarket } from "../engine/configuration";
import { polnft, polmarket } from "../engine/configuration";
import { rosenft, rosemarket } from "../engine/configuration";
import { velnft, velmarket } from "../engine/configuration";
import { fantnft, fantmarket } from "../engine/configuration";
import { harnft, harmarket } from "../engine/configuration";
import { celnft, celmarket } from "../engine/configuration";
import { cronft, cromarket } from "../engine/configuration";
import { avaxnft, avaxmarket } from "../engine/configuration";
import { moonnft, moonmarket } from "../engine/configuration";
import detectEthereumProvider from "@metamask/detect-provider";
import {
  Card,
  Button,
  Input,
  Col,
  Row,
  Spacer,
  Container,
  Text,
} from "@nextui-org/react";
import { client } from "../engine/configuration";
import "sf-font";

export default function createMarket() {
  const [fileUrl, setFileUrl] = useState(null);
  const [nftcontract, getNft] = useState([]);
  const [market, getMarket] = useState([]);

  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    setNft();
  }, [getNft, getMarket]);

  const router = useRouter();

  async function onChange(e) {
    //what we need to attach to the HTML button that will ask for the picture file
    //so when we click browse, it is going to open our mashin defualt folder
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      //pointing to the public infura ipfs gateway and append the file instead of {added.path}
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function createMarket() {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl) return;
    //JSON.stringify is a metadata generator (metadat generator)
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      createNFT(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function setNft() {
    const web3Modal = new Web3Modal();
    await web3Modal.connect();
    var hh = "0x7a69";
    var goe = "0x5";
    var mm = "0x13881";
    var bsct = "0x61";
    var moon = "0x505";
    var avax = "0xa86a";
    var cro = "0x19";
    var celo = "0xa4ec";
    var rose = "0xa516";
    var fantom = "0xfa";
    var har = "0x63564c40";
    var velas = "0x6a";
    var poly = "0x89";
    var bsc = "0x38";
    var eth = "0x1";
    var rin = "0x4";
    const connected = await detectEthereumProvider();
    if (connected.chainId == hh) {
      var nftcontract = hhnft;
    } else if (connected.chainId == goe) {
      var nftcontract = goenft;
    } else if (connected.chainId == mm) {
      var nftcontract = mmnft;
    } else if (connected.chainId == bsct) {
      var nftcontract = bsctnft;
    } else if (connected.chainId == moon) {
      var nftcontract = moonnft;
    } else if (connected.chainId == avax) {
      var nftcontract = avaxnft;
    } else if (connected.chainId == cro) {
      var nftcontract = cronft;
    } else if (connected.chainId == celo) {
      var nftcontract = celnft;
    } else if (connected.chainId == eth) {
      var nftcontract = ethnft;
    } else if (connected.chainId == bsc) {
      var nftcontract = bscnft;
    } else if (connected.chainId == rose) {
      var nftcontract = rosenft;
    } else if (connected.chainId == velas) {
      var nftcontract = velnft;
    } else if (connected.chainId == fantom) {
      var nftcontract = fantnft;
    } else if (connected.chainId == har) {
      var nftcontract = harnft;
    } else if (connected.chainId == poly) {
      var nftcontract = polnft;
    } else if (connected.chainId == rin) {
      var nftcontract = rinnft;
    }
    getNft(nftcontract);
    console.log(nftcontract);
    setMarket();
  }

  async function setMarket() {
    var hh = "0x7a69";
    var goe = "0x5";
    var mm = "0x13881";
    var bsct = "0x61";
    var moon = "0x505";
    var avax = "0xa86a";
    var cro = "0x19";
    var celo = "0xa4ec";
    var rose = "0xa516";
    var fantom = "0xfa";
    var har = "0x63564c40";
    var velas = "0x6a";
    var poly = "0x89";
    var bsc = "0x38";
    var eth = "0x1";
    var rin = "0x4";

    const connected = await detectEthereumProvider();
    if (connected.chainId == hh) {
      var market = hhmarket;
    } else if (connected.chainId == goe) {
      var market = goemarket;
    } else if (connected.chainId == mm) {
      var market = mmmarket;
    } else if (connected.chainId == bsct) {
      var market = bsctmarket;
    } else if (connected.chainId == moon) {
      var market = moonmarket;
    } else if (connected.chainId == avax) {
      var market = avaxmarket;
    } else if (connected.chainId == cro) {
      var market = cromarket;
    } else if (connected.chainId == celo) {
      var market = celmarket;
    } else if (connected.chainId == eth) {
      var market = ethmarket;
    } else if (connected.chainId == bsc) {
      var market = bscmarket;
    } else if (connected.chainId == rose) {
      var market = rosemarket;
    } else if (connected.chainId == velas) {
      var market = velmarket;
    } else if (connected.chainId == fantom) {
      var market = fantmarket;
    } else if (connected.chainId == har) {
      var market = harmarket;
    } else if (connected.chainId == poly) {
      var market = polmarket;
    } else if (connected.chainId == rin) {
      var market = rinmarket;
    }
    getMarket(market);
    console.log(market);
  }

  async function createNFT(url) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    let contract = new ethers.Contract(nftcontract, NFT, signer);
    //invokes the create NFTfunction from the smart contract
    let transaction = await contract.createNFT(url);
    let tx = await transaction.wait();
    let event = tx.events[0];
    let value = event.args[2];
    //getting the tokenId from the transaction
    let tokenId = value.toNumber();
    //setting the price that the user will input through the html code
    const price = ethers.utils.parseUnits(formInput.price, "ether");
    //calling the market smaart contract
    contract = new ethers.Contract(market, Market, signer);
    //it takes the listing fee from the market smart contract
    let listingFee = await contract.getListingFee();
    listingFee = listingFee.toString();
    //it send the listing fee as part of our transaction calling the createvaultitem function
    transaction = await contract.createVaultItem(nftcontract, tokenId, price, {
      value: listingFee,
    });
    //inject that transaaction into the blockchain and wait to be completed
    await transaction.wait();
    //send the user back to the home page
    router.push("/");
  }

  //it is only going to ask for the name and the description to create the metadata
  async function buyNFT() {
    const { name, description } = formInput;
    if (!name || !description || !fileUrl) return;
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      mintNFT(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  //be able to the user to keep the NFT
  async function mintNFT(url) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    //creating the contract value
    let contract = new ethers.Contract(nftcontract, NFT, signer);
    //obtains the cost for minting
    let cost = await contract.cost();
    //we will proceed to do the mint
    let transaction = await contract.mintNFT(url, { value: cost });
    await transaction.wait();
    //It will send whoever executed this call back to the portal
    router.push("/portal");
  }

  //--------------------HTML CODE---------------------------

  return (
    <div>
      <Spacer></Spacer>
      <Container
        lg
        gap={2}
        css={{ fontFamily: "SF Pro Display", fontWeight: "200" }}
      >
        <Text h2>NFT Creator Portal</Text>
        <Row gap={4}>
          <Col>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Text h3 className="ml-3">
              The best NFT Marketplace.
            </Text>
            <Text h3>NSN is More Than A Token</Text>
            <Spacer></Spacer>
            <img
              src="NFTsolutionLogo.png"
              width={"100px"}
              marginRight={"6px"}
            />
          </Col>
          <Col css={{ marginRight: "$7" }}>
            <Spacer></Spacer>
            <Card css={{ marginTop: "$5", marginBottom: "$5" }}>
              <Card.Body style={{ backgroundColor: "#00000040" }}>
                <Text>
                  Select your Preferred Network, Create your Amazing NFT by
                  uploading your art using the simple NFT Dashboard. Simple!
                </Text>
              </Card.Body>
            </Card>
            <Card css={{ marginTop: "$5" }}>
              <Card.Body style={{ backgroundColor: "#00000040" }}>
                <Text>
                  NFTsolution Marketplace allows you to sell your NFT and accept
                  your favorite crypto as payment! No borders, No restrictions.
                  Simple!
                </Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Spacer></Spacer>
            <Text h3>Create and Sell your NFT in the Marketplace</Text>
            <Card
              style={{
                maxWidth: "300px",
                background: "#ffffff05",
                boxShadow: "0px 0px 5px #ffffff60",
              }}
            >
              <Card css={{ marginTop: "$1" }}>
                <Card.Body style={{ backgroundColor: "#000000" }}>
                  <Input
                    /**First input */
                    placeholder="Enter your NFT Name:"
                    onChange={(e) =>
                      updateFormInput({ ...formInput, name: e.target.value })
                    }
                  />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body style={{ backgroundColor: "#000000" }}>
                  <Input
                    placeholder="The NFT Description:"
                    onChange={(e) =>
                      /**This is where we invoke the call to get the input info */
                      updateFormInput({
                        ...formInput,
                        description: e.target.value,
                      })
                    }
                  />
                </Card.Body>
              </Card>
              <Card>
                <Card.Body style={{ backgroundColor: "#000000" }}>
                  <input type="file" name="Asset" onChange={onChange} />
                  {fileUrl /**Opens your browser to select the file */ && (
                    <img className="rounded " width="350" src={fileUrl} />
                  )}
                </Card.Body>
              </Card>
              <Container css={{ marginBottom: "$2" }}>
                <Input
                  css={{ marginTop: "$2" }}
                  placeholder="Set your price in NSN"
                  onChange={(e) =>
                    updateFormInput({ ...formInput, price: e.target.value })
                  }
                />
                <Button
                  /**First button to list your NFT */
                  size="sm"
                  style={{ fontSize: "18px" }}
                  onPress={createMarket}
                  css={{
                    marginTop: "$2",
                    marginBottom: "$5",
                    color: "$gradient",
                  }}
                >
                  List your NFT in our marketplace!
                </Button>
                <Button
                  size="sm"
                  style={{ fontSize: "18px" }}
                  onPress={buyNFT}
                  css={{
                    marginTop: "$2",
                    marginBottom: "$5",
                    color: "$gradient",
                  }}
                >
                  Buy your new NFT!
                </Button>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
