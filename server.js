/*INSERT GROUP ID AND COOKIE BELOW*/

var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_0419108DE82438A7AE5080D37F89FB301E0A7789C56C3215DF6DEF46A3FB8F0604299AF70C24F6E5CFAEF0FB733A8B2F85697F664F711FB8FEC4CEF2072DBB27E3DC24D8BAD4D7C6628903ACE8919531A7A9F3C11285EBBCD50232805C363365A5E59458F91707FF1AFB120705FAF4B3CCF25AFB7A0DFA5038DF391C71DD5CDCB2586C7E981F65879BF287EF6D59B63AEC84A23F33DB6FAC646CC148ECB1526BE370373AED54BB71F5201FD49008EE45F6D97AC087876DEB79C7997EBC6B4EBB6246309BE5EA7A83F91C1D727DB235483F455714D61BFCF4BED279961AF4CAF5EE459D3742724CC09926F7D82F14329D868CF4A24A9BDF71716CCA784665ACCC9BFC0096C05281840F2D16B9466CF6BDC2F256ECFEA4E13278060AEFD467E355355F480A9462D70D45956D3A320EBC31B7E7D404262464A85D14AC5291F4F93182CC8778ECF9A4318221BED2F7D1AF306CC54B7335A01D85E8F00C6E73F7F8FE8DD497FF698F3B48AEF3531A248F5944DA75880DBBBF2E5FC2E89F6DCF6E1397DCABEE77A68232ED23C90A709F56BFDF426357CB044A36DC7FF8283101873D01110B2266ADAA073DFB45A047B8E59A32B67AA0D7CB6A04250811DA5D8C19BF5B19001D9CFCFC9DB9AF7BAAAD2363E86EEE0B9B3405D3C5121F73BC17AA296D506C5BF88800A2A20A24CD87EFBE594ADB76893087A21DE6E995E7D3FC95DE13F1B1E6F631CB26C916CD7BB2252DBC02A994BCF9C91C44838CE14A00396D15824F6640E85FF8D4BA00BFC184966FD305ABB16C3DB37ED9B57B6458C51D17E423F5BEF2719ED774CB342745CC362FD5A06245661D18C1FA666BEC541DB349C76641C6AAEA8A0FFDACCE091A51C00254BE5FF4FA12F87A04D704FE884CC018B9C2C2F50FDF9FEE5809FE0ECAAE93FB11A3C0EC16FA53885BA5990E3FD0435C3FEA8CF9528551218074620ACAF717D3F32033FAA0458EC9722619B100C8F439329A0190D801FEF3092EFC6CBE3073B76100840F8F6B0B42DC605E75AB33772F5C5E0F8B342C0D6BAAB9EEF197BE676F24E174411BBA769EB2804888FB3662CBD7AE0BC088B2E1" // << Put your account cookie inside of the quotes

/*INSERT GROUP ID AND COOKIE ABOVE*/


const express = require("express");
const rbx = require("noblox.js");
const app = express();

app.use(express.static("public"));

async function startApp() {
  await rbx.setCookie(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();

app.get("/ranker", (req, res) => {
    var User = req.query.userid;
    var Rank = req.query.rank;
    var Group = req.query.group

    rbx.setRank(parseInt(Group), parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
