const express = require("express");

const auctionController = require("../controllers/auction");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.get("/", auctionController.getIndex);

router.get("/bid", auctionController.getAuctionBid);

router.get("/Auctioninfo", auctionController.getAuctionInfo);

router.get("/carinfo", auctionController.getCarInfo);

router.get("/PreviousAuction", auctionController.getPreviousAuction);

router.get("/NextAuction", auctionController.getNextAuction);
module.exports = router;
