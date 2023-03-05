// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract WouwNFT is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, Ownable {
using Strings for uint256;

string public baseURI;
string public baseExtension = ".json";
string public notRevealedUri;
uint256 public cost = 1 ether; //price for 1 NFT
uint256 public maxSupply = 1111; // collection supply
uint256 public maxMintAmount = 20; // max mint amount for one transaction
uint256 public nftPerAddressLimit = 5; //max mint amount for one wallet address
bool public paused = false;
bool public revealed = true;
bool public onlyWhitelisted = false;
address payable commissions = payable(0x4Cd8B8AE3F537181982494E405a74637DC2244a4); // address for comissions
address[] public whitelistedAddresses;
mapping(address => uint256) public addressMintedBalance;
mapping(address => bool) public whitelisted;

constructor(
    string memory _name,
    string memory _symbol,
    string memory _initBaseURI,
    string memory _initNotRevealedUri
) ERC721(_name, _symbol) {
    setBaseURI(_initBaseURI);
    setNotRevealedURI(_initNotRevealedUri);
}

// internal
function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
}


// public
function mint(uint256 _mintAmount, string memory uri) public payable {
    require(!paused, "the contract is paused");
    uint256 supply = totalSupply();
    require(_mintAmount > 0, "need to mint at least 1 NFT");
    require(_mintAmount <= maxMintAmount, "max mint amount per session exceeded");
    require(supply + _mintAmount <= maxSupply, "max NFT limit exceeded");

    if (msg.sender != owner()) {
        if(onlyWhitelisted == true) {
            require(whitelisted[msg.sender], "user is not whitelisted");
            uint256 ownerMintedCount = addressMintedBalance[msg.sender];
            require(ownerMintedCount + _mintAmount <= nftPerAddressLimit, "max NFT per address exceeded");
        }
        require(msg.value >= cost * _mintAmount, "insufficient funds");
    }

    for (uint256 i = 1; i <= _mintAmount; i++) {
        addressMintedBalance[msg.sender]++;
        _safeMint(msg.sender, supply + i);
        _setTokenURI(supply + i, uri);
    }

    (bool success, ) = payable(commissions).call{value: msg.value * 10 / 100}(""); // comission persentage
        require(success);
}

//only owner
function reveal() public onlyOwner {
    revealed = true;
}

function setNftPerAddressLimit(uint256 _limit) public onlyOwner {
    nftPerAddressLimit = _limit;
}

function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
}

function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
    maxMintAmount = _newmaxMintAmount;
}

function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
}

function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
}

function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
notRevealedUri = _notRevealedURI;
}

function pause(bool _state) public onlyOwner {
    paused = _state;
}

function setOnlyWhitelisted(bool _state) public onlyOwner {
    onlyWhitelisted = _state;
}

function whitelistUser(address _user) public onlyOwner {
    whitelisted[_user] = true;
}

function removeWhitelistUser(address _user) public onlyOwner {
    whitelisted[_user] = false;
}

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }


}