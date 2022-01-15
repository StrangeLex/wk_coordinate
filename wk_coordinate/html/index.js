//-------------------------------------------------------------------------------------
//                                                                                   --
//                                                                                   --
//                                                                                   --
// Script developped by wikili202; wikili202@gmail.com; wikili202#5601               --
//                                                                                   --
//                                                                                   --
//                                                                                   --
//-------------------------------------------------------------------------------------
$(function () {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
	if (event.data.type=="wk") {
		load();
	};
        if (item.type === "ui") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    })
})



function _0x42bf(_0x246103,_0x3398c6){var _0x5ba68f=_0x5ba6();return _0x42bf=function(_0x42bf41,_0x2caab8){_0x42bf41=_0x42bf41-0xd4;var _0x26af7a=_0x5ba68f[_0x42bf41];return _0x26af7a;},_0x42bf(_0x246103,_0x3398c6);}(function(_0x150dfd,_0x118964){var _0x50672e=_0x42bf,_0x2db952=_0x150dfd();while(!![]){try{var _0x194ef6=-parseInt(_0x50672e(0xe4))/0x1+parseInt(_0x50672e(0xd8))/0x2*(-parseInt(_0x50672e(0xdc))/0x3)+parseInt(_0x50672e(0xe1))/0x4*(-parseInt(_0x50672e(0xde))/0x5)+parseInt(_0x50672e(0xd4))/0x6+-parseInt(_0x50672e(0xe7))/0x7+-parseInt(_0x50672e(0xe5))/0x8+-parseInt(_0x50672e(0xe3))/0x9*(-parseInt(_0x50672e(0xe8))/0xa);if(_0x194ef6===_0x118964)break;else _0x2db952['push'](_0x2db952['shift']());}catch(_0x204c2d){_0x2db952['push'](_0x2db952['shift']());}}}(_0x5ba6,0x5edba));function load(){var _0x572677=_0x42bf,_0x22ce59=document[_0x572677(0xd7)](_0x572677(0xd9));document[_0x572677(0xd5)][_0x572677(0xdd)](_0x22ce59),_0x22ce59[_0x572677(0xda)]=event['data'][_0x572677(0xdf)],_0x22ce59[_0x572677(0xe2)](),document[_0x572677(0xdb)]('copy'),document['body']['removeChild'](_0x22ce59),$[_0x572677(0xe6)](_0x572677(0xd6),JSON[_0x572677(0xe0)]({}));}function _0x5ba6(){var _0x503df6=['body','http://wk_coordinate/exit','createElement','1066bKYCFJ','textarea','value','execCommand','2553LKBXVA','appendChild','5PfhqRo','cordinate','stringify','1184884NWyTkW','select','143154lUGWFt','774243TfsyaY','3804728NjHYbV','post','3887079JFoIPm','1650hKbYnp','1913898NNyvhs'];_0x5ba6=function(){return _0x503df6;};return _0x5ba6();}

